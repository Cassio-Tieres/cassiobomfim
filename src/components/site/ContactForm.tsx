import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { buildWhatsAppUrl, composeContactMessage } from "@/lib/whatsapp";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome.").max(80, "Use até 80 caracteres."),
  company: z.string().trim().max(100, "Use até 100 caracteres.").optional(),
  email: z
    .string()
    .trim()
    .max(160, "Use até 160 caracteres.")
    .refine((v) => v === "" || z.string().email().safeParse(v).success, "Informe um e-mail válido.")
    .optional(),
  message: z
    .string()
    .trim()
    .min(15, "Descreva o desafio com um pouco mais de detalhe (mín. 15 caracteres).")
    .max(1500, "Use até 1500 caracteres."),
  website: z.string().max(0).optional(), // honeypot
});

type FormValues = z.infer<typeof schema>;

const MIN_FILL_MS = 3000;
const COOLDOWN_MS = 30000;

type Status =
  | { type: "idle" }
  | { type: "sent"; url: string }
  | { type: "blocked"; url: string }
  | { type: "error"; message: string };

export function ContactForm() {
  const mountedAt = useRef(Date.now());
  const lastSentAt = useRef(0);
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", company: "", email: "", message: "", website: "" },
  });

  const messageLength = watch("message")?.length ?? 0;

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  const onSubmit = (values: FormValues) => {
    if (values.website) return; // bot
    const now = Date.now();
    if (now - mountedAt.current < MIN_FILL_MS) {
      setStatus({ type: "error", message: "Aguarde um instante antes de enviar." });
      return;
    }
    if (now - lastSentAt.current < COOLDOWN_MS) {
      setStatus({ type: "error", message: "Você acabou de enviar uma mensagem. Aguarde alguns segundos para enviar outra." });
      return;
    }

    setSubmitting(true);
    const url = buildWhatsAppUrl(composeContactMessage(values));
    const win = window.open(url, "_blank");
    lastSentAt.current = now;
    setSubmitting(false);

    if (win) {
      win.opener = null;
      setStatus({ type: "sent", url });
      reset();
    } else {
      setStatus({ type: "blocked", url });
    }
  };

  const onInvalid = () => setStatus({ type: "error", message: "Revise os campos destacados." });

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)} noValidate className="space-y-5" aria-describedby="form-note">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nome" htmlFor="name" error={errors.name?.message} required>
          <Input id="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} className="h-11 bg-background" {...register("name")} />
        </Field>
        <Field label="Empresa" htmlFor="company" error={errors.company?.message} optional>
          <Input id="company" autoComplete="organization" aria-invalid={!!errors.company} aria-describedby={errors.company ? "company-error" : undefined} className="h-11 bg-background" {...register("company")} />
        </Field>
      </div>
      <Field label="E-mail" htmlFor="email" error={errors.email?.message} optional>
        <Input id="email" type="email" inputMode="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} className="h-11 bg-background" {...register("email")} />
      </Field>
      <Field label="Descreva o problema ou projeto" htmlFor="message" error={errors.message?.message} required>
        <Textarea
          id="message"
          rows={6}
          maxLength={1500}
          placeholder="Ex.: hoje copiamos dados de um sistema para uma planilha todos os dias e queremos automatizar isso."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="resize-y bg-background"
          {...register("message")}
        />
        <span className="mt-1 block text-right font-mono text-[11px] text-muted-foreground">{messageLength}/1500</span>
      </Field>

      {/* Honeypot: hidden from people, tempting to bots */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div role="status" aria-live="polite">
        {status.type === "sent" && (
          <p className="flex items-start gap-2 rounded-md border border-success/30 bg-success/10 px-4 py-3 text-sm text-foreground">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-hidden />
            <span>
              O WhatsApp foi aberto com sua mensagem pronta. Para concluir, toque em enviar por lá.{" "}
              <a href={status.url} target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline underline-offset-2">
                Abrir novamente
              </a>
            </span>
          </p>
        )}
        {status.type === "blocked" && (
          <p className="flex items-start gap-2 rounded-md border border-signal/50 bg-signal-soft px-4 py-3 text-sm text-foreground">
            <AlertCircle className="mt-0.5 size-4 shrink-0 text-signal-foreground" aria-hidden />
            <span>
              Seu navegador bloqueou a nova janela.{" "}
              <a href={status.url} target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline underline-offset-2">
                Toque aqui para abrir o WhatsApp
              </a>{" "}
              com a mensagem pronta.
            </span>
          </p>
        )}
        {status.type === "error" && (
          <p className="flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
            <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden />
            {status.message}
          </p>
        )}
      </div>

      <Button type="submit" size="xl" className="w-full" disabled={submitting}>
        {submitting ? <Loader2 className="animate-spin" /> : <Send />}
        Enviar pelo WhatsApp
      </Button>
      <p id="form-note" className="text-center text-xs leading-relaxed text-muted-foreground">
        Ao enviar, o WhatsApp abre com sua mensagem preenchida. Nada é enviado sem a sua confirmação.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  required,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string | undefined;
  required?: boolean | undefined;
  optional?: boolean | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={htmlFor} className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-destructive" aria-hidden>*</span>}
        {optional && <span className="font-mono text-[11px] font-normal text-muted-foreground">opcional</span>}
      </Label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

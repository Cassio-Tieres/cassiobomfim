import { ArrowDown, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { hero, profile } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

import { HeroDiagram } from "./HeroDiagram";

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div aria-hidden className="bg-grid mask-fade pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-12 sm:px-8 sm:pt-16 lg:grid-cols-[1.08fr_1fr] lg:gap-10 lg:pb-28 lg:pt-24">
        <div className="fade-up">
          <p className="eyebrow flex items-start gap-2.5 leading-relaxed text-primary">
            <span className="pulse-signal mt-1.5 size-1.5 shrink-0 rounded-full bg-signal" aria-hidden />
            {profile.title}
          </p>
          <h1
            id="hero-title"
            className="mt-6 text-[2.35rem] font-semibold leading-[1.04] text-foreground sm:text-5xl lg:text-[3.4rem]"
          >
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{hero.subtitle}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <a href="#projetos">
                Conheça meus projetos
                <ArrowDown />
              </a>
            </Button>
            <Button asChild variant="outline" size="xl">
              <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle />
                Conversar sobre meu projeto
              </a>
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
            {["Automação de processos", "ETL/ELT", "Integração de APIs", "Migração de dados"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span aria-hidden className="size-1 rounded-full bg-primary" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="fade-up relative [animation-delay:150ms]">
          <div className="rounded-xl border bg-card/80 p-4 shadow-lift backdrop-blur-sm sm:p-6">
            <div className="mb-4 flex items-center justify-between border-b pb-3">
              <span className="eyebrow text-muted-foreground">fluxo automatizado</span>
              <span className="flex items-center gap-1.5 font-mono text-[11px] text-success">
                <span className="pulse-signal size-1.5 rounded-full bg-success" aria-hidden />
                em execução
              </span>
            </div>
            <HeroDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}

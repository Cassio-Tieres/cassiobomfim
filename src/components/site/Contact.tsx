import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contact, contactSection } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

import { ContactForm } from "./ContactForm";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const channels = [
    { icon: MessageCircle, label: "WhatsApp", value: contact.whatsappDisplay, href: buildWhatsAppUrl() },
    contact.email && { icon: Mail, label: "E-mail", value: contact.email, href: `mailto:${contact.email}` },
    contact.linkedin && { icon: Linkedin, label: "LinkedIn", value: "Ver perfil", href: contact.linkedin },
    contact.github && { icon: Github, label: "GitHub", value: "Ver repositórios", href: contact.github },
  ].filter(Boolean) as { icon: typeof Mail; label: string; value: string; href: string }[];

  return (
    <section id="contato" aria-labelledby="contato-title" className="border-t bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading id="contato-title" eyebrow="Contato" title={contactSection.title} description={contactSection.text} />
          <Button asChild variant="hero" size="xl" className="mt-8 w-full sm:w-auto">
            <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              <MessageCircle />
              Conversar no WhatsApp
            </a>
          </Button>

          <ul className="mt-10 divide-y border-y">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="grid size-9 place-items-center rounded-md bg-primary-soft text-primary">
                    <c.icon className="size-4" aria-hidden />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{c.label}</span>
                    <span className="font-medium text-foreground group-hover:text-primary">{c.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative rounded-2xl border bg-card p-6 shadow-lift sm:p-9">
          <h3 className="text-xl font-semibold text-foreground">Conte sobre o seu projeto</h3>
          <p className="mt-2 text-sm text-muted-foreground">Uma descrição breve já é suficiente para começarmos.</p>
          <div className="mt-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

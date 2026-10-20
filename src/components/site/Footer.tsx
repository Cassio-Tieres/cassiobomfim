import { contact, navItems, profile } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

import { BrandMark } from "./BrandMark";

export function Footer() {
  const year = new Date().getFullYear();
  const social = [
    { label: "WhatsApp", href: buildWhatsAppUrl() },
    contact.linkedin && { label: "LinkedIn", href: contact.linkedin },
    contact.github && { label: "GitHub", href: contact.github },
    contact.email && { label: "E-mail", href: `mailto:${contact.email}` },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <BrandMark tone="ink" className="h-auto w-48 max-w-full" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">{profile.shortDescription}</p>
        </div>
        <nav aria-label="Rodapé">
          <p className="eyebrow text-ink-muted">Navegação</p>
          <ul className="mt-4 space-y-2.5">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-ink-foreground/85 hover:text-signal">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="eyebrow text-ink-muted">Contato</p>
          <ul className="mt-4 space-y-2.5">
            {social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-sm text-ink-foreground/85 hover:text-signal"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-border">
        <p className="mx-auto max-w-6xl px-5 py-6 font-mono text-xs text-ink-muted sm:px-8">
          © {year} {profile.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

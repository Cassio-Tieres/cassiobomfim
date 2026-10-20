import { about, profile } from "@/content/site";

import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div>
          <SectionHeading id="sobre-title" eyebrow="Sobre mim" title={about.title} />
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/85">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <aside aria-label="Resumo profissional" className="self-start rounded-xl border bg-card p-7 shadow-soft">
          <p className="eyebrow text-muted-foreground">Resumo</p>
          <p className="mt-3 font-display text-xl font-semibold text-foreground">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{profile.title}</p>
          <dl className="mt-6 divide-y border-t">
            {about.facts.map((f) => (
              <div key={f.label} className="flex flex-col gap-1 py-4">
                <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{f.label}</dt>
                <dd className="text-[0.95rem] font-medium text-foreground">{f.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}

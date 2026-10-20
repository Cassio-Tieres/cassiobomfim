import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { problems } from "@/content/site";

import { SectionHeading } from "./SectionHeading";

export function Problems() {
  return (
    <section aria-labelledby="problemas-title" className="relative overflow-hidden bg-ink py-20 text-ink-foreground sm:py-28">
      <div aria-hidden className="bg-grid-ink pointer-events-none absolute inset-0 opacity-70" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading id="problemas-title" tone="ink" eyebrow="Problemas que posso resolver" title={problems.title} />
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted">{problems.closing}</p>
          <Button asChild variant="inverse" size="xl" className="mt-8">
            <a href="#contato">
              {problems.cta}
              <ArrowRight />
            </a>
          </Button>
        </div>

        <ul className="border-t border-ink-border">
          {problems.items.map((item, i) => (
            <li key={item} className="flex items-start gap-5 border-b border-ink-border py-5">
              <span className="mt-0.5 font-mono text-xs text-signal">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-lg leading-snug text-ink-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { ArrowLeftRight, Database, Plug, Sparkles, Workflow, Wrench, type LucideIcon } from "lucide-react";

import { services, type ServiceIcon } from "@/content/site";

import { SectionHeading } from "./SectionHeading";

const icons: Record<ServiceIcon, LucideIcon> = {
  workflow: Workflow,
  database: Database,
  migration: ArrowLeftRight,
  plug: Plug,
  sparkles: Sparkles,
  tool: Wrench,
};

export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="border-t bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="servicos-title"
          eyebrow="Serviços"
          title="O que posso desenvolver para a sua operação"
          description="Soluções sob medida para reduzir tarefas manuais, conectar sistemas e tornar os dados da empresa mais confiáveis."
        />

        <ul className="mt-14 grid gap-px overflow-hidden rounded-xl border bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <li key={service.title} className="group flex flex-col bg-card p-7 transition-colors hover:bg-primary-soft/40 sm:p-8">
                <div className="flex items-start justify-between">
                  <span className="grid size-11 place-items-center rounded-lg bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-snug text-foreground">{service.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{service.description}</p>
                <div className="mt-6 border-t pt-5">
                  <p className="eyebrow text-muted-foreground">Exemplos</p>
                  <ul className="mt-3 space-y-2">
                    {service.examples.map((ex) => (
                      <li key={ex} className="flex gap-3 text-sm leading-snug text-foreground/85">
                        <span aria-hidden className="mt-[0.45rem] h-px w-3 shrink-0 bg-primary/60" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

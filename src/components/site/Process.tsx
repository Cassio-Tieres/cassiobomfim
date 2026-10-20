import { Info } from "lucide-react";

import { processSteps } from "@/content/site";

import { SectionHeading } from "./SectionHeading";

export function Process() {
  return (
    <section id="como-trabalho" aria-labelledby="processo-title" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="processo-title"
          eyebrow="Como trabalho"
          title="Um processo simples, do problema à entrega"
          description="Cada etapa é alinhada com você, para que a solução atenda à necessidade real da operação."
        />

        <ol className="relative mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {processSteps.map((step, i) => (
            <li key={step.title} className="relative">
              {i < processSteps.length - 1 && (
                <span aria-hidden className="flow-line-x absolute -right-8 left-12 top-5 hidden h-px lg:block" />
              )}
              <span className="relative grid size-10 place-items-center rounded-full border-2 border-primary bg-background font-mono text-sm font-medium text-primary">
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>

        <p className="mt-14 flex items-start gap-3 rounded-lg border bg-muted px-5 py-4 text-sm leading-relaxed text-muted-foreground">
          <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
          Escopo, cronograma e condições são definidos de acordo com cada projeto, após a análise inicial.
        </p>
      </div>
    </section>
  );
}

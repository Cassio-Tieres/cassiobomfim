import { ShieldCheck } from "lucide-react";

import { projects, type Project } from "@/content/site";
import { cn } from "@/lib/utils";

import { FlowDiagram } from "./FlowDiagram";
import { SectionHeading } from "./SectionHeading";

const kindLabel: Record<Project["kind"], string> = {
  experiencia: "Experiência anonimizada",
  capacidade: "Capacidade técnica",
};

function ProjectCase({ project, index }: { project: Project; index: number }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <article
      aria-labelledby={`projeto-${num}`}
      className="overflow-hidden rounded-2xl border bg-card shadow-soft transition-shadow hover:shadow-lift"
    >
      <header className="border-b px-6 pb-6 pt-7 sm:px-10 sm:pt-9">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="font-mono text-xs text-primary">Projeto {num}</span>
          <span aria-hidden className="h-3 w-px bg-border-strong" />
          <span
            className={cn(
              "rounded-full px-2.5 py-0.5 font-mono text-[11px]",
              project.kind === "experiencia" ? "bg-primary-soft text-primary" : "bg-signal-soft text-signal-foreground",
            )}
          >
            {kindLabel[project.kind]}
          </span>
        </div>
        <h3 id={`projeto-${num}`} className="mt-4 max-w-3xl text-2xl font-semibold leading-tight text-foreground sm:text-[1.75rem]">
          {project.title}
        </h3>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Categoria">
          {project.category.map((c) => (
            <li key={c} className="rounded-md border px-2 py-1 font-mono text-[11px] text-muted-foreground">
              {c}
            </li>
          ))}
        </ul>
      </header>

      <div className="grid gap-8 px-6 py-8 sm:px-10 lg:grid-cols-3 lg:gap-10">
        <div>
          <h4 className="eyebrow text-muted-foreground">Contexto</h4>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-foreground/85">{project.context}</p>
        </div>
        <div>
          <h4 className="eyebrow text-muted-foreground">Solução</h4>
          <div className="mt-3 space-y-3">
            {project.solution.map((s) => (
              <p key={s} className="text-[0.95rem] leading-relaxed text-foreground/85">
                {s}
              </p>
            ))}
          </div>
        </div>
        <div>
          <h4 className="eyebrow text-muted-foreground">Abordagem técnica</h4>
          <ul className="mt-3 space-y-2">
            {project.approach.map((a) => (
              <li key={a} className="flex gap-3 text-sm leading-snug text-foreground/85">
                <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-sm bg-primary" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative border-y bg-muted px-6 py-8 sm:px-10">
        <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative">
          <p className="eyebrow mb-4 text-muted-foreground">Fluxo ilustrativo</p>
          <FlowDiagram steps={project.flow} label={`Fluxo ilustrativo: ${project.flow.join(", ")}`} />
        </div>
      </div>

      <footer className="grid gap-6 px-6 py-7 sm:px-10 md:grid-cols-[1.6fr_1fr] md:gap-10">
        <div className="border-l-2 border-signal pl-4">
          <h4 className="eyebrow text-muted-foreground">Benefício operacional esperado</h4>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-foreground">{project.benefit}</p>
        </div>
        {project.technologies.length > 0 && (
          <div>
            <h4 className="eyebrow text-muted-foreground">Tecnologias</h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <li key={t} className="rounded-md bg-primary-soft px-2.5 py-1 font-mono text-xs text-primary">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        )}
      </footer>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projetos" aria-labelledby="projetos-title" className="border-t bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="projetos-title"
            eyebrow="Projetos selecionados"
            title="Experiências técnicas em automação, dados e integração"
            description="Como problemas operacionais foram transformados em fluxos automatizados e bases de dados estruturadas."
          />
          <p className="flex max-w-sm items-start gap-3 rounded-lg border bg-card p-4 text-sm leading-relaxed text-muted-foreground">
            <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
            Projetos anonimizados. Nomes, dados e arquiteturas privadas não são divulgados — os diagramas foram recriados
            apenas para ilustração.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          {projects.map((p, i) => (
            <ProjectCase key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

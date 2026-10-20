import { skillGroups } from "@/content/site";

import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section aria-labelledby="tecnologias-title" className="border-t bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="tecnologias-title"
          eyebrow="Tecnologias e competências"
          title="Ferramentas escolhidas de acordo com o problema"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-xl border bg-card p-6">
              <h3 className="text-base font-semibold leading-snug text-foreground">{group.title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-md border bg-background px-2.5 py-1.5 font-mono text-xs text-foreground/85">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

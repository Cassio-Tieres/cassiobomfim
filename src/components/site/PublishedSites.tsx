import { ArrowUpRight, Monitor, Smartphone } from "lucide-react";

import { publishedSites } from "@/content/site";

import { SectionHeading } from "./SectionHeading";

export function PublishedSites() {
  return (
    <section id="sites-publicados" aria-labelledby="sites-publicados-title" className="border-t py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          id="sites-publicados-title"
          eyebrow="Sites publicados"
          title="Projetos no ar, prontos para conhecer"
          description="Sites desenvolvidos e publicados para negócios e profissionais."
        />

        <div className="mt-12 grid gap-8">
          {publishedSites.map((site) => (
            <article key={site.url} className="overflow-hidden rounded-2xl border bg-card shadow-soft">
              <div className="grid lg:grid-cols-[1fr_1.05fr]">
                <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
                  <p className="eyebrow text-primary">Projeto publicado</p>
                  <h3 className="mt-4 text-2xl font-semibold leading-tight text-foreground sm:text-3xl">{site.name}</h3>
                  <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">{site.description}</p>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex w-fit items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    Visitar site <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                  <p className="mt-3 break-all font-mono text-xs text-muted-foreground">{site.url.replace("https://", "")}</p>
                </div>

                <div className="relative min-w-0 border-t bg-muted p-5 sm:p-8 lg:border-l lg:border-t-0">
                  <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-50" />
                  <div className="relative flex items-end justify-center gap-4 sm:gap-8">
                    <figure className="w-[72%] overflow-hidden rounded-lg border bg-background shadow-lift">
                      <figcaption className="flex items-center gap-2 border-b px-3 py-2 font-mono text-[11px] text-muted-foreground">
                        <Monitor className="size-3.5" aria-hidden /> Desktop
                      </figcaption>
                      <img src={site.desktopImage} alt={`Prévia desktop do site ${site.name}`} className="block h-auto w-full object-cover object-top" loading="lazy" />
                    </figure>
                    <figure className="w-[24%] min-w-[88px] overflow-hidden rounded-t-xl border-x border-t bg-background shadow-lift">
                      <figcaption className="flex items-center justify-center gap-1 border-b px-1 py-2 font-mono text-[10px] text-muted-foreground">
                        <Smartphone className="size-3" aria-hidden /> Mobile
                      </figcaption>
                      <img src={site.mobileImage} alt={`Prévia mobile do site ${site.name}`} className="block h-auto w-full object-cover object-top" loading="lazy" />
                    </figure>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

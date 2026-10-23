import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Problems } from "@/components/site/Problems";
import { Process } from "@/components/site/Process";
import { Projects } from "@/components/site/Projects";
import { PublishedSites } from "@/components/site/PublishedSites";
import { Services } from "@/components/site/Services";
import { Skills } from "@/components/site/Skills";

const title = "Cássio Bomfim — Automação, Dados e Integração de Sistemas";
const description =
  "Engenheiro de software: automação de processos, pipelines ETL/ELT, migração de dados e integração de sistemas e APIs para empresas que querem operar com mais eficiência.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Services />
        <Projects />
        <PublishedSites />
        <Problems />
        <Process />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

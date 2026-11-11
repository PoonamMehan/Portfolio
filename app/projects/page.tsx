import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { BackHome, Bullets, PageHeader, ProductLogo, Rich, SubHeading, TechTiles } from "@/components/ui";
import { newralProducts, ownProjects, type Project } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Poonam Mehan: Competishun's real-time exam platform, Synappses' AI page-builder, SignStream, OpenLoop and more.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 pt-20 pb-32 sm:pt-28">
      <BackHome />
      <PageHeader title="Projects" subtitle="Things I've built, at Newral and on my own." />

      <section>
        <SubHeading>What I built at Newral</SubHeading>
        <div className="flex flex-col gap-14">
          {newralProducts.map((product) => (
            <div key={product.name}>
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-fit items-center gap-3 rounded-sm focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
              >
                <ProductLogo src={product.logo} size="lg" />
                <span className="flex flex-col">
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="font-serif text-2xl tracking-tight text-foreground transition-colors group-hover:text-blue-500 dark:group-hover:text-blue-400">
                      {product.name}
                    </span>
                    <span className="inline-flex items-center rounded-full border border-blue-500/25 bg-blue-500/5 px-2.5 py-0.5 text-[11px] font-medium tracking-tight text-blue-600 dark:text-blue-400">
                      {product.badge}
                    </span>
                  </span>
                </span>
              </a>
              <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-muted-foreground">
                <Rich text={product.summary} />
              </p>
              <div className="mt-6 border-l border-border/70 pl-5">
                <ProjectList projects={product.projects} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <SubHeading>My Own</SubHeading>
        <ProjectList projects={ownProjects} />
      </section>
    </main>
  );
}

function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="flex flex-col">
      {projects.map((project, index) => {
        const Icon = project.icon;
        return (
          <div key={project.name}>
            {index > 0 && <div className="my-8 h-px bg-border/40" />}
            <article className="flex flex-col pt-2">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start sm:gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border/70 bg-muted/30 shadow-2xs">
                    <Icon className="size-4.5 text-foreground/80" strokeWidth={2} />
                  </span>
                  <div className="flex flex-col">
                    <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-[19px]">{project.name}</h2>
                    <p className="text-sm font-medium text-muted-foreground">{project.tagline}</p>
                  </div>
                </div>
                {project.links && (
                  <div className="flex shrink-0 gap-2 sm:mt-1">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1 rounded-full border border-border/70 bg-muted/20 px-3 py-1 text-xs font-medium text-foreground/85 transition-all duration-150 hover:border-border hover:bg-muted/60 hover:text-foreground active:scale-95"
                      >
                        {link.label}
                        <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <TechTiles ids={project.tech} />

              <div className="mt-5">
                <Bullets points={project.points} />
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
}

import type { Metadata } from "next";
import { BackHome, Bullets, PageHeader, Rich, TechTiles } from "@/components/ui";
import { education, experience } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description: "Poonam Mehan's work experience: Newral Softwares, 100xDevs and Headstarter AI.",
};

export default function WorkPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 pt-20 pb-32 sm:pt-28">
      <BackHome />
      <PageHeader
        title="Work Experience"
        subtitle="Where I've built and shipped, from fellowship projects to systems serving tens of thousands at once."
      />

      <div className="flex flex-col">
        {experience.map((job, index) => (
          <div key={job.company}>
            {index > 0 && <div className="my-10 h-px bg-border/60" />}
            <article className="flex flex-col py-2">
              <div className="flex flex-col justify-between gap-1.5 sm:flex-row sm:items-start sm:gap-4">
                <div className="flex flex-col">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-[19px]">
                      <a
                        href={job.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-blue-500 dark:hover:text-blue-400"
                      >
                        {job.company}
                      </a>
                    </h2>
                    {job.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                        <span className="relative flex size-1.5">
                          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                        </span>
                        Working
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-muted-foreground">{job.role}</p>
                </div>
                <span className="mt-1 shrink-0 text-xs font-medium text-muted-foreground tabular-nums sm:mt-0 sm:text-right sm:text-[13px]">
                  {job.period}
                </span>
              </div>

              <TechTiles ids={job.tech} />

              <div className="mt-6">
                <h3 className="mb-3 text-sm font-semibold text-foreground">What I&apos;ve done</h3>
                <div className="flex flex-col gap-7">
                  {job.groups.map((group, i) => (
                    <div key={group.title ?? i}>
                      {group.title && (
                        <h4 className="font-serif text-[17px] text-foreground">
                          {group.href ? (
                            <a
                              href={group.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline decoration-border underline-offset-4 transition-colors hover:text-blue-500 hover:decoration-blue-500/50 dark:hover:text-blue-400"
                            >
                              {group.title}
                            </a>
                          ) : (
                            group.title
                          )}
                        </h4>
                      )}
                      {group.intro && (
                        <p className="mt-1 text-[13.5px] leading-relaxed text-muted-foreground">
                          <Rich text={group.intro} />
                        </p>
                      )}
                      {group.points && (
                        <div className={group.title ? "mt-2" : ""}>
                          <Bullets points={group.points} />
                        </div>
                      )}
                      {group.sections && (
                        <div className="mt-3 flex flex-col gap-4 border-l border-border/70 pl-4">
                          {group.sections.map((section) => (
                            <div key={section.title}>
                              <h5 className="mb-2 text-[13.5px] font-semibold tracking-tight text-foreground/90">
                                {section.title}
                              </h5>
                              <Bullets points={section.points} />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        ))}

        <div className="my-10 h-px bg-border/60" />

        <section className="flex flex-col justify-between gap-1.5 py-2 sm:flex-row sm:items-start sm:gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold tracking-tight text-muted-foreground/90">Education</p>
            <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-[19px]">
              <a
                href={education.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-blue-500 dark:hover:text-blue-400"
              >
                {education.school}
              </a>
            </h2>
            <p className="mt-0.5 text-sm font-medium text-muted-foreground">{education.degree}</p>
          </div>
          <span className="shrink-0 text-xs font-medium text-muted-foreground tabular-nums sm:mt-7 sm:text-[13px]">
            {education.period}
          </span>
        </section>
      </div>
    </main>
  );
}

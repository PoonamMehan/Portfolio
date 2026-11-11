import { ContributionGraph } from "@/components/contribution-graph";
import { GithubMark } from "@/components/ui";
import { profile } from "@/lib/data";
import { getContributions } from "@/lib/github";

export async function GithubActivity() {
  const username = new URL(profile.github).pathname.slice(1);
  const contributions = await getContributions(username);
  if (!contributions) return null;

  return (
    <section className="mt-14 select-none sm:mt-18" aria-labelledby="github-activity-heading">
      <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <h2
            id="github-activity-heading"
            className="font-serif text-xl font-medium tracking-tight text-foreground sm:text-2xl"
          >
            GitHub Activity
          </h2>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-xs text-emerald-600 dark:text-emerald-400">
            <span className="size-1.5 rounded-full bg-emerald-500 motion-safe:animate-pulse" aria-hidden="true" />
            {contributions.total.toLocaleString("en-US")} contributions
          </span>
        </div>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex w-fit items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-[13px]"
        >
          <GithubMark className="size-3.5" />
          <span>@{username}</span>
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            ↗
          </span>
        </a>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-border/70 bg-card/40 p-4 shadow-xs backdrop-blur-xs sm:p-5 dark:border-white/[0.08] dark:bg-zinc-950/40">
        <div className="pointer-events-none absolute -top-10 right-10 -z-10 size-48 rounded-full bg-emerald-500/[0.05] blur-3xl dark:bg-emerald-500/[0.08]" />
        <ContributionGraph days={contributions.days} />
      </div>
    </section>
  );
}

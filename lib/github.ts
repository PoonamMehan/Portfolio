import { cacheLife } from "next/cache";

export type ContributionDay = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

/** The last year of public contributions, as GitHub's own profile graph shows them. */
export async function getContributions(username: string) {
  "use cache";
  cacheLife("hours");

  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
    if (!res.ok) return null;
    const data = (await res.json()) as {
      total: { lastYear: number };
      contributions: ContributionDay[];
    };
    return { total: data.total.lastYear, days: data.contributions };
  } catch {
    return null;
  }
}

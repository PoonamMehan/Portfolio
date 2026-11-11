"use client";

import { useEffect, useRef, useState } from "react";
import type { ContributionDay } from "@/lib/github";

const CELL = 10;
const GAP = 3;
const PITCH = CELL + GAP;
const LEFT = 28;
const TOP = 18;

const LEVEL_FILL = [
  "fill-zinc-200/60 stroke-zinc-300/30 dark:fill-zinc-900/80 dark:stroke-zinc-800/50",
  "fill-[#9be9a8] dark:fill-[#0e4429]",
  "fill-[#40c463] dark:fill-[#006d32]",
  "fill-[#30a14e] dark:fill-[#26a641]",
  "fill-[#216e39] dark:fill-[#39d353]",
];

const LEGEND = [
  "bg-zinc-200/60 border border-zinc-300/30 dark:bg-zinc-900/80 dark:border-zinc-800/50",
  "bg-[#9be9a8] dark:bg-[#0e4429]",
  "bg-[#40c463] dark:bg-[#006d32]",
  "bg-[#30a14e] dark:bg-[#26a641]",
  "bg-[#216e39] dark:bg-[#39d353]",
];

const toDate = (iso: string) => new Date(`${iso}T00:00:00Z`);

const describe = (day: ContributionDay) => {
  const when = toDate(day.date).toLocaleDateString("en-US", {
    timeZone: "UTC",
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const amount = day.count === 0 ? "No" : day.count;
  return `${amount} contribution${day.count === 1 ? "" : "s"} on ${when}`;
};

export function ContributionGraph({ days }: { days: ContributionDay[] }) {
  const [active, setActive] = useState<ContributionDay | null>(null);
  const scroller = useRef<HTMLDivElement>(null);

  // On narrow screens the graph scrolls sideways; start at the most recent weeks.
  useEffect(() => {
    const el = scroller.current;
    if (el) el.scrollLeft = el.scrollWidth;
  }, []);

  // Columns are weeks (Sunday first), so the first week is padded to its weekday.
  const offset = days.length ? toDate(days[0].date).getUTCDay() : 0;
  const cells = days.map((day, i) => ({ day, week: Math.floor((i + offset) / 7), weekday: (i + offset) % 7 }));
  const weeks = cells.length ? cells[cells.length - 1].week + 1 : 0;

  const months: { label: string; week: number }[] = [];
  for (const { day, week } of cells) {
    const date = toDate(day.date);
    const startsMonth = date.getUTCDate() === 1 || (week === 0 && months.length === 0);
    const last = months[months.length - 1];
    if (startsMonth && (!last || week - last.week >= 3)) {
      months.push({ label: date.toLocaleDateString("en-US", { timeZone: "UTC", month: "short" }), week });
    }
  }

  const width = LEFT + weeks * PITCH;
  const height = TOP + 7 * PITCH;

  return (
    <>
      <div ref={scroller} className="scrollbar-none overflow-x-auto pb-1">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="block h-auto w-full min-w-[640px] sm:min-w-0"
          role="img"
          aria-label="GitHub contributions over the last year"
          onPointerLeave={() => setActive(null)}
        >
          {months.map(({ label, week }) => (
            <text key={`${label}-${week}`} x={LEFT + week * PITCH} y={10} className="fill-muted-foreground font-mono text-[9px]">
              {label}
            </text>
          ))}
          {[
            ["Mon", 1],
            ["Wed", 3],
            ["Fri", 5],
          ].map(([label, row]) => (
            <text
              key={label}
              x={0}
              y={TOP + (row as number) * PITCH + CELL - 1.5}
              className="fill-muted-foreground font-mono text-[9px]"
            >
              {label}
            </text>
          ))}
          {cells.map(({ day, week, weekday }) => (
            <rect
              key={day.date}
              x={LEFT + week * PITCH}
              y={TOP + weekday * PITCH}
              width={CELL}
              height={CELL}
              rx={2}
              className={`${LEVEL_FILL[day.level]} cursor-pointer transition-opacity hover:opacity-70 ${active?.date === day.date ? "stroke-foreground/60" : ""}`}
              onPointerEnter={() => setActive(day)}
              onClick={() => setActive(day)}
            />
          ))}
        </svg>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border/40 pt-3 font-mono text-xs text-muted-foreground">
        <div className="flex min-h-5 items-center gap-2" aria-live="polite">
          {active ? (
            <span className="text-foreground/85">{describe(active)}</span>
          ) : (
            <span className="text-muted-foreground/70">Hover or tap a day for details</span>
          )}
        </div>
        <div className="flex items-center gap-2 select-none" aria-hidden="true">
          <span className="text-[11px] text-muted-foreground/70">Less</span>
          <div className="flex items-center gap-1">
            {LEGEND.map((swatch) => (
              <span key={swatch} className={`size-[9px] rounded-[2px] ${swatch}`} />
            ))}
          </div>
          <span className="text-[11px] text-muted-foreground/70">More</span>
        </div>
      </div>
    </>
  );
}

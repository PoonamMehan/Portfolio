import { siGithub, siX } from "simple-icons";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { tech, type TechId } from "@/lib/tech";

/** Renders `**bold**` spans inside resume-style bullet text. */
export function Rich({ text }: { text: string }) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 ? (
      <strong key={i} className="font-medium text-foreground/90">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

export function ProductLogo({ src, size = "sm" }: { src: string; size?: "sm" | "lg" }) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center overflow-hidden border border-border/70 bg-white shadow-2xs transition-transform duration-300 group-hover:scale-110 ${size === "lg" ? "size-9 rounded-lg p-1.5" : "size-5 rounded-[6px] p-0.5 sm:size-5.5"}`}
    >
      <Image src={src} alt="" width={36} height={36} unoptimized className="size-full object-contain" />
    </span>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <h2 className="inline-flex items-center rounded-full border border-border/80 bg-muted/10 px-3.5 py-1 font-serif text-sm font-normal tracking-wide text-muted-foreground/90">
      {children}
    </h2>
  );
}

export function SubHeading({ children }: { children: ReactNode }) {
  return (
    <div className="mb-3.5 flex items-center gap-3">
      <h3 className="font-serif text-[16px] font-normal text-foreground/80 sm:text-[17px]">{children}</h3>
      <div className="h-px flex-1 bg-border/40" />
    </div>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
    >
      {children}
    </a>
  );
}

export function BackHome() {
  return (
    <Link
      href="/"
      className="group mb-10 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
    >
      <span aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-x-1">
        ←
      </span>
      <span>back to home</span>
    </Link>
  );
}

export function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header className="mb-10 sm:mb-12">
      <h1 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">{title}</h1>
      <p className="mt-3 font-serif text-lg text-muted-foreground">{subtitle}</p>
    </header>
  );
}

export function Bullets({ points }: { points: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {points.map((point) => (
        <li
          key={point}
          className="relative pl-4 text-[14px] leading-relaxed text-muted-foreground before:absolute before:top-[0.68em] before:left-0.5 before:size-1 before:rounded-full before:bg-muted-foreground/45"
        >
          <Rich text={point} />
        </li>
      ))}
    </ul>
  );
}

function brandFill(hex: string) {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  // Near-black and near-white marks would vanish in one of the themes, so let them follow the text color.
  return luminance < 0.16 || luminance > 0.9 ? "currentColor" : `#${hex}`;
}

export function TechTile({ id }: { id: TechId }) {
  const { label, icon } = tech[id];
  return (
    <span className="group/tile relative flex">
      <span
        role="img"
        aria-label={label}
        className="flex size-8 cursor-default items-center justify-center rounded-lg border border-zinc-200 bg-zinc-100 p-1.5 text-foreground shadow-2xs transition-all duration-200 hover:scale-110 hover:border-zinc-400 dark:border-zinc-800/80 dark:bg-zinc-900 dark:hover:border-zinc-600"
      >
        {icon ? (
          <svg viewBox="0 0 24 24" className="size-full" fill={brandFill(icon.hex)} aria-hidden="true">
            <path d={icon.path} />
          </svg>
        ) : (
          <span className="font-mono text-[8.5px] font-bold tracking-tight">{label.slice(0, 4)}</span>
        )}
      </span>
      <span className="pointer-events-none absolute -top-8 left-1/2 z-10 -translate-x-1/2 translate-y-1 rounded-md bg-foreground px-2 py-0.5 text-[11px] font-medium whitespace-nowrap text-background opacity-0 transition-all duration-150 group-hover/tile:translate-y-0 group-hover/tile:opacity-100">
        {label}
      </span>
    </span>
  );
}

export function TechTiles({ ids }: { ids: TechId[] }) {
  if (!ids.length) return null;
  return (
    <div className="mt-5">
      <h3 className="mb-2.5 text-xs font-semibold tracking-tight text-muted-foreground/90">Technologies &amp; Tools</h3>
      <div className="flex flex-wrap items-center gap-2">
        {ids.map((id) => (
          <TechTile key={id} id={id} />
        ))}
      </div>
    </div>
  );
}

export function GithubMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d={siGithub.path} />
    </svg>
  );
}

// OpenAI mark from @lobehub/icons (MIT); simple-icons no longer ships it.
export function OpenAIMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" fillRule="evenodd" aria-hidden="true">
      <path d="M9.205 8.658v-2.26c0-.19.072-.333.238-.428l4.543-2.616c.619-.357 1.356-.523 2.117-.523 2.854 0 4.662 2.212 4.662 4.566 0 .167 0 .357-.024.547l-4.71-2.759a.797.797 0 00-.856 0l-5.97 3.473zm10.609 8.8V12.06c0-.333-.143-.57-.429-.737l-5.97-3.473 1.95-1.118a.433.433 0 01.476 0l4.543 2.617c1.309.76 2.189 2.378 2.189 3.948 0 1.808-1.07 3.473-2.76 4.163zM7.802 12.703l-1.95-1.142c-.167-.095-.239-.238-.239-.428V5.899c0-2.545 1.95-4.472 4.591-4.472 1 0 1.927.333 2.712.928L8.23 5.067c-.285.166-.428.404-.428.737v6.898zM12 15.128l-2.795-1.57v-3.33L12 8.658l2.795 1.57v3.33L12 15.128zm1.796 7.23c-1 0-1.927-.332-2.712-.927l4.686-2.712c.285-.166.428-.404.428-.737v-6.898l1.974 1.142c.167.095.238.238.238.428v5.233c0 2.545-1.974 4.472-4.614 4.472zm-5.637-5.303l-4.544-2.617c-1.308-.761-2.188-2.378-2.188-3.948A4.482 4.482 0 014.21 6.327v5.423c0 .333.143.571.428.738l5.947 3.449-1.95 1.118a.432.432 0 01-.476 0zm-.262 3.9c-2.688 0-4.662-2.021-4.662-4.519 0-.19.024-.38.047-.57l4.686 2.71c.286.167.571.167.856 0l5.97-3.448v2.26c0 .19-.07.333-.237.428l-4.543 2.616c-.619.357-1.356.523-2.117.523zm5.899 2.83a5.947 5.947 0 005.827-4.756C22.287 18.339 24 15.84 24 13.296c0-1.665-.713-3.282-1.998-4.448.119-.5.19-.999.19-1.498 0-3.401-2.759-5.947-5.946-5.947-.642 0-1.26.095-1.88.31A5.962 5.962 0 0010.205 0a5.947 5.947 0 00-5.827 4.757C1.713 5.447 0 7.945 0 10.49c0 1.666.713 3.283 1.998 4.448-.119.5-.19 1-.19 1.499 0 3.401 2.759 5.946 5.946 5.946.642 0 1.26-.095 1.88-.309a5.96 5.96 0 004.162 1.713z" />
    </svg>
  );
}

export function XMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d={siX.path} />
    </svg>
  );
}

export function LinkedinMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

"use client";

import { Briefcase, FileText, FolderGit2, House, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/lib/data";

const pages: { href: "/" | "/work" | "/projects"; label: string; icon: LucideIcon }[] = [
  { href: "/", label: "Home", icon: House },
  { href: "/work", label: "Work", icon: Briefcase },
  { href: "/projects", label: "Projects", icon: FolderGit2 },
];

const item =
  "relative flex h-10 items-center justify-center gap-1.5 rounded-full text-[13px] font-medium transition-all duration-300 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none";
const idle = "w-10 text-zinc-600 hover:text-foreground dark:text-zinc-400";
const active = "bg-foreground px-4 text-background shadow-sm";

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Bottom navigation"
      className="fixed bottom-6 left-1/2 z-50 animate-rise select-none"
    >
      <div className="flex items-center gap-1 rounded-full border border-zinc-200/60 bg-white/60 p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.08)] ring-1 ring-white/50 backdrop-blur-xl backdrop-saturate-150 dark:border-zinc-800/60 dark:bg-zinc-950/60 dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] dark:ring-white/[0.08]">
        {pages.map(({ href, label, icon: Icon }) => {
          const current = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              aria-label={label}
              aria-current={current ? "page" : undefined}
              className={`${item} ${current ? active : idle}`}
            >
              <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
              {current && <span>{label}</span>}
            </Link>
          );
        })}
        <span className="mx-0.5 h-5 w-px bg-zinc-300/70 dark:bg-zinc-700/70" aria-hidden="true" />
        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume (PDF)"
          className={`${item} ${idle}`}
        >
          <FileText className="h-[18px] w-[18px]" strokeWidth={2} />
        </a>
      </div>
    </nav>
  );
}

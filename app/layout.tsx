import type { Metadata } from "next";
import { Geist_Mono, Newsreader, Noto_Sans } from "next/font/google";
import { BottomNav } from "@/components/bottom-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Poonam Mehan | Full Stack AI Engineer",
    template: "%s | Poonam Mehan",
  },
  description:
    "Full Stack AI Engineer at Newral Softwares building high-concurrency exam platforms, AI page builders and screen-context AI memory. NestJS, GraphQL, React, Redis and LLMs.",
  authors: [{ name: "Poonam Mehan" }],
  keywords: [
    "Poonam Mehan",
    "Full Stack AI Engineer",
    "Full Stack Developer",
    "NestJS",
    "GraphQL",
    "React",
    "Next.js",
    "TypeScript",
    "AI Engineer",
    "New Delhi",
  ],
};

// Runs before paint so the saved or system theme never flashes the wrong colors.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches;var r=document.documentElement;r.classList.toggle("dark",d);r.style.colorScheme=d?"dark":"light"}catch(e){}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${notoSans.variable} ${newsreader.variable} ${geistMono.variable} font-sans antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen bg-background text-foreground transition-colors duration-200 selection:bg-blue-500/20 selection:text-blue-600 dark:selection:text-blue-300">
        <ThemeToggle />
        {children}
        <BottomNav />
      </body>
    </html>
  );
}

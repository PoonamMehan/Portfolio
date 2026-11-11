import { CalendarDays, FileText, Mail } from "lucide-react";
import { CopyEmail } from "@/components/copy-email";
import { Eyes } from "@/components/eyes";
import { GithubActivity } from "@/components/github-activity";
import {
  GithubMark,
  LinkedinMark,
  OpenAIMark,
  ProductLogo,
  Rich,
  SectionLabel,
  SubHeading,
  TextLink,
  XMark,
} from "@/components/ui";
import {
  education,
  experience,
  highlight,
  newralProducts,
  ownProjects,
  profile,
  skills,
  type Product,
  type Project,
} from "@/lib/data";

const [newral, hundredX, headstarter] = experience;
const [competishun, synappses] = newralProducts;

const socials = [
  { label: "GitHub", href: profile.github, Icon: GithubMark },
  { label: "LinkedIn", href: profile.linkedin, Icon: LinkedinMark },
  { label: "X (Twitter)", href: profile.x, Icon: XMark },
].filter((social) => social.href);

const booking = profile.cal
  ? { href: profile.cal, label: "Book a Call", Icon: CalendarDays, external: true }
  : { href: `mailto:${profile.email}`, label: "Say hello", Icon: Mail, external: false };
const external = { target: "_blank", rel: "noopener noreferrer" };

const chip =
  "inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-muted/20 px-3 py-1 text-xs font-medium text-foreground/85 transition-all duration-150 hover:border-border hover:bg-muted/60 hover:text-foreground active:scale-95";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 pt-24 pb-32 sm:pt-32">
      <header className="flex flex-col">
        <h1 className="flex flex-col select-none">
          <span className="flex items-center gap-2.5 text-3xl tracking-tight sm:gap-3 sm:text-4xl">
            <span className="font-serif font-normal text-foreground">Hey,</span>
            <Eyes />
            <span className="relative font-serif font-medium whitespace-nowrap text-foreground">
              I&apos;m {profile.firstName}
              <span className="absolute right-0 -bottom-1 left-0 h-[2.5px] rounded-full bg-blue-500" aria-hidden="true" />
            </span>
          </span>
          <span className="mt-4 font-sans text-sm font-medium tracking-normal text-foreground/75 sm:text-[15px]">
            {profile.name}, {profile.role}
          </span>
        </h1>

        <div className="mt-2.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground sm:text-[13px]">
          <span>{profile.location}</span>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1.5 font-medium text-emerald-700 dark:text-emerald-400">
            <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
            {profile.status}
          </span>
        </div>

        <div className="mt-5 flex max-w-xl flex-col gap-3.5 text-[14.5px] leading-relaxed text-foreground/85 sm:text-[15px]">
          <div>
            <p>
              {newral.role} at <TextLink href={newral.href}>{newral.company}</TextLink>, building real-time,
              high-concurrency systems and AI-native product infrastructure.
            </p>
            <p className="mt-1 text-xs text-muted-foreground sm:text-[13px]">
              Running <TextLink href={competishun.href}>{competishun.name}</TextLink> end to end: Newral&apos;s EdTech
              client, with 14+ microservices serving 100K+ users. I built its real-time exam platform for 50K–80K
              concurrent students.
            </p>
          </div>

          {highlight && (
            <div className="inline-flex w-fit items-center gap-2.5 rounded-lg border border-amber-500/25 bg-amber-500/5 px-3 py-2 text-xs text-foreground/90 transition-colors hover:border-amber-500/40 sm:text-[13px]">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-black text-white shadow-xs ring-1 ring-black/10 dark:bg-white dark:text-black dark:ring-white/20">
                <OpenAIMark className="size-4" />
              </span>
              <span className="flex flex-col gap-0.5 leading-snug">
                <span>
                  <a
                    href={highlight.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-foreground underline decoration-amber-500/40 underline-offset-4 transition-colors hover:decoration-amber-500"
                  >
                    {highlight.title}
                  </a>
                  <span className="ml-1.5 inline-flex translate-y-[-1px] items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-px text-[10.5px] font-semibold tracking-tight text-amber-700 dark:text-amber-400">
                    {highlight.badge}
                  </span>
                </span>
                <span className="text-foreground/85">
                  <Rich text={highlight.detail} />
                  <span className="ml-1.5 text-muted-foreground">({highlight.date})</span>
                </span>
              </span>
            </div>
          )}

          <div className="flex flex-col gap-1.5 text-[13.5px] text-muted-foreground sm:text-[14px]">
            <p>
              <span>Also at Newral: </span>
              <strong className="font-medium text-foreground/90">AI page-builder for </strong>
              <TextLink href={synappses.href}>{synappses.name}</TextLink>
              <span>, Newral&apos;s flagship enterprise LMS ($6K MRR), powering IIT School and College Kaka.</span>
            </p>
            <p>
              <span>Before that: </span>
              <strong className="font-medium text-foreground/90">Full Stack Engineer intern at </strong>
              <TextLink href={hundredX.href}>{hundredX.company}</TextLink>
              <span>, where I built and shipped a centralized exchange trading platform.</span>
            </p>
            <p>
              <span>Fellowship: </span>
              <strong className="font-medium text-foreground/90">SWE Fellow at </strong>
              <TextLink href={headstarter.href}>{headstarter.company}</TextLink>
              <span>, where I shipped AI-powered RAG and MERN projects, mentored by engineers from YC-backed companies.</span>
            </p>
            <p>
              <span>Studied: </span>
              <strong className="font-medium text-foreground/90">{education.degree} at </strong>
              <TextLink href={education.href}>Guru Nanak Dev University</TextLink>
              <span>
                , Amritsar <span className="whitespace-nowrap">({education.period}).</span>
              </span>
            </p>
            <p className="mt-1 text-[13.5px] font-medium text-foreground/85">
              Into real-time systems, AI agents and developer tools. Open to full-stack and AI engineering roles.{" "}
              <a
                href={booking.href}
                {...(booking.external && external)}
                className="group inline-flex items-center gap-1 text-blue-500 underline-offset-4 hover:underline dark:text-blue-400"
              >
                Let&apos;s talk
                <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2.5">
          <a
            href={booking.href}
            {...(booking.external && external)}
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-[13px] font-medium text-background shadow-xs transition-transform duration-150 hover:scale-[1.03] active:scale-95 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
          >
            <booking.Icon className="size-4" />
            <span>{booking.label}</span>
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-[13px] font-medium text-foreground transition-colors duration-150 hover:bg-muted/60 active:scale-95 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <FileText className="size-4" />
            <span>Resume</span>
          </a>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <CopyEmail email={profile.email} className={chip} />
          {socials.map(({ label, href, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={chip}>
              <Icon className="size-3.5 opacity-80" />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </header>

      <section className="mt-14 sm:mt-16">
        <SectionLabel>Projects</SectionLabel>
        <div className="mt-5 flex flex-col gap-6">
          <div className="flex flex-col">
            <SubHeading>What I built at Newral</SubHeading>
            <div className="flex flex-col gap-5">
              {newralProducts.map((product) => (
                <ProductBlock key={product.name} product={product} />
              ))}
            </div>
          </div>
          <ProjectGroup title="My Own" projects={ownProjects} />
        </div>
      </section>

      <section className="mt-14 sm:mt-16">
        <SectionLabel>Technical Skills</SectionLabel>
        <div className="mt-6 flex flex-col gap-4 sm:gap-4.5">
          {skills.map(({ group, items }) => (
            <div key={group} className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-4">
              <span className="min-w-[180px] shrink-0 font-serif text-[15px] text-foreground/80 sm:min-w-[210px] sm:text-[15.5px]">
                {group}
              </span>
              <div className="flex flex-wrap items-center gap-1.5">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full border border-border/70 bg-muted/20 px-2.5 py-0.5 text-xs font-medium text-foreground/85 transition-colors hover:border-border hover:bg-muted/50 hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <GithubActivity />
    </main>
  );
}

function ProductBlock({ product }: { product: Product }) {
  return (
    <div className="flex flex-col gap-1">
      <a
        href={product.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex w-fit flex-wrap items-center gap-2.5 rounded-sm py-0.5 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
      >
        <ProductLogo src={product.logo} />
        <span className="font-serif text-lg tracking-tight text-foreground transition-colors duration-150 group-hover:text-blue-500 sm:text-[19px] dark:group-hover:text-blue-400">
          {product.name}
        </span>
        <span className="inline-flex items-center rounded-full border border-blue-500/25 bg-blue-500/5 px-2.5 py-0.5 text-[11px] font-medium tracking-tight text-blue-600 dark:text-blue-400">
          {product.badge}
        </span>
      </a>
      <p className="ml-7.5 max-w-xl text-[13.5px] leading-relaxed text-muted-foreground sm:text-[14px]">
        <Rich text={product.summary} />
      </p>
      <div className="mt-2 ml-7.5 flex flex-col gap-3 border-l border-border/70 pl-4">
        {product.projects.map((project) => {
          const Icon = project.icon;
          return (
            <div key={project.name} className="flex flex-col gap-0.5">
              <div className="flex flex-wrap items-center gap-2">
                <Icon className="size-3.5 text-foreground/70" strokeWidth={2.25} />
                <span className="text-[14.5px] font-medium tracking-tight text-foreground">{project.name}</span>
                <span className="inline-flex items-center rounded-full border border-border/80 bg-muted/30 px-2 py-px text-[10.5px] font-medium text-foreground/75">
                  {project.tagline}
                </span>
              </div>
              <p className="max-w-xl text-[13px] leading-relaxed text-muted-foreground sm:text-[13.5px]">{project.summary}</p>
              <p className="font-mono text-[11px] text-muted-foreground/90">{project.stack.join(" · ")}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ProjectGroup({ title, projects }: { title: string; projects: Project[] }) {
  return (
    <div className="flex flex-col">
      <SubHeading>{title}</SubHeading>
      <div className="flex flex-col gap-3.5">
        {projects.map((project) => {
          const href = project.links?.[0]?.href;
          const body = <ProjectRow project={project} />;
          return href ? (
            <a
              key={project.name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-fit rounded-sm focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
            >
              {body}
            </a>
          ) : (
            <div key={project.name} className="cursor-default">
              {body}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ProjectRow({ project }: { project: Project }) {
  const Icon = project.icon;
  return (
    <div className="group flex flex-col gap-1 py-0.5">
      <div className="flex flex-wrap items-center gap-2.5">
        <span className="flex size-5 shrink-0 items-center justify-center rounded-[6px] border border-border/70 bg-muted/30 shadow-2xs transition-transform duration-300 group-hover:scale-110 sm:size-5.5">
          <Icon className="size-3 text-foreground/80 sm:size-3.5" strokeWidth={2.25} />
        </span>
        <span className="font-serif text-lg tracking-tight text-foreground transition-colors duration-150 group-hover:text-blue-500 sm:text-[19px] dark:group-hover:text-blue-400">
          {project.name}
        </span>
        <span className="inline-flex items-center rounded-full border border-border/80 bg-muted/30 px-2.5 py-0.5 text-[11px] font-medium tracking-tight text-foreground/80">
          {project.tagline}
        </span>
      </div>
      <p className="ml-7.5 max-w-xl text-[13.5px] leading-relaxed text-muted-foreground sm:text-[14px]">
        {project.summary}
      </p>
      <p className="mt-0.5 ml-7.5 font-mono text-[11.5px] text-muted-foreground/90">{project.stack.join(" · ")}</p>
    </div>
  );
}

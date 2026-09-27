import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
  const { moreLink } = DATA.sections.projects;

  return (
    <section id="projects">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center w-full">
            <h2 className="text-primary text-sm font-medium">
              {DATA.sections.projects.label}
            </h2>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          {/* <div className="flex flex-col gap-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              {DATA.sections.projects.heading}
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance">
              {DATA.sections.projects.text}
            </p>
          </div> */}
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr">
          {DATA.projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              className="h-full"
            >
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                // dates={project.dates}
                tags={project.technologies}
                image={project.image}
                // video={project.video}
                // links={project.links}
              />
            </BlurFade>
          ))}
        </div>
        <BlurFade
          delay={BLUR_FADE_DELAY * 12 + DATA.projects.length * 0.05}
          className="-mt-3"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground text-pretty">
              {moreLink.note}
            </p>
            <a
              href={moreLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-9 w-fit shrink-0 items-center gap-1 rounded-lg border border-border px-3 text-sm text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {moreLink.label}
              <span className="sr-only"> (opens in a new tab)</span>
              <ArrowUpRight
                className="size-3.5 transition-transform group-hover:-translate-y-px group-hover:translate-x-px"
                aria-hidden
              />
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

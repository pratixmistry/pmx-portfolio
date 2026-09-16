import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import PhotosSection from "@/components/section/photos-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";

const BLUR_FADE_DELAY = 0.04;

const sectionComponents: Record<string, React.ReactNode> = {
  about: (
    <section id="about">
      <div className="flex min-h-0 flex-col gap-y-4">
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center w-full">
            <h2 className="text-primary text-sm font-medium">
              {DATA.sections.about.label}
            </h2>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
        </div>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="prose max-w-full text-pretty sm:text-lg leading-snug text-muted-foreground dark:prose-invert text-justify">
            <Markdown>{DATA.summary}</Markdown>
          </div>
        </BlurFade>
      </div>
    </section>
  ),
  work: (
    <section id="work">
      <div className="flex min-h-0 flex-col gap-y-6">
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center w-full">
            <h2 className="text-primary text-sm font-medium">
              {DATA.sections.work.label}
            </h2>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
        </div>
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <WorkSection />
        </BlurFade>
      </div>
    </section>
  ),
  education: (
    <section id="education">
      <div className="flex min-h-0 flex-col gap-y-6">
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center w-full">
            <h2 className="text-primary text-sm font-medium">
              {DATA.sections.education.label}
            </h2>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {DATA.education.map((education, index) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + index * 0.05}
            >
              <div className="flex items-center gap-x-3 justify-between group">
                <div className="flex items-center gap-x-3 flex-1 min-w-0">
                  {education.logoUrl ? (
                    <img
                      src={education.logoUrl}
                      alt={education.school}
                      className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                    />
                  ) : (
                    <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                  )}
                  <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                    <div className="font-medium leading-none flex items-center gap-2">
                      {education.school}
                      {/* <ArrowUpRight
                        className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                        aria-hidden
                      /> */}
                    </div>
                    <div className="font-sans text-sm text-muted-foreground">
                      {education.degree}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                  <span>
                    {education.start} - {education.end}
                  </span>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  ),
  skills: (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-4">
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center w-full">
            <h2 className="text-primary text-sm font-medium">
              {DATA.sections.skills.label}
            </h2>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          {DATA.skills.map((skill, id) => (
            <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <div className="rounded-xl h-12 w-12 group relative inline-flex justify-center">
                <span className="block dark:hidden">
                  <img
                    src={skill.iconDark}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </span>

                <span className="hidden dark:block">
                  <img
                    src={skill.iconLight}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </span>
                {/* {skill.icon && (
                  <skill.icon className="rounded overflow-hidden object-contain" />
                )} */}
                <span className="absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded bg-primary px-3 py-1.5 text-xs font-medium text-background opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none">
                  {skill.name}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-primary"></div>
                </span>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  ),
  projects: <ProjectsSection />,
  hackathons: (
    <section id="hackathons">
      <BlurFade delay={BLUR_FADE_DELAY * 13}>
        <HackathonsSection />
      </BlurFade>
    </section>
  ),
  photos: <PhotosSection />,
  contact: (
    <section id="contact">
      <BlurFade delay={BLUR_FADE_DELAY * 16}>
        <ContactSection />
      </BlurFade>
    </section>
  ),
};

export default function HomePage() {
  const orderedSections = Object.entries(DATA.sections)
    .filter(([, s]) => s.enabled)
    .sort(([, a], [, b]) => a.order - b.order)
    .map(([key]) => key);

  return (
    <main className="min-h-dvh flex flex-col gap-12 sm:gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
            <Avatar className="size-24 md:size-31 border rounded-full shadow-lg ring-4 ring-muted">
              <AvatarImage
                alt={DATA.name}
                src={DATA.avatarUrl}
                className="object-cover"
              />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
          <div className="gap-2 gap-y-6 flex  md:flex-row justify-between items-center">
            <div className="gap-1 flex flex-col">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="font-bold text-3xl sm:text-4xl lg:text-3xl tracking-tight"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="text-muted-foreground max-w-[600px] "
                delay={BLUR_FADE_DELAY}
                text={DATA.designation}
              />
            </div>
            <div>
              <a
                href="https://x.com/pratixmistry"
                target="_blank"
                rel="noopener noreferrer"
                // className="inline-flex bg-neutral-800 rounded-full px-4 py-2 text-white font-medium"
                className="inline-flex bg-primary rounded-full px-4 py-2 text-background font-medium"
              >
                Follow on X
              </a>
            </div>
          </div>
        </div>
      </section>
      {orderedSections.map((key) => (
        <React.Fragment key={key}>{sectionComponents[key]}</React.Fragment>
      ))}
    </main>
  );
}

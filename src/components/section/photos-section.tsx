import BlurFade from "@/components/magicui/blur-fade";

import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function PhotosSection() {
  const photos = DATA.photos;

  return (
    <section id="photos">
      <div className="flex min-h-0 flex-col gap-y-4">
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center w-full">
            <h2 className="text-primary text-sm font-medium">
              {DATA.sections.photos.heading}
            </h2>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          {/* <div className="flex flex-col gap-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              {DATA.sections.photos.heading}
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance">
              {DATA.sections.photos.text}
            </p>
          </div> */}
        </div>

        <div className="columns-2 gap-2 sm:columns-3">
          {photos.map((photo, index) => (
            <BlurFade
              key={photo.src}
              delay={BLUR_FADE_DELAY * 14 + index * 0.05}
              className="mb-2 break-inside-avoid"
            >
              <div className="overflow-hidden rounded-[8px]">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="block h-auto w-full"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}

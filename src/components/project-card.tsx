import { Badge } from "@/components/ui/badge";
import { cn, toParagraphs } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="w-full h-full bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      width={1200}
      height={675}
      loading="lazy"
      decoding="async"
      className="w-full h-full object-top object-cover object-contain"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  tags,
  image,
  video,
  className,
}: Props) {
  return (
    // The title link stretches over the whole card (after:inset-0), so the
    // card is one click target and one tab stop named after the project.
    <div
      className={cn(
        "group relative flex flex-col h-full border border-border overflow-hidden rounded-[4px] transition-colors",
        href &&
          "hover:border-foreground/20 has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-ring has-[a:focus-visible]:ring-offset-2 has-[a:focus-visible]:ring-offset-background",
        className,
      )}
    >
      <div className="relative shrink-0">
        <div className="block aspect-video overflow-hidden">
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-top"
            />
          ) : image ? (
            <ProjectImage src={image} alt={title} />
          ) : (
            <div className="w-full h-full bg-muted" />
          )}
        </div>
        {/* {links && links.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-wrap gap-2">
            {links.map((link, idx) => (
              <a
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
              >
                <Badge
                  className="flex items-center gap-1.5 text-xs bg-black text-white hover:bg-black/90"
                  variant="default"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </a>
            ))}
          </div>
        )} */}
      </div>
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold uppercase">
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
                >
                  {title}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : (
                title
              )}
            </h3>
            {/* <time className="text-xs text-muted-foreground">{dates}</time> */}
          </div>
          {href && (
            <ArrowUpRight
              className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-foreground"
              aria-hidden
            />
          )}
        </div>
        <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          {toParagraphs(description).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[11px] font-medium border border-border h-6 w-fit px-2 uppercase"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

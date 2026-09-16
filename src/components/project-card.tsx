/* eslint-disable @next/next/no-img-element */

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Markdown from "react-markdown";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="w-full h-full bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
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
    <div
      className={cn(
        "flex flex-col h-full border border-border overflow-hidden rounded-[4px]",
        className,
      )}
    >
      <div className="relative shrink-0">
        <a
          href={href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block aspect-video overflow-hidden"
        >
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
        </a>
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
            <h3 className="font-semibold uppercase">{title}</h3>
            {/* <time className="text-xs text-muted-foreground">{dates}</time> */}
          </div>
          <a
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="pt-1 text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            aria-label={`Open ${title}`}
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
        <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
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

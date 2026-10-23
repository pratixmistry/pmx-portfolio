import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  const { availability } = DATA.sections.contact;

  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 flex items-center border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        {availability ? (
          <span className="inline-flex items-center gap-2 whitespace-nowrap text-background text-sm font-medium">
            <span className="relative flex size-2" aria-hidden>
              <span className="absolute inline-flex size-full rounded-full bg-emerald-500 opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {availability.status}
          </span>
        ) : (
          <span className="text-background text-sm font-medium">{DATA.sections.contact.label}</span>
        )}
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {DATA.sections.contact.heading}
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          {DATA.sections.contact.text}
        </p>
        {availability && (
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={availability.primary.href}
              className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {availability.primary.label}
            </a>
            <a
              href={availability.secondary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 rounded-full border bg-background/60 px-5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {availability.secondary.label}
              <span className="sr-only"> (opens in a new tab)</span>
              <ArrowUpRight
                className="size-3.5 transition-transform group-hover:-translate-y-px group-hover:translate-x-px"
                aria-hidden
              />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}


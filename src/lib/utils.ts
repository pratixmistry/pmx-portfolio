import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Absolute date only: pages are prerendered, so a relative "3d ago" would
// freeze at build time and go stale.
export function formatDate(date: string) {
  // Parse date-only strings as UTC so the formatted (UTC) date doesn't shift a day
  if (!date.includes("T")) {
    date = `${date}T00:00:00Z`;
  }
  return new Date(date).toLocaleDateString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

// Split plain text on blank lines into paragraphs.
export function toParagraphs(text: string) {
  return text
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

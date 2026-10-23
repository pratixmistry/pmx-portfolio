import type { APIRoute } from "astro";
import { DATA } from "@/data/resume";
import { CONFIG } from "@/data/config";

// /llms.txt (llmstxt.org): a plain-Markdown profile for LLMs and answer engines,
// generated from resume.tsx so it never drifts from the site.
export const GET: APIRoute = () => {
  const { availability } = DATA.sections.contact;
  const social = Object.values(DATA.contact.social).filter((s) =>
    s.url.startsWith("http"),
  );

  const lines = [
    `# ${DATA.name}`,
    "",
    `> ${DATA.description}`,
    "",
    DATA.summary.replace(/\s*\n\s*\n\s*/g, "\n\n").trim(),
    "",
    "## Quick facts",
    "",
    `- Role: ${DATA.designation}`,
    `- Location: Ahmedabad, Gujarat, India`,
    `- Experience: 3+ years`,
    `- Skills: ${DATA.skills.map((s) => s.name).join(", ")}`,
    ...(availability ? [`- Availability: ${availability.status}`] : []),
    `- Email: ${DATA.contact.email}`,
    `- Website: ${CONFIG.site.url}`,
    "",
    "## Work experience",
    "",
    ...DATA.work.map(
      (w) =>
        `- ${w.title}, [${w.company}](${w.href}) (${w.start} - ${w.end ?? DATA.sections.work.presentLabel}): ${w.description}`,
    ),
    "",
    "## Education",
    "",
    ...DATA.education.map(
      (e) => `- ${e.degree}, [${e.school}](${e.href}) (${e.start} - ${e.end})`,
    ),
    "",
    "## Projects",
    "",
    ...DATA.projects.map(
      (p) =>
        `- [${p.title}](${p.href}): ${p.description} Built with ${p.technologies.join(", ")}.`,
    ),
    "",
    "## Contact",
    "",
    `- [Email](mailto:${DATA.contact.email})`,
    ...social.map((s) => `- [${s.name}](${s.url})`),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};

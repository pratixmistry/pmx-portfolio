import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";

export const DATA = {
  name: "Pratik Mistry",
  siteName: "pratixmistry",
  designation: "Frontend Developer",
  initials: "PM",
  location: "Ahmedabad, IN",
  locationLink: "https://www.google.com/maps/place/ahmedabad",
  description:
    "Frontend developer building thoughtful digital experiences. Usually coding, occasionally chasing places and stories.",
  summary:
    "I’m Pratik - a frontend developer who spends most of his time turning designs and ideas into things people can actually use. I’ve spent the last 3+ years working across React, TypeScript, and Webflow, building everything from dashboards to marketing websites. \n\nAway from the screen, I’m usually out riding, exploring somewhere new, chasing good stories, or getting unnecessarily curious about an unreasonable number of things.",
  avatarUrl: "/picofme.webp",
  ogImage: "/og.jpg",
  sections: {
    about: { order: 1, enabled: true, label: "About", heading: "About" },
    work: {
      order: 2,
      enabled: true,
      label: "Work Experience",
      heading: "Work Experience",
      presentLabel: "Present",
    },
    education: {
      order: 3,
      enabled: true,
      label: "Education",
      heading: "Education",
    },
    skills: { order: 4, enabled: true, label: "Skills", heading: "Skills" },
    projects: {
      order: 5,
      enabled: true,
      label: "Selected Projects",
      heading: "Check out my latest work",
      text: "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.",
      // Client work under NDA: linked as a separate list, not shown individually
      moreLink: {
        label: "View Webflow Projects",
        note: "More Webflow client work is under NDA, so it's listed separately in a private document.",
        href: "https://docs.google.com/document/d/1jP1jSlvgenZeVESmgiCDBDNDJGL438McsCGZywNHju4/edit?tab=t.0",
      },
    },
    photos: {
      order: 6,
      enabled: true,
      label: "Photos",
      heading: "My Recent Travels",
    },
    contact: {
      order: 8,
      enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Looking for my next frontend opportunity. Have something interesting in mind? Let’s talk.",
    },
  },
  photos: [
    { src: "/photos/photo1.webp", alt: "Photo 1", width: 1000, height: 1333 },
    { src: "/photos/photo15.webp", alt: "Photo 15", width: 607, height: 607 },
    { src: "/photos/photo14.webp", alt: "Photo 14", width: 1000, height: 563 },
    { src: "/photos/photo4.webp", alt: "Photo 4", width: 1000, height: 1778 },
    { src: "/photos/photo10.webp", alt: "Photo 10", width: 1000, height: 1333 },
    { src: "/photos/photo2.webp", alt: "Photo 2", width: 1000, height: 1333 },
    { src: "/photos/photo13.webp", alt: "Photo 13", width: 1000, height: 562 },
    { src: "/photos/photo7.webp", alt: "Photo 7", width: 1000, height: 1333 },
    { src: "/photos/photo6.webp", alt: "Photo 6", width: 1000, height: 1333 },
    { src: "/photos/photo11.webp", alt: "Photo 11", width: 1000, height: 1778 },
    { src: "/photos/photo9.webp", alt: "Photo 9", width: 1000, height: 1333 },
    { src: "/photos/photo3.webp", alt: "Photo 3", width: 1000, height: 750 },
    { src: "/photos/photo5.webp", alt: "Photo 5", width: 1000, height: 562 },
    { src: "/photos/photo12.webp", alt: "Photo 12", width: 1000, height: 1778 },
    { src: "/photos/photo8.webp", alt: "Photo 8", width: 1000, height: 1333 },
  ],
  skills: [
    {
      name: "Astro",
      iconLight:
        "https://astro.build/assets/press/astro-icon-light-gradient.svg",
      iconDark: "https://astro.build/assets/press/astro-icon-dark.svg",
    },
    {
      name: "React",
      iconLight:
        "https://cdn.brandfetch.io/idREYlLkpD/theme/dark/id-H4pLvmU.svg?c=1dxbfHSJFAPEGdCLU4o5B",
      iconDark:
        "https://cdn.brandfetch.io/idREYlLkpD/theme/dark/id-H4pLvmU.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    },
    {
      name: "Next.js",
      iconLight:
        "https://vercel.com/vc-ap-b3331f/_next/static/immutable/media/next-js-dark.0c3mvpdl4phk-.svg",

      iconDark:
        "https://vercel.com/vc-ap-b3331f/_next/static/immutable/media/next-js-light.14klor1i4ixj-.svg",
    },
    {
      name: "Typescript",
      iconLight:
        "https://cdn.brandfetch.io/idKX_Hb7va/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
      iconDark:
        "https://cdn.brandfetch.io/idKX_Hb7va/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    },
    {
      name: "Node.js",
      iconLight: "https://nodejs.org/static/logos/nodejsHex.svg",
      iconDark: "https://nodejs.org/static/logos/nodejsHex.svg",
    },
    {
      name: "Webflow",
      iconLight:
        "https://cdn.brandfetch.io/id4knLKYsV/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
      iconDark:
        "https://cdn.brandfetch.io/id4knLKYsV/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "/blog", icon: Library, label: "Blog" },
  ],
  contact: {
    email: "pratixmistry@gmail.com",
    social: {
      Email: {
        name: "Send Email",
        url: "mailto:pratixmistry@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/pratixmistry",
        icon: Icons.github,
        navbar: false,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pratixmistry/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/pratixmistry",
        icon: Icons.x,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Bacancy",
      href: "https://www.bacancytechnology.com/",
      badges: [],
      location: "Ahmedabad, IN",
      title: "UI Developer",
      logoUrl:
        "https://www.google.com/s2/favicons?domain=bacancytechnology.com&sz=128",
      start: "Oct 2025",
      end: "Jun 2026",
      description:
        "Worked on both React applications and Webflow websites, building everything from data-heavy dashboards to product marketing pages. I spent a lot of time turning complex requirements into clean, reusable interfaces, while also working on performance and accessibility. I also got the chance to mentor 50+ interns and share what I’d learned with the team.",
    },
    {
      company: "KrishaWeb",
      href: "https://www.krishaweb.com/",
      badges: [],
      location: "Ahmedabad, IN",
      title: "Frontend Developer",
      logoUrl: "https://www.google.com/s2/favicons?domain=krishaweb.com&sz=128",
      start: "Jul 2023",
      end: "Sep 2025",
      description:
        "Worked closely with clients and teams around the world to take projects from design to launch. I built and revamped 10+ Webflow and 5+ other frontend projects, worked with CMS, custom interactions and animations, and spent a good amount of time making older sites faster and easier to maintain. I also handled client communication across different time zones, which taught me a lot beyond just writing code.",
    },
  ],
  education: [
    {
      school: "Ganpat University",
      href: "https://www.ganpatuniversity.ac.in/",
      degree: "Bachelor of Technology, Computer Engineering",
      logoUrl:
        "https://www.google.com/s2/favicons?domain=ganpatuniversity.ac.in&sz=128",
      start: "2019",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "ADVAITA INTELLIGENCE",
      href: "https://www.acaiplatform.ai/",
      active: true,
      description:
        "Marketing website for an upcoming AI Analytics Platform, designed to introduce the product, its capabilities, and the value it brings to modern data teams.",
      technologies: ["React", "TypeScript"],
      image: "/platforms.webp",
    },
    {
      title: "21 Media",
      href: "https://21-media.webflow.io/",
      active: true,
      description:
        "A visually driven website for a creative agency, designed to bring their work and creative direction to the forefront.",
      technologies: ["Webflow"],
      image: "/21m.webp",
    },
    {
      title: "FinchTrack",
      href: "https://finchtrack.vercel.app/",
      active: true,
      description:
        "A personal finance tracker, with interactive dashboards, charts, and reports to make tracking everyday finances simpler.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Supabase",
        "Shadcn",
      ],
      image: "/overview.webp",
    },
  ],
} as const;

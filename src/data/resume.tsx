import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";

export const DATA = {
  name: "Pratik Mistry",
  siteName: "pratixmistry",
  designation: "Frontend Developer",
  initials: "PM",
  location: "Ahmedabad, IN",
  locationLink: "https://www.google.com/maps/place/ahmedabad",
  // Meta description for search and AI answers: who, where, what, availability (~155 chars)
  description:
    "Pratik Mistry is a frontend developer in Ahmedabad, India, with 3+ years building React, TypeScript, and Webflow websites and apps. Open to new frontend roles.",
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
      // Availability badge and hire CTAs; set to null to hide them
      availability: {
        status: "Open to work",
        primary: { label: "Hire me", href: "mailto:pratixmistry@gmail.com?subject=Let%E2%80%99s%20work%20together" },
        secondary: { label: "LinkedIn", href: "https://www.linkedin.com/in/pratixmistry/" },
      },
    },
  },
  photos: [
    { src: "/photos/photo1.webp", alt: "Brick café wall with a 'look for tacos' poster above a hanging lamp", width: 1000, height: 1333 },
    { src: "/photos/photo15.webp", alt: "Person sitting under a large tree on a seaside promenade, a ship on the horizon", width: 607, height: 607 },
    { src: "/photos/photo14.webp", alt: "Person rowing a small boat on a quiet lake", width: 1000, height: 563 },
    { src: "/photos/photo4.webp", alt: "Person photographing a sandy beach at golden hour", width: 1000, height: 1778 },
    { src: "/photos/photo10.webp", alt: "Black-and-white photo of rowing boats moored on a calm lake below a hill", width: 1000, height: 1333 },
    { src: "/photos/photo2.webp", alt: "Motorcyclist in a red jacket riding beside the sea at sunset", width: 1000, height: 1333 },
    { src: "/photos/photo13.webp", alt: "Two adventure motorcycles parked on a road through misty green hills", width: 1000, height: 562 },
    { src: "/photos/photo7.webp", alt: "Lake with a small island ringed by hills, seen past cactus on a rocky ledge", width: 1000, height: 1333 },
    { src: "/photos/photo6.webp", alt: "Pratik leaning on a motorcycle in riding gear", width: 1000, height: 1333 },
    { src: "/photos/photo11.webp", alt: "Close-up of rough, foaming sea waves", width: 1000, height: 1778 },
    { src: "/photos/photo9.webp", alt: "Feet in sneakers at the edge of a dark sand beach as a wave rolls in", width: 1000, height: 1333 },
    { src: "/photos/photo3.webp", alt: "Sun setting between hills, reflected in a still lake", width: 1000, height: 750 },
    { src: "/photos/photo5.webp", alt: "Hiker with a backpack looking out over tall grass and trees", width: 1000, height: 562 },
    { src: "/photos/photo12.webp", alt: "Turquoise waves breaking on a rocky shore under overhanging leaves", width: 1000, height: 1778 },
    { src: "/photos/photo8.webp", alt: "Black-and-white view of an airplane wing over a city and canal", width: 1000, height: 1333 },
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
      name: "TypeScript",
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
        "Website for a creative agency built around one idea: connect people, not just pixels. It brings together bold visuals, clear storytelling, and a seamless user experience.",
      technologies: ["Webflow"],
      image: "/21Media.webp",
    },
    {
      title: "FinchTrack",
      href: "https://finchtrack.vercel.app/",
      active: true,
      description:
        "A full-stack personal finance app for managing transactions, accounts, budgets, and investments, with interactive dashboards, reports, and CSV export. User data is isolated with PostgreSQL Row Level Security.",
      technologies: ["Next.js", "React", "TypeScript"],
      image: "/finchtrack.webp",
    },
  ],
} as const;

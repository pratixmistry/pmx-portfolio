import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Astro } from "@/components/ui/svgs/astro";

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
  // "In early 2023, I left a senior engineering role to go all-in on building my own SaaS products. Before that, [I completed a double degree in computer science and business](/#education), [interned at companies like Stripe and Cloudflare](/#work), and [competed in 18+ hackathons](/#hackathons). I also spent a summer in San Francisco as part of a founder residency focused on shipping fast and finding early customers.",
  avatarUrl: "/picofme.png",
  ogImage: "/og.png",
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
    hackathons: {
      order: 7,
      enabled: false,
      label: "Hackathons",
      heading: "I like building things",
      text: "During my time in university, I attended {count}+ hackathons. People from around the country would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.",
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
    { src: "/photos/photo1.jpg", alt: "Photo 1" },
    { src: "/photos/photo15.jpg", alt: "Photo 15" },
    { src: "/photos/photo14.jpg", alt: "Photo 14" },
    { src: "/photos/photo4.jpg", alt: "Photo 4" },
    { src: "/photos/photo10.jpg", alt: "Photo 10" },
    { src: "/photos/photo2.jpg", alt: "Photo 2" },
    { src: "/photos/photo13.jpg", alt: "Photo 13" },
    { src: "/photos/photo7.jpg", alt: "Photo 7" },
    { src: "/photos/photo6.jpg", alt: "Photo 6" },
    { src: "/photos/photo11.jpg", alt: "Photo 10" },
    { src: "/photos/photo9.jpg", alt: "Photo 9" },
    { src: "/photos/photo3.jpg", alt: "Photo 3" },
    { src: "/photos/photo5.jpg", alt: "Photo 5" },
    { src: "/photos/photo12.jpg", alt: "Photo 13" },
    { src: "/photos/photo8.jpg", alt: "Photo 8" },
  ],
  skills: [
    {
      name: "Astro",
      icon: Astro,
      iconLight:
        "https://astro.build/assets/press/astro-icon-light-gradient.svg",
      iconDark: "https://astro.build/assets/press/astro-icon-dark.svg",
    },
    {
      name: "React",
      icon: ReactLight,
      iconLight:
        "https://cdn.brandfetch.io/idREYlLkpD/theme/dark/id-H4pLvmU.svg?c=1dxbfHSJFAPEGdCLU4o5B",
      iconDark:
        "https://cdn.brandfetch.io/idREYlLkpD/theme/dark/id-H4pLvmU.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    },
    {
      name: "Next.js",
      icon: NextjsIconDark,
      iconLight:
        "https://vercel.com/vc-ap-b3331f/_next/static/immutable/media/next-js-dark.0c3mvpdl4phk-.svg",

      iconDark:
        "https://vercel.com/vc-ap-b3331f/_next/static/immutable/media/next-js-light.14klor1i4ixj-.svg",
    },
    {
      name: "Typescript",
      icon: Typescript,
      iconLight:
        "https://cdn.brandfetch.io/idKX_Hb7va/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
      iconDark:
        "https://cdn.brandfetch.io/idKX_Hb7va/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    },
    {
      name: "Node.js",
      icon: Nodejs,
      iconLight: "https://nodejs.org/static/logos/nodejsHex.svg",
      iconDark: "https://nodejs.org/static/logos/nodejsHex.svg",
    },
    {
      name: "Webflow",
      icon: "",
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
    tel: "+1 512 000 0000",
    social: {
      Email: {
        name: "Send Email",
        url: "mailto:pratixmistry@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "http://github.com/pratixmistry",
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
    // {
    //   company: "Meridian Labs",
    //   href: "https://meridian.so",
    //   badges: ["Founder"],
    //   location: "Austin, TX",
    //   title: "Co-founder & Engineer",
    //   logoUrl: "https://avatar.vercel.sh/meridian-labs?size=40",
    //   start: "January 2023",
    //   end: undefined,
    //   description:
    //     "Building a suite of developer productivity tools focused on local-first architecture and offline sync. Grew to 1,200 paying customers within the first year. Responsible for the full stack - product, engineering, and growth.",
    // },
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
      // dates: "March 2024 - Present",
      active: true,
      description:
        "Marketing website for an upcoming AI Analytics Platform, designed to introduce the product, its capabilities, and the value it brings to modern data teams.",
      technologies: ["React", "TypeScript"],
      // links: [
      //   {
      //     type: "Website",
      //     href: "https://www.acaiplatform.ai/",
      //     icon: <Icons.globe className="size-3" />,
      //   },
      // ],
      image: "/platforms.png",
      video: "",
    },
    {
      title: "21 Media",
      href: "https://21-media.webflow.io/",
      // dates: "October 2023 - February 2024",
      active: true,
      description:
        "A visually driven website for a creative agency, designed to bring their work and creative direction to the forefront.",
      technologies: ["Webflow"],
      // links: [
      //   {
      //     type: "Website",
      //     href: "https://logport.io",
      //     icon: <Icons.globe className="size-3" />,
      //   },
      //   {
      //     type: "Source",
      //     href: "https://github.com/alexmercer-dev/logport",
      //     icon: <Icons.github className="size-3" />,
      //   },
      // ],
      image: "/21m.png",
      // video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "FinchTrack",
      href: "https://finchtrack.vercel.app/",
      // dates: "June 2023 - September 2023",
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
      // links: [
      //   {
      //     type: "Website",
      //     href: "https://finchtrack.vercel.app/",
      //     icon: <Icons.globe className="size-3" />,
      //   },
      //   {
      //     type: "Source",
      //     href: "https://github.com/alexmercer-dev/formbase",
      //     icon: <Icons.github className="size-3" />,
      //   },
      // ],
      image: "/overview.png",
      video: "",
    },
    // {
    //   title: "Patchwork",
    //   href: "https://patchwork.run",
    //   dates: "February 2023 - May 2023",
    //   active: false,
    //   description:
    //     "A visual diff tool for design tokens and Tailwind config changes. Connect it to your repo and get a live preview of how a config change affects every component in your design system.",
    //   technologies: [
    //     "Next.js",
    //     "TypeScript",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Vercel",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://patchwork.run",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.llm.report/openai-demo.mp4",
    // },
  ],
  hackathons: [
    {
      title: "PNW Hacks 2022",
      dates: "October 14th - 16th, 2022",
      location: "Seattle, Washington",
      description:
        "Built a real-time collaborative code review tool using WebSockets and Monaco Editor. Won best developer tool.",
      image: "https://avatar.vercel.sh/pnw-hacks?size=40",
      win: "Best Developer Tool",
      links: [],
    },
    {
      title: "nwHacks 2022",
      dates: "January 15th - 16th, 2022",
      location: "Vancouver, BC",
      description:
        "Created an accessibility-first browser extension that rewrites complex legal documents into plain English using GPT-3.",
      image: "https://avatar.vercel.sh/nwhacks-2022?size=40",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "HackTheNorth 2021",
      dates: "September 17th - 19th, 2021",
      location: "Waterloo, Ontario (Remote)",
      description:
        "Built a distributed key-value store in Go with a Raft consensus implementation from scratch. Finalist in the systems track.",
      image: "https://avatar.vercel.sh/hackthenorth-2021?size=40",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/alexmercer-dev/raftdb",
        },
      ],
    },
    {
      title: "DubHacks 2021",
      dates: "October 9th - 10th, 2021",
      location: "Seattle, Washington",
      description:
        "Developed a carbon footprint tracker that integrates with Google Maps to suggest lower-emission commute alternatives.",
      image: "https://avatar.vercel.sh/dubhacks-2021?size=40",
      win: "Best Sustainability Hack",
      links: [],
    },
    {
      title: "StormHacks 2021",
      dates: "April 24th - 25th, 2021",
      location: "Burnaby, BC (Remote)",
      description:
        "Built a multiplayer browser game where players collaboratively debug a shared codebase before a timer runs out.",
      image: "https://avatar.vercel.sh/stormhacks-2021?size=40",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/bugout",
        },
      ],
    },
    {
      title: "HackCamp 2020",
      dates: "November 14th - 15th, 2020",
      location: "Vancouver, BC (Remote)",
      description:
        "Created a CLI tool that automatically generates unit test scaffolding from TypeScript function signatures using static analysis.",
      image: "https://avatar.vercel.sh/hackcamp-2020?size=40",
      win: "1st Place Overall",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/alexmercer-dev/testgen",
        },
      ],
    },
    {
      title: "cmd-f 2020",
      dates: "March 7th - 8th, 2020",
      location: "Vancouver, BC",
      description:
        "Built a mobile-first job board specifically for junior developers, aggregating listings from GitHub Jobs, HN Who's Hiring, and LinkedIn.",
      image: "https://avatar.vercel.sh/cmd-f-2020?size=40",
      links: [],
    },
    {
      title: "nwHacks 2020",
      dates: "January 11th - 12th, 2020",
      location: "Vancouver, BC",
      description:
        "Developed a peer-to-peer study session platform with live video, shared whiteboards, and Pomodoro timers.",
      image: "https://avatar.vercel.sh/nwhacks-2020?size=40",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "HackTheNorth 2019",
      dates: "September 13th - 15th, 2019",
      location: "Waterloo, Ontario",
      description:
        "Built an API rate-limit visualizer that tracks usage across multiple providers and surfaces anomalies in real time.",
      image: "https://avatar.vercel.sh/hackthenorth-2019?size=40",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/alexmercer-dev/ratelens",
        },
      ],
    },
    {
      title: "DeltaHacks V",
      dates: "January 18th - 19th, 2019",
      location: "Hamilton, Ontario",
      description:
        "Created a VS Code extension that suggests variable names based on type signatures and surrounding code context using a local ML model.",
      image: "https://avatar.vercel.sh/deltahacks-v?size=40",
      links: [],
    },
    {
      title: "StormHacks 2019",
      dates: "March 2nd - 3rd, 2019",
      location: "Burnaby, BC",
      description:
        "Built a network latency heatmap tool that visualises CDN performance across regions using real user data injected via a lightweight JS snippet.",
      image: "https://avatar.vercel.sh/stormhacks-2019?size=40",
      win: "Best Infrastructure Hack",
      links: [],
    },
  ],
} as const;

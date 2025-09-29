import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Raphael Zerbib",
  initials: "RZ",
  url: "https://raphaelzerbib.sharpheberg.com/",
  location: "Netanya, Israel",
  locationLink: "https://www.google.com/maps/place/Netanya",
  description:
    "Full-Stack Developer & Entrepreneur. Passionate about building innovative solutions and sharing knowledge.",
  summary:
    "I'm the founder of SharpHeberg, a server hosting company serving 30+ active clients. I'm also a full-stack developer for a DeFi risk curator company, building on-chain analytics and yield optimization solutions. I work as a coding instructor, teaching Scratch and Python to children. Currently pursuing a Bachelor's Degree in Computer Science at Ruppin Academic Center, with a strong focus on software development, algorithms, and system architecture.",
  avatarUrl: "/me.png",
  skills: [
    // Frontend
    "React",
    "JavaScript",
    "TypeScript",
    "NextJS",
    "Vue.JS",
    // Backend
    "Node.js",
    "Python",
    "Java",
    "REST APIs",
    // Databases
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Neon",
    "Supabase",
    "Redis",
    "Prisma",
    // DevOps & Systems
    "Docker",
    "Kubernetes",
    "Linux",
    "Windows",
    "Git",
    // Web3 & Analytics
    "Web3",
    "Dune Analytics",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "raphi.zerbib@gmail.com",
    tel: "+972 53 708 5340",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Sithey",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/raphael518/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/SitheyMC",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:raphi.zerbib@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "MEV Capital",
      href: "https://www.mevcapital.com/",
      badges: ["Full-Stack", "DeFi", "Web3"],
      location: "Remote",
      title: "Full-Stack Developer",
      logoUrl:
        "https://cdn.prod.website-files.com/68515e2e9ecee091e255d1b7/6852776785e2750535fd02be_mevcapital-logo.svg",
      start: "2025",
      end: "Present",
      description:
        "Developing DeFi solutions and on-chain analytics tools for a leading investment & risk management firm. Working with Web3 technologies and Dune Analytics to build yield strategies and liquidity management systems in the decentralized finance ecosystem.",
    },
    {
      company: "SharpHeberg.com",
      href: "https://sharpheberg.com",
      badges: ["Full-Stack", "Infrastructure", "DevOps"],
      location: "Remote",
      title: "Founder & CEO",
      logoUrl:
        "https://www.sharpheberg.com/_next/image?url=%2Fimages%2Flogo-1080x1080-white.png&w=1080&q=75",
      start: "2023",
      end: "Present",
      description:
        "Successfully built and managed a server hosting company serving 30+ active clients. Design and develop websites and custom software to meet clients specific business requirements. Developed and maintained scalable infrastructure, ensuring high availability and security. Managed client relations and technical support, achieving high customer satisfaction.",
    },
    {
      company: "Codii.fr",
      href: "https://codii.fr",
      badges: ["Teaching", "Python", "Scratch"],
      location: "Remote",
      title: "Coding Instructor",
      logoUrl:
        "https://codii.fr/wp-content/uploads/2021/09/Codii-robot-1080-x-1080-px-1.png",
      start: "2024",
      end: "Present",
      description:
        "Teach Scratch and Python to children, fostering logical thinking and creativity. Develop engaging educational materials and interactive coding activities. Provide personalized mentoring to help students gain confidence and reach their learning goals. Encourage problem-solving through hands-on projects and real-world coding exercises.",
    },
    {
      company: "IDF - Israeli Defense Forces",
      href: "#",
      badges: ["Team Management", "Translation"],
      location: "Israel",
      title: "Overseas Recruit Department",
      logoUrl:
        "https://www.idf.il/media/yyeecbse/%D7%A1%D7%9E%D7%9C-%D7%A6%D7%94_%D7%9C-%D7%A2%D7%93%D7%9B%D7%A0%D7%99.png?anchor=center&mode=crop&width=73&height=71&rnd=133746184863130000",
      start: "2020",
      end: "2022",
      description:
        "Managed confidential information with integrity and discretion. Coordinated team activities and maintained effective communication under pressure. Developed strong organizational skills and adapted quickly to high-pressure environments. Translated articles and documentation into French.",
    },
  ],
  education: [
    {
      school: "Ruppin Academic Center",
      href: "https://www.ruppin.ac.il/",
      degree: "Bachelor's Degree in Computer Science",
      logoUrl:
        "https://yt3.googleusercontent.com/DAGGTqsHAftX6Eaw8Psk2dHqZBNBL3lUCKwiZ2U3XYi_3Mi50EDdadTeha8Oq6PWzXg0yD0i1Q=s900-c-k-c0x00ffffff-no-rj",
      start: "2024",
      end: "2027",
    },
    {
      school: "Tamar Ariel High School",
      href: "#",
      degree: "High School Diploma",
      logoUrl: "/me.png",
      start: "2016",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "SharpHeberg",
      href: "https://sharpheberg.com",
      dates: "2023 - Present",
      active: true,
      description:
        "Server hosting company providing high-quality hosting solutions, custom website development, and technical support services to 30+ active clients.",
      technologies: [
        "JavaScript",
        "Node.js",
        "React",
        "Next.js",
        "MongoDB",
        "MySQL",
        "Linux",
        "Windows",
        "Plesk",
        "Java",
        "Virtualizor",
        "WHMCS",
      ],
      links: [
        {
          type: "Website",
          href: "https://sharpheberg.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "SharpMailer",
      href: "https://sharpmail.sharpheberg.com/",
      dates: "2025",
      active: true,
      description:
        "A modern and efficient email campaign manager built with cutting-edge web technologies. Features include email campaign management, SMTP integration, lead management, rich text editor, real-time tracking, secure authentication, and responsive design.",
      technologies: [
        "Next.js",
        "TypeScript",
        "NextAuth.js",
        "Prisma",
        "PostgreSQL",
        "Shadcn UI",
        "Tailwind CSS",
        "Nodemailer",
      ],
      links: [
        {
          type: "Website",
          href: "https://sharpmail.sharpheberg.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Sithey/sharpmailer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "MEV Capital curated vaults tracker",
      href: "https://vaults.mevcapital.com/",
      dates: "2025",
      active: true,
      description:
          "Comprehensive DeFi vault analytics platform providing real-time tracking of yield strategies, risk metrics, and performance data. Features live on-chain data aggregation, custom dashboards for portfolio analysis, and automated monitoring of vault positions across multiple DeFi protocols.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Shadcn UI",
        "Tailwind CSS",
        "Redis",
        "Web3",
        "Viem",
        "Wagmi",
      ],
      links: [
        {
          type: "Website",
          href: "https://vaults.mevcapital.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    }
  ],
} as const;

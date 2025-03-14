import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Raphael Zerbib",
  initials: "RZ",
  url: "https://raphaelzerbib.sharpheberg.com/",
  location: "Netanya, Israel",
  locationLink: "https://www.google.com/maps/place/Netanya",
  description:
    "Developer & Entrepreneur. Passionate about building innovative solutions and sharing knowledge.",
  summary:
    "I'm the founder of SharpHeberg, a server hosting company serving 30+ active clients. I also work as a coding instructor, teaching Scratch and Python to children. Currently pursuing a Bachelor's Degree in Computer Science at Ruppin Academic Center, with a strong focus on software development, algorithms, and system architecture.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Python",
    "Java",
    "NextJS",
    "Vue.JS",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Redis",
    "Prisma",
    "HTML5",
    "CSS3",
    "Tailwind",
    "Linux",
    "Windows",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
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
      company: "SharpHeberg.com",
      href: "https://sharpheberg.com",
      badges: [],
      location: "Remote",
      title: "Founder & CEO",
      logoUrl: "https://sharpheberg.com/wp-content/uploads/2024/01/sharpheberg-logo-sans-fond-256x256-1.png",
      start: "2023",
      end: "Present",
      description:
        "Successfully built and managed a server hosting company serving 30+ active clients. Design and develop websites and custom software to meet clients specific business requirements. Developed and maintained scalable infrastructure, ensuring high availability and security. Managed client relations and technical support, achieving high customer satisfaction.",
    },
    {
      company: "Codii.fr",
      href: "https://codii.fr",
      badges: [],
      location: "Remote",
      title: "Coding Instructor",
      logoUrl: "https://codii.fr/wp-content/uploads/2021/09/Codii-robot-1080-x-1080-px-1.png",
      start: "2024",
      end: "Present",
      description:
        "Teach Scratch and Python to children, fostering logical thinking and creativity. Develop engaging educational materials and interactive coding activities. Provide personalized mentoring to help students gain confidence and reach their learning goals. Encourage problem-solving through hands-on projects and real-world coding exercises.",
    },
    {
      company: "Meitav",
      href: "#",
      badges: [],
      location: "Israel",
      title: "Overseas Recruit Department",
      logoUrl: "https://www.idf.il/media/yyeecbse/%D7%A1%D7%9E%D7%9C-%D7%A6%D7%94_%D7%9C-%D7%A2%D7%93%D7%9B%D7%A0%D7%99.png?anchor=center&mode=crop&width=73&height=71&rnd=133746184863130000",
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
      logoUrl: "https://yt3.googleusercontent.com/DAGGTqsHAftX6Eaw8Psk2dHqZBNBL3lUCKwiZ2U3XYi_3Mi50EDdadTeha8Oq6PWzXg0yD0i1Q=s900-c-k-c0x00ffffff-no-rj",
      start: "2025",
      end: "Present",
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
        "WHMCS"
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
        "SQLite",
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
  ],
} as const;

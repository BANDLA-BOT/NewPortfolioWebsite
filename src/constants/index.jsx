import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiSocketdotio } from "react-icons/si";


import image1 from "../assets/project1.jpeg";
import image2 from "../assets/project2.jpeg";
import image3 from "../assets/project3.jpeg";
import image4 from "../assets/project4.jpeg";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Guruprasad Bandla",
  info: "Full-stack developer with a flair for graphic design.",
};

export const ABOUT = {
  text1:
    "I create dynamic, responsive websites that blend creativity with efficiency",
  text2:
    "Hello! I'm Guru prasad, a full-stack developer with a flair for graphic design. I thrive on crafting web experiences that are not only visually stunning but also highly functional and user-friendly. My passion for detail ensures that every project is polished and professional. Beyond coding, I'm an avid explorer of new cultures and cuisines. My curiosity drives me to stay on the cutting edge of technology and design trends, bringing innovative and practical solutions to every challenge. Whether I'm developing a sleek website or diving into the latest tech, I am dedicated to delivering excellence in every project.",
};

export const PROJECTS = [
  {
    title: "MedEase",
    subtitle:
      "Built a full-stack healthcare platform providing online doctor consultations, AI health chat, centralized records, personalized tips, and appointment booking for efficient health management.",
    image: image1,
  },
  {
    title: "Authentication and Authorization",
    subtitle:
      "Developed a secure MERN stack app with Firebase authentication, JWT, and Redux Toolkit integration.",
    image: image2,
  },
  {
    title: "Personal Portfolio website",
    subtitle: "Developed the front-end portfolio website, highlighting skills, projects, and experiences.",
    image: image3,
  },
  {
    title: "Responsive SaaS Landing Page",
    subtitle:
      "Designed and developed a responsive landing page.”",
    image: image4,
  },
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
    // experience: "2+ years",
  },
  {
    icon: <SiExpress  className="text-4xl lg:text-6xl text-white" />,
    name: "Express.js",
    // experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
    name: "MongoDB",
    // experience: "1.5+ years",
  },
  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
    name: "Node.js",
    // experience: "2+ years",
  },
  {
    icon: <TbBrandFramerMotion className="text-4xl lg:text-6xl text-green-600" />,
    name: "Framer Motion",
    // experience: "2+ years",
  },
  {
    icon: <SiSocketdotio className="text-4xl lg:text-6xl text-green-600" />,
    name: "Socket.io",
    // experience: "2+ years",
  },
  {
    icon: <SiTailwindcss className="text-4xl lg:text-6xl text-green-600" />,
    name: "TailwindCSS",
    // experience: "2+ years",
  },
];

export const BLOGS = [
  {
    name: "Emily Johnson",
    title: "CEO, Tech Innovators",
    quote:
      "Working with Robert has been an incredible experience. His design sensibilities and technical expertise are top-notch, making him a valuable asset to any project.",
    image: user1,
  },
  {
    name: "Michael Lee",
    title: "CTO, Creative Minds",
    quote:
      "Robert consistently delivers high-quality work, combining creativity and technical prowess. His ability to solve complex problems with elegant solutions is truly impressive.",
    image: user2,
  },
  {
    name: "Sophia Martinez",
    title: "Lead Developer, Digital Solutions",
    quote:
      "Robert's dedication to his craft is evident in every project he undertakes. His innovative approach and attention to detail set him apart as a leading designer and developer.",
    image: user3,
  },
  {
    name: "Daniel Thompson",
    title: "Project Manager, InnovateX",
    quote:
      "Robert's ability to understand client needs and translate them into beautiful, functional designs is remarkable. He is a true professional who always exceeds expectations.",
    image: user4,
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.instagram.com/1311_dom?igsh=MWptbDl3NXdzOGV5OA%3D%3D&utm_source=qr",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/BANDLA-BOT",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/bandla-guru-prasad-608b09204",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];

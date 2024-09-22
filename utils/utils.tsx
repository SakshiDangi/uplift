import { desktop, growth, innovation } from "./Icons";
import { Londrina_Outline } from "next/font/google";

const bungee = Londrina_Outline({
  subsets: ["latin"],
  weight: ["400"],
});

interface IService {
  title: string;
  icon: any;
  description: string;
  bulletPoints: string[];
}

export const navLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Apply Job",
    url: "/job",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "Video",
    url: "/video",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

export const services: IService[] = [
  {
    title: "Digital Strategy & Consulting",
    icon: growth,
    description:
      "Develop a robust digital strategy that aligns with your business goals. Our expert consultants will guide you through the process, ensuring your brand stays ahead in the digital landscape.",
    bulletPoints: [
      "Tailored digital strategies for your brand",
      "In-depth market and competitor analysis",
      "Expert guidance on emerging trends",
      "Alignment of digital initiatives with business goals",
    ],
  },
  {
    title: "UX/UI Design & Web Development",
    icon: desktop,
    description:
      "Create a seamless user experience with our expert UX/UI design and web development services. We craft visually stunning and highly functional websites that engage users and drive conversions.",
    bulletPoints: [
      "User-centered UX/UI design",
      "Responsive and accessible web development",
      "Custom website and application solutions",
      "Optimization for performance and speed",
    ],
  },
  {
    title: "Innovative Product Development",
    icon: innovation,
    description:
      "Transform your ideas into market-ready products. Our team specializes in creating innovative solutions that drive growth and give you a competitive edge.",
    bulletPoints: [
      "End-to-end product design and development",
      "Rapid prototyping and iteration",
      "Integration of cutting-edge technologies",
      "Focus on user needs and market demands",
    ],
  },
];


export const baseText = [
  {
    text: "Web Development",
  },
  { text: "Digital Marketing", outline: bungee.className },
  { text: "UI/UX Design" },
  { text: "SEO Optimization", outline: bungee.className },
];


export const faqs = [
  {
    question: "What is community development?",
    answer:
      "Community development is a process that empowers individuals and groups within a community to work together to identify and address their common needs and goals. It involves promoting social justice, improving quality of life, and creating sustainable change.",
  },
  {
    question: "Why is community development important?",
    answer:
      "Community development is important because it fosters active participation, local decision-making, and ownership among community members. It strengthens social bonds, enhances community resilience, and creates a sense of belonging and empowerment.",
  },
  {
    question: "What are the key principles of community development?",
    answer:
      "The key principles of community development include inclusivity, participation, empowerment, collaboration, and sustainability. These principles ensure that community members have a voice, agency, and access to resources and opportunities for growth.",
  },
  {
    question: "What are some common community development initiatives?",
    answer:
      "Common community development initiatives include affordable housing projects, youth programs, education and skill-building initiatives, environmental sustainability projects, healthcare access programs, and cultural and arts programs.",
  },
  {
    question: "How can individuals get involved in community development?",
    answer:
      "Individuals can get involved in community development by volunteering their time and skills, participating in community organizations and groups, attending town hall meetings, supporting local businesses, and advocating for social and economic justice.",
  },
  {
    question: "How can we reach you?",
    answer:
      "You can contact us by contact us page or email us on uplift@gmail.com.",
  },
];


[
  {
    title: "Services",
    links: [
      {
        name: "Job Recruitment Assistance",
        url: "/job",
      },
      {
        name: "Strengthened communities",
        url: "/communities",
      },
      {
        name: "Partnership with public bodies",
        url: "/partnership",
      },
      {
        name: "Startup Ideas",
        url: "/startup",
      },
      {
        name: "Science & Tech",
        url: "/tech",
      },
    ],
  },
  {
    title: "Contact Info",
    links: [
      {
        name: "Email",
        email: "uplift@testmail.com",
      },
      {
        name: "Phone",
        phone: "+91 123 456 7890",
      },
      {
        name: "Address",
        address: "123, Street Name, City, Country",
      },
    ],
  },
];

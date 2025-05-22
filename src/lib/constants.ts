import type { LucideIcon } from 'lucide-react';
import { Linkedin, Mail, MapPin, Phone, GraduationCap, Lightbulb, Code, Store, FileCode, Palette, PenTool, MonitorSmartphone, Briefcase } from 'lucide-react';

export type NavItem = {
  name: string;
  href: string;
  icon?: LucideIcon;
};

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  // { name: 'Education', href: '/#education' }, // Removed
  // { name: 'Experience', href: '/#experience' }, // Removed
  { name: 'Portfolio', href: '/#portfolio' },
  { name: 'Contact', href: '/#contact' },
];

export type Project = {
  id: string;
  name: string;
  tech: string[];
  description: string;
  liveLink: string;
  image: string;
  imageHint: string;
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'portfolio',
    name: 'Personal Portfolio',
    tech: ['HTML', 'CSS', 'JavaScript'],
    description: 'A dynamic and responsive personal portfolio website designed to showcase my skills, projects, and professional journey. Built with a focus on user experience and modern design principles.',
    liveLink: '#',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'portfolio website',
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Platform',
    tech: ['React', 'Node.js', 'Express'],
    description: 'A full-featured e-commerce website with functionalities like product browsing, cart management, user authentication, and order processing. Designed for scalability and a seamless shopping experience.',
    liveLink: '#',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'online store',
  },
  {
    id: 'weather-app',
    name: 'Weather Forecast App',
    tech: ['JavaScript', 'API Integration', 'GeoLocation'],
    description: 'A sleek weather application that provides real-time weather updates and forecasts for any location. Features include current conditions, hourly/daily forecasts, and a user-friendly interface.',
    liveLink: '#',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'weather application',
  },
   {
    id: 'music-player',
    name: 'Music Player',
    tech: ['HTML', 'CSS', 'JavaScript'],
    description: 'An interactive web-based music player with standard controls, playlist management, and audio visualization. Built to offer an enjoyable listening experience.',
    liveLink: '#',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'music interface',
  },
  {
    id: 'analog-clock',
    name: 'Analog Clock',
    tech: ['HTML', 'CSS', 'JavaScript'],
    description: 'A classic analog clock implemented with pure HTML, CSS, and JavaScript, showcasing intricate styling and dynamic time updates.',
    liveLink: '#',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'clock design',
  },
  {
    id: 'tic-tac-toe',
    name: 'Tic-Tac-Toe Game',
    tech: ['JavaScript', 'Game Logic'],
    description: 'A fun and interactive Tic-Tac-Toe game with an intelligent AI opponent or two-player mode. A great example of JavaScript DOM manipulation and game logic.',
    liveLink: '#',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'game board',
  },
];

export type ContactInfoItem = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
};

export const CONTACT_INFO: ContactInfoItem[] = [
  { icon: Phone, label: 'Phone', value: '+91 7895708219', href: 'tel:+917895708219' },
  { icon: Mail, label: 'Email', value: 'abhishekgautam9112@gmail.com', href: 'mailto:abhishekgautam9112@gmail.com' },
  { icon: MapPin, label: 'Address', value: 'Haridwar, Uttarakhand, India' },
];

export const SOCIAL_LINKS: NavItem[] = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/abhishek-gautam-214459227', icon: Linkedin },
];

export type Skill = {
  name: string;
  icon: LucideIcon;
  level?: string;
};

export const SKILLS_DATA: Skill[] = [
  { name: 'Shopify Development', icon: Store, level: 'Expert' },
  { name: 'Liquid Programming', icon: FileCode, level: 'Expert' },
  { name: 'Custom Theme Development', icon: Palette, level: 'Advanced' },
  { name: 'Figma to Shopify', icon: PenTool, level: 'Advanced' },
  { name: 'HTML5', icon: Code, level: 'Advanced' },
  { name: 'CSS3 & TailwindCSS', icon: Code, level: 'Advanced' },
  { name: 'JavaScript (ES6+)', icon: Code, level: 'Advanced' },
  { name: 'Responsive Design', icon: MonitorSmartphone, level: 'Advanced' },
  { name: 'eCommerce Strategy', icon: Lightbulb, level: 'Intermediate' },
];

export type EducationItem = {
  institution: string;
  degree: string;
  duration: string;
  grade: string;
  icon: LucideIcon;
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'Phonics Group of Institutions, Roorkee',
    degree: 'Bachelor of Technology - BTech, Computer Science',
    duration: '2020 - 2024',
    grade: '8.2 CGPA',
    icon: GraduationCap,
  },
  {
    institution: 'Jwalapur Inter College, Jwalapur Haridwar',
    degree: 'Intermediate, PCM',
    duration: '2018 - 2020',
    grade: '78%',
    icon: GraduationCap,
  },
  {
    institution: 'Jwalapur Inter College, Jwalapur Haridwar',
    degree: 'High School',
    duration: '2016 - 2018',
    grade: '75%',
    icon: GraduationCap,
  },
];

export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  locationType: string;
  description: string;
  icon: LucideIcon;
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: 'Bharat Intern',
    role: 'Web Development Intern',
    duration: 'Aug 2023 - Sep 2023 (1 month)',
    locationType: 'Remote',
    description: "During my internship at Bharat Intern, I gained hands-on experience in web development, working on various projects that helped hone my skills in front-end and back-end technologies. I contributed to the development of responsive and user-friendly web applications, collaborated with team members, and learned about industry best practices.",
    icon: Briefcase,
  },
  {
    company: 'Saleable Technologies',
    role: 'Web Development Intern',
    duration: 'Dec 2022 - Feb 2023 (3 months)',
    locationType: 'Mohali, Punjab, India · On-site',
    description: "At Saleable Technology, I worked as a Web Development Intern, focusing on building and maintaining web applications. This role allowed me to deepen my understanding of the MERN stack, improve my problem-solving abilities, and gain practical experience in a professional setting. I was involved in the full software development lifecycle, from requirement gathering to deployment.",
    icon: Briefcase,
  },
];

export const SITE_TITLE = "Abhishek Gautam | Shopify Developer";
export const SITE_DESCRIPTION = "Personal portfolio of Abhishek Gautam, a passionate Shopify developer creating high-performing custom themes and e-commerce solutions.";


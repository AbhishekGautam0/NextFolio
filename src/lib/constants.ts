import type { LucideIcon } from 'lucide-react';
import {
  GaugeCircle,
  Code2,
} from 'lucide-react';
import { WhatsappIcon } from '@/components/ui/WhatsappIcon';
import { Linkedin, Mail, MapPin, Phone, GraduationCap, Lightbulb, Code, Store, FileCode, Palette, PenTool, MonitorSmartphone, Briefcase } from 'lucide-react';

export type NavItem = {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
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
    id: 'growplex',
    name: 'GrowPlex',
    tech: ['HTML', 'CSS', 'Liquid', 'JavaScript'],
    description: 'I designed and developed this high-conversion Shopify store for a premium hair serum brand. The layout is clean and modern, built from Figma with pixel-perfect precision. It features smooth animations, fast load times, and a user-focused design to highlight product benefits and boost customer trust. The result is a professional, mobile-optimized experience that supports both education and sales.',
    liveLink: 'https://growplex.co/',
    image: '/portfolio-images/glowplex.png',
    imageHint: 'Growplex website',
  },
  {
    id: 'oluzuswim',
    name: 'OluzuSwim',
    tech: ['HTML', 'CSS', 'Liquid', 'JavaScript'],
    description: 'I developed this pixel-perfect Shopify store based on Figma designs, ensuring a smooth, user-friendly experience across all devices. The layout is fully responsive, with optimized performance and intuitive navigation to enhance customer engagement and drive conversions.',
    liveLink: 'https://oluzuswim.com/',
    image: '/portfolio-images/Oluzu-Swim.png',
    imageHint: 'OluzuSwim store',
  },
  {
    id: 'rewagrowth',
    name: 'REVA-GROWTH',
    tech: ['HTML', 'CSS', 'Liquid', 'JavaScript'],
    description: 'I developed this pixel-perfect, responsive Shopify store for a premium hair care brand. Built from Figma designs, the site emphasizes a clean, modern aesthetic and intuitive navigation. Leveraging natural ingredients like aloe vera, RevaGrowth offers products that promote healthy hair growth and vitality. The user-friendly design ensures a seamless shopping experience across all devices, enhancing customer engagement and driving conversions.',
    liveLink: 'https://revagrowth.com/',
    image: '/portfolio-images/REVA-GROWTH.png',
    imageHint: 'REVA-GROWTH',
  },
   {
    id: 'mindright',
    name: 'Mindright',
    tech: ['HTML', 'CSS', 'Liquid', 'JavaScript'],
    description: ' I designed and developed this pixel-perfect Shopify store for a nootropic-infused superfood brand. Built from Figma designs, the site emphasizes a clean, modern aesthetic and intuitive navigation. It showcases products like protein bars and supplements that support mood, energy, and focus, providing users with a seamless and engaging shopping experience.',
    liveLink: 'https://getmindright.com/',
    image: '/portfolio-images/Mindright.png',
    imageHint: 'Mindright Store',
  },
  {
    id: 'nazranaanj',
    name: 'Nazranaanj',
    tech: ['HTML', 'CSS', 'Liquid', 'JavaScript'],
    description: ' I developed this pixel-perfect, responsive Shopify store for a premier South Asian bridal boutique based in New Jersey. Built from Figma designs, the site emphasizes a clean, modern aesthetic and intuitive navigation. It showcases a diverse collection of bridal and groom attire, including lehengas, sherwanis, and custom ensembles, providing users with a seamless and engaging shopping experience.',
    liveLink: 'https://nazranaanj.com/',
    image: '/portfolio-images/nazranaj.png',
    imageHint: 'Nazranaanj Store',
  },
  {
    id: 'rockher',
    name: 'RockHer',
    tech: ['HTML', 'CSS', 'Liquid', 'JavaScript'],
    description: ' I developed this pixel-perfect, responsive Shopify store for a luxury jewelry brand specializing in custom engagement rings. Built from Figma designs, the site emphasizes a clean, modern aesthetic and intuitive navigation. It showcases ethically sourced diamonds and handcrafted rings, providing users with a seamless and engaging shopping experience.',
    liveLink: 'https://www.rockher.com/',
    image: '/portfolio-images/jwellery.png',
    imageHint: 'RockHer Store',
  },
];

export type ContactInfoItem = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
};

export const CONTACT_INFO: ContactInfoItem[] = [
  { icon: Phone, label: 'Phone', value: '+91 9589482056', href: 'tel:+919589482056' },
  { icon: Mail, label: 'Email', value: 'abhishekgautam@gmail.com', href: 'mailto:aabhishek.gautamm@gmail.com' },
  { icon: MapPin, label: 'Address', value: 'Indore, Madhya Pradesh, India' },
];

export const SOCIAL_LINKS: NavItem[] = [
    { name: 'LinkedIn', href: 'https://linkedin.com/in/abhishek-gautam-dev25', icon: Linkedin },
    {
      name: "WhatsApp",
      href: "https://wa.me/919589482056",
      icon: WhatsappIcon, 
   },  
];

export type Skill = {
  name: string;
  icon: LucideIcon;
  level?: string;
  desc?: string;
};

export const SKILLS_DATA: Skill[] = [
  {
    name: 'Shopify Development',
    icon: Store,
    level: 'Expert',
    desc: 'Expert in building, customizing, and scaling Shopify storefronts tailored to unique client needs.'
  },
  {
    name: 'Theme Customization',
    icon: Palette,
    level: 'Advanced',
    desc: 'Specialized in modifying and enhancing Shopify themes for personalized branding and user experience.'
  },
  {
    name: 'Liquid Programming',
    icon: FileCode,
    level: 'Expert',
    desc: 'Proficient in Shopify’s Liquid template language to create dynamic and flexible store functionality.'
  },
  {
    name: 'HTML5',
    icon: Code,
    level: 'Advanced',
    desc: 'Skilled in crafting semantic and accessible HTML5 structures for modern web applications.'
  },
  {
    name: 'CSS3',
    icon: Code,
    level: 'Advanced',
    desc: 'Advanced styling techniques using CSS3 for responsive, aesthetic, and pixel-perfect UI designs.'
  },
  {
    name: 'JavaScript (ES6+)',
    icon: Code,
    level: 'Advanced',
    desc: 'Strong grasp of modern JavaScript to add interactivity and enhance frontend performance.'
  },
  {
    name: 'Figma to Shopify',
    icon: PenTool,
    level: 'Advanced',
    desc: 'Experienced in converting Figma designs into functional, high-fidelity Shopify storefronts.'
  },
  {
    name: 'Responsive Design',
    icon: MonitorSmartphone,
    level: 'Advanced',
    desc: 'Adept at implementing mobile-first and fully responsive layouts across all device sizes.'
  },
  {
    name: 'eCommerce Strategy',
    icon: Lightbulb,
    level: 'Intermediate',
    desc: 'Understands user behavior and sales funnels to boost conversion rates and store performance.'
  },
  {
    name: 'Speed Optimization',
    icon: GaugeCircle, // You can choose another icon if preferred
    level: 'Advanced',
    desc: 'Skilled in improving store performance by optimizing Liquid templates, reducing render-blocking resources, and leveraging caching strategies.'
  },
  {
    name: 'Custom Feature Development',
    icon: Code2, // Replace with your preferred icon
    level: 'Advanced',
    desc: 'Experienced in replacing third-party apps with custom-coded solutions for smoother performance and greater flexibility in feature customization.'
  }
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
    institution: 'Malwa institute of technology, Indore',
    degree: 'Bachelor of Technology - BTech,  Electronics & Communication',
    duration: '2019 - 2023',
    grade: '7.79 CGPA',
    icon: GraduationCap,
  },
  {
    institution: 'Krishna vidhya niketan H.S. school, Indore',
    degree: 'PCM',
    duration: '2018 - 2019',
    grade: '59%',
    icon: GraduationCap,
  }
];

export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  locationType: string;
  description: string[];
  icon: LucideIcon;
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: 'TechInfini Solutions',
    role: 'Associate Software Engineer',
    duration: 'Nov 2023 - Aug 2025',
    locationType: 'On Site',
    description: [
  "Led the design section of Shopify development projects, collaborating closely with clients to understand their vision.",
  "Translated Figma designs into pixel-perfect, responsive Shopify storefronts using HTML, SCSS, JavaScript, and Liquid.",
  "Utilized expert knowledge of HTML, CSS, JavaScript, and Shopify Liquid to customize themes and templates.",
  "Integrated third-party apps and APIs to extend store functionality, including product upsells, cart drawers, and custom pop-ups.",
  "Ensured cross-browser and cross-device compatibility by implementing mobile-first design and thorough QA testing.",
  "Improved performance and load times by optimizing Liquid templates, reducing unnecessary scripts, and lazy loading assets."
],      

    icon: Briefcase,
  },
  {
    company: 'parkhya solutions',
    role: 'Shopify Developer',
    duration: 'Aug 2025 - Present',
    locationType: 'On Site', // or 'On Site' if applicable
    description: [
      "Replaced third-party apps with custom-coded solutions wherever possible, resulting in smoother performance and more flexible feature customization.",
      "Developed custom Shopify apps and reusable components to accelerate development cycles.",
      "Spearheaded speed optimization initiatives, significantly improving store load times and performance scores.",
      "Refactored legacy Liquid code and streamlined theme architecture for better maintainability and scalability.",
      "Implemented advanced caching strategies and minimized render-blocking resources to enhance user experience.",
      "Collaborated with marketing and SEO teams to align technical enhancements with conversion goals.",
      "Strengthened skills in analytics integration, A/B testing, and conversion rate optimization (CRO).",
      "Gained expertise in performance auditing tools like Lighthouse and GTmetrix to guide optimization efforts."
    ],
    icon: Briefcase,
  }
];

export const SITE_TITLE = "Abhishek Gautam | Shopify Developer";
export const SITE_DESCRIPTION = "Personal portfolio of Abhishek Gautam, a passionate Shopify developer Setup high-performing custom Stores and e-commerce solutions.";


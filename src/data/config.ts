import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";

export interface Social {
  name: string;
  url: string;
  icon: LucideIcon;
}

export const socials: Social[] = [
  {
    name: "GitHub",
    url: "https://github.com/Ameenkhan18",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ameen-khan2/",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:ameenkhann.2004@gmail.com",
    icon: Mail,
  },
];

export const siteConfig = {
  name: "AMEEN KHAN",
  title: "Full Stack Developer and AI Engineer",
  description: "Building Intelligent Systems & Automation Projects",
};

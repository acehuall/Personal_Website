import { ReactNode } from 'react';

export enum Page {
  Home = 'Home',
  About = 'About',
  Portfolio = 'Portfolio',
  Contact = 'Contact',
}

export interface NavItem {
  label: string;
  page: Page;
  path: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  icon?: ReactNode;
}

export interface SkillCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

export interface ServiceBlockProps {
  title: string;
  items: string[];
  linkText: string;
}

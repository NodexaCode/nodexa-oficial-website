import {
  AppWindow,
  ChartLine,
  Globe,
  Layers,
  MapPin,
  MousePointerClick,
  type LucideIcon,
} from 'lucide-react'

export const siteConfig = {
  name: 'Nodexa Code',
  email: 'hello@nodexacode.com',
  url: 'https://nodexacode.com',
  responseTime: 'Within 1 business day',
}

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export type Service = {
  slug: string
  title: string
  icon: LucideIcon
  summary: string
  description: string
  deliverables: string[]
  stack: string[]
}

export const services: Service[] = [
  {
    slug: 'web-applications',
    title: 'Web Applications',
    icon: AppWindow,
    summary: 'Custom web apps that automate workflows and scale with your business.',
    description:
      'From internal tools to customer portals, we design and build fast, reliable web applications with clean architecture, role-based access and integrations with the services you already use.',
    deliverables: [
      'Product discovery & technical scoping',
      'UI/UX design and interactive prototypes',
      'Frontend & backend development',
      'API and third-party integrations',
    ],
    stack: ['React', 'Next.js', 'Node.js', 'TypeScript'],
  },
  {
    slug: 'platforms',
    title: 'Platforms & SaaS',
    icon: Layers,
    summary: 'Multi-user platforms with dashboards, billing and secure data.',
    description:
      'We engineer platforms built to grow: multi-tenant architecture, authentication, subscriptions, admin dashboards and the infrastructure to keep it all running smoothly.',
    deliverables: [
      'Scalable system architecture',
      'Authentication & user management',
      'Payments and subscription billing',
      'Admin panels & reporting',
    ],
    stack: ['Next.js', 'PostgreSQL', 'Vue', 'Cloud hosting'],
  },
  {
    slug: 'websites',
    title: 'Websites',
    icon: Globe,
    summary: 'Professional websites on WordPress or modern JavaScript frameworks.',
    description:
      'Business websites that look sharp, load fast and are easy for your team to manage. We build on WordPress when you need editorial freedom, or on headless frameworks when performance is critical.',
    deliverables: [
      'Custom design aligned with your brand',
      'WordPress themes & custom blocks',
      'Headless CMS setups',
      'Content migration & training',
    ],
    stack: ['WordPress', 'Next.js', 'Astro', 'Headless CMS'],
  },
  {
    slug: 'landing-pages',
    title: 'Landing Pages',
    icon: MousePointerClick,
    summary: 'High-converting pages built for campaigns, launches and lead capture.',
    description:
      'Focused, persuasive landing pages designed around a single goal. We combine clear messaging, fast load times and conversion tracking so every visit has a chance to become a lead.',
    deliverables: [
      'Conversion-focused copy structure',
      'Lead forms & CRM connections',
      'A/B test ready layouts',
      'Event and goal tracking',
    ],
    stack: ['Next.js', 'WordPress', 'Tag Manager', 'CRM'],
  },
  {
    slug: 'local-seo',
    title: 'Local SEO',
    icon: MapPin,
    summary: 'Get found by customers searching for your services nearby.',
    description:
      'We optimize your Google Business Profile, local citations and on-page signals so your business shows up in the map pack and local results where buying decisions happen.',
    deliverables: [
      'Google Business Profile optimization',
      'Local citations & NAP consistency',
      'Location & service pages',
      'Review generation strategy',
    ],
    stack: ['Google Business', 'Schema markup', 'Search Console'],
  },
  {
    slug: 'seo-analytics',
    title: 'SEO & Analytics',
    icon: ChartLine,
    summary: 'Search positioning backed by data you can actually read.',
    description:
      'Technical SEO, keyword strategy and content optimization paired with analytics dashboards that show where your traffic comes from, what converts, and what to improve next.',
    deliverables: [
      'Technical SEO audits & fixes',
      'Keyword research & content plan',
      'Analytics & conversion setup',
      'Monthly performance reports',
    ],
    stack: ['GA4', 'Search Console', 'Looker Studio', 'Core Web Vitals'],
  },
]

export const techStack = [
  'WordPress',
  'React',
  'Next.js',
  'Vue',
  'Node.js',
  'TypeScript',
  'Astro',
  'PostgreSQL',
  'Tailwind CSS',
  'GA4',
  'Search Console',
  'Cloud Deployments',
]

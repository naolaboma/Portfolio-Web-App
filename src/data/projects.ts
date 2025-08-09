export type Project = {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  tech: string[];
  repoUrl?: string;
  liveUrl?: string;
  images?: string[];
  role?: string;
  duration?: string;
  highlights?: string[];
  keyMetrics?: string[];
  featured?: boolean;
  date?: string;
};

export const projects: Project[] = [
  {
    id: 'blog-001',
    title: 'Blog Platform',
    slug: 'blog-platform',
    shortDescription: 'Multi-role blog platform with auth, comments, and AI drafting.',
    description: `A role-based blog platform built in an 8-day team sprint using clean architecture. Features: auth, CRUD posts, comments, likes, and AI-assisted drafting.`,
    tech: ['Go', 'MongoDB', 'Gin', 'Docker'],
    repoUrl: 'https://github.com/naolaboma/Blog-Platform-API',
    liveUrl: '',
    images: ['/images/projects/blog-1.png'],
    role: 'Backend Developer',
    duration: '8 days',
    highlights: ['Role-based access control', 'Clean architecture', 'Domain-driven use cases']
  },
  {
    id: 'portfolio-002',
    title: 'Personal Portfolio',
    slug: 'personal-portfolio',
    shortDescription: 'A personal portfolio website to showcase projects and skills.',
    description: `This portfolio website is built using Next.js and Tailwind CSS, featuring a responsive design and smooth user experience. It highlights my projects, skills, and provides a contact form.`,
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    repoUrl: 'https://github.com/naolaboma/Portfolio-Web-App',
    liveUrl: 'https://your-portfolio-url.vercel.app',
    images: ['/images/projects/portfolio.png'],
    role: 'Full Stack Developer',
    duration: '2 weeks',
    highlights: ['Responsive design', 'SEO optimized', 'Fast loading times']
  },
  {
    id: 'ecommerce-003',
    title: 'E-commerce Platform',
    slug: 'ecommerce-platform',
    shortDescription: 'A full-featured e-commerce platform with user authentication and payment processing.',
    description: `Developed an e-commerce platform that allows users to browse products, add them to a cart, and securely checkout. Integrated payment processing and user authentication for a seamless shopping experience.`,
    tech: ['Laravel', 'MySQL', 'Vue.js'],
    repoUrl: 'https://github.com/your-username/ecommerce-platform',
    liveUrl: '',
    images: ['/images/projects/ecommerce.png'],
    role: 'Backend Developer',
    duration: '1 month',
    highlights: ['User authentication', 'Payment integration', 'Admin dashboard']
  },
  {
    id: 'hotel-004',
    title: 'Hotel Management System',
    slug: 'hotel-management-system',
    shortDescription: 'End-to-end hotel operations platform: booking, billing, rooms, and staff workflows.',
    description:
      'A modular hotel management system covering reservations, check‑in/out, room inventory, pricing, invoicing, and role‑based operations. Designed with clean architecture, clear boundaries, and secure multi‑role access.',
    tech: ['NestJS', 'TypeScript', 'TypeORM', 'PostgreSQL', 'React', 'Tailwind CSS', 'JWT', 'Stripe', 'Cloudinary'],
    repoUrl: 'https://github.com/naolaboma/Hotel-Management-System',
    liveUrl: '',
    images: ['/images/projects/hotel.png'],
    role: 'Backend Engineer',
    duration: '3 weeks',
    highlights: [
      'Room inventory and pricing engine with availability search',
      'Reservations, check‑in/out, invoices, and payment hooks',
      'RBAC with JWT sessions and audit logs',
    ],
    keyMetrics: ['<200ms median booking search', '100% typed DTOs and validators'],
    featured: true,
    date: '2025-07-15',
  },
  {
    id: 'garage-005',
    title: 'Garage Management System',
    slug: 'garage-management-system',
    shortDescription: 'Workshop/garage platform for job orders, parts, invoicing, and customer updates.',
    description:
      'Manages vehicle intake, diagnostics, job orders, parts inventory, technician assignments, and customer notifications. Emphasis on reliability, traceability, and performance.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'React', 'Redux Toolkit', 'TypeScript'],
    repoUrl: 'https://github.com/naolaboma/Garage-app-databaseP',
    liveUrl: '',
    images: ['/images/projects/garage.png'],
    role: 'Full Stack Developer',
    duration: '2 weeks',
    highlights: [
      'Job order pipeline with statuses and SLAs',
      'Parts inventory with low‑stock alerts and supplier tracking',
      'Invoice generation and exportable PDFs',
    ],
    keyMetrics: ['99.9% uptime target with health checks', 'Background jobs via queues'],
    featured: false,
    date: '2025-06-20',
  },
  {
    id: 'editor-006',
    title: 'Text Editor',
    slug: 'text-editor',
    shortDescription: 'Java Swing-based rich text editor with formatting, RTF support, and printing.',
    description:
      'WordEditor is a Java desktop application built with Swing. It supports rich text formatting (bold/italic/underline), paragraph alignment and spacing, find & replace, color customization, word count, undo/redo, and printing.',
    tech: ['Java', 'Swing', 'RTF'],
    repoUrl: 'https://github.com/naolaboma/wordeditor',
    liveUrl: '',
    images: ['/images/projects/editor.png'],
    role: 'Java Desktop Developer',
    duration: '1 week',
    highlights: [
      'Rich text formatting: bold, italic, underline; font family & size',
      'Paragraph alignment & spacing; indent/outdent; justify',
      'Find & replace, undo/redo, and word count',
      'Color customization for background and foreground',
      'Print documents via system printer',
    ],
    keyMetrics: ['Responsive typing and UI on standard hardware'],
    featured: false,
    date: '2025-05-30',
  },
];
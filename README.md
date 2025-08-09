# Personal Portfolio Website

This project is a personal portfolio website built with Next.js and Tailwind CSS. It showcases backend development skills, projects, and provides contact information. The website is designed to be fast, mobile-first, and easy to update.

## Features

- **Responsive Design**: The website is fully responsive and accessible on all devices.
- **Project Showcase**: Displays a list of projects with detailed views, including technologies used and links to repositories.
- **Contact Form**: Users can reach out via a contact form integrated with Formspree.
- **Downloadable Resume**: A PDF version of the resume is available for download.
- **SEO Optimized**: Basic SEO practices are implemented, including meta tags and a sitemap.

## Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   └── projects/
│   ├── avatar.jpg
│   ├── resume.pdf
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectDetail.tsx
│   │   ├── SkillBadge.tsx
│   │   ├── ContactForm.tsx
│   │   └── Section.tsx
│   ├── data/
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── pages/
│   │   ├── index.tsx
│   │   ├── projects/
│   │   │   └── [slug].tsx
│   │   ├── resume.tsx
│   │   └── api/
│   │       └── contact.ts
│   └── styles/
│       └── globals.css
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Deployment

This project can be deployed on Vercel. Simply connect your GitHub repository to Vercel, and it will handle the deployment automatically.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you'd like to add.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
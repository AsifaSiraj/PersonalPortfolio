# Asifa Siraj - Interactive Three.js Portfolio

A stunning, immersive personal portfolio website built with **Three.js**, **Next.js 16**, **TypeScript**, and **Framer Motion**. Inspired by [joanramosrefusta.com](https://www.joanramosrefusta.com).

## Features

- **3D Background** - Interactive Three.js scene with floating wireframe geometries, 2000+ particles, mouse-following camera, and dynamic lighting
- **Loading Screen** - Animated name reveal with blur-to-focus effect and gradient progress bar
- **Smooth Navigation** - Scroll-spy nav bar with active section tracking and mobile hamburger menu
- **About Section** - Rotating gradient avatar ring, animated skill badges, social links
- **Experience Timeline** - 7 roles displayed in alternating timeline layout with mode badges and skill tags
- **Projects Showcase** - 12 projects with GitHub links, tech stack badges, and featured/all toggle
- **Education & Certifications** - 3 institutions + 13 certification cards
- **Skills Visualization** - 4 categories with animated progress bars + floating skill cloud
- **Contact Section** - Social links and resume download CTA
- **Interactive Chatbot "Byte"** - Animated robot character with keyword-based Q&A system (14+ patterns)
- **Resume Download** - Download button in nav bar and contact section
- **GitHub Integration** - Links on all projects + "View All Repositories" CTA
- **Fully Responsive** - Mobile-first design with smooth animations

## Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | React framework with App Router |
| [Three.js](https://threejs.org/) | 3D graphics and WebGL |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations and transitions |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+) or [Bun](https://bun.sh/)
- npm, yarn, or bun

### Installation

```bash
# Clone the repository
 git clone https://github.com/AsifaSiraj/portfolio.git
 cd portfolio

# Install dependencies
 npm install
 # or: bun install

# Add your resume PDF
 # Place your resume.pdf file in the public/ folder

# Start development server
 npm run dev
 # or: bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── public/
│   └── resume.pdf          # Your resume file
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles + custom scrollbar
│   │   ├── layout.tsx         # Root layout with metadata
│   │   └── page.tsx           # Main page (all sections)
│   ├── components/
│   │   ├── three/
│   │   │   └── ThreeScene.tsx     # Three.js 3D background scene
│   │   ├── sections/
│   │   │   ├── About.tsx          # About me section
│   │   │   ├── Experience.tsx     # Experience timeline
│   │   │   ├── Projects.tsx       # Projects grid
│   │   │   ├── Education.tsx      # Education + Certifications
│   │   │   ├── Skills.tsx         # Skills with progress bars
│   │   │   └── Contact.tsx        # Contact links
│   │   ├── chatbot/
│   │   │   └── Chatbot.tsx        # Interactive chatbot "Byte"
│   │   ├── LoadingScreen.tsx    # Animated loading screen
│   │   └── Navigation.tsx      # Navigation bar
│   ├── data/
│   │   └── portfolio-data.ts   # All portfolio content data
│   └── lib/
│       └── utils.ts            # Utility functions
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Customization

### Update Your Data

Edit `src/data/portfolio-data.ts` to update:
- Personal info (name, title, bio, social links)
- Work experiences
- Projects
- Education
- Certifications
- Skills & skill levels
- Chatbot Q&A responses

### Resume

Replace `public/resume.pdf` with your actual resume file.

### Colors

The color scheme uses three accent colors:
- **Purple**: `#6c63ff` (primary)
- **Cyan**: `#00d4ff` (secondary)
- **Pink**: `#ff6b9d` (tertiary)

Change these in the component files and `globals.css` to customize the theme.

## Deploy

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/AsifaSiraj/portfolio)

### Netlify

```bash
npm run build
# Deploy the .next folder
```

## License

MIT License - feel free to use this as a template for your own portfolio!

---

Built with ♥ by [Asifa Siraj](https://github.com/AsifaSiraj)

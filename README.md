# TS Lab School Hub

A professional bio-link/hyperlink hub for Tarbiyah Sunnah Lab School, built with Astro, Tailwind CSS, and Keystatic CMS.

## Features
- ⚡️ Lightning fast performance with Astro
- 🎨 Modern, warm, and professional design using Tailwind CSS
- 📝 Easy content management with Keystatic CMS
- 📱 Mobile-first responsive layout with Bottom Navigation
- 🚀 Ready to deploy on Netlify

## Prerequisite
- Node.js (v18 or higher)
- npm or pnpm or yarn

## Getting Started

1. Clone or download this repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:4321` to view the site.
5. Open `http://localhost:4321/keystatic` to access the CMS admin panel.

## Content Management (Keystatic)

All content is managed via Keystatic CMS and stored locally as JSON and Markdoc (`.mdoc`) files inside the `src/content/` directory.

To edit content:
1. Make sure the dev server is running (`npm run dev`).
2. Go to `http://localhost:4321/keystatic`.
3. You can edit Site Settings, Announcements, Quick Links, Programs, and Updates.
4. Changes are automatically saved to your local file system.
5. Commit and push your changes to deploy.

## Deployment

This project is configured to deploy to **Netlify**.

1. Connect your GitHub repository to Netlify.
2. The build command is automatically set to `npm run build`.
3. The publish directory is automatically set to `dist`.
4. Netlify will handle the Server-Side Rendering (SSR) required by Keystatic API routes.

> **Note on Keystatic for Production**: 
> By default, Keystatic is running in `local` mode which saves changes directly to your file system. For a production CMS where admins can edit content without running a local dev server, you must change Keystatic's storage kind to `github` or `cloud` in `keystatic.config.ts`. See [Keystatic Documentation](https://keystatic.com/docs/github-mode) for more details.

## Tech Stack
- [Astro](https://astro.build)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Keystatic CMS](https://keystatic.com)
- [Lucide Icons](https://lucide.dev)

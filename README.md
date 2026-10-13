# Personal Portfolio Template

A responsive personal portfolio built with **Next.js, React, and Tailwind CSS**. I made this project as a starting point for developers who want a clean place to present their work, skills, experience, and contact information without building every page from scratch.

The interface includes English and Persian language support, with layouts designed to switch between **LTR and RTL**. It also includes light and dark themes, subtle page animations, project and blog pages, and reusable UI components. You can use the project as a learning resource or adapt it for your own portfolio or website.

> **Note:** This is a front-end template. The contact form is a UI only until you connect it to an API or a form service. Replace the demo content and personal details before deploying your own copy.

## Features

- **Responsive layout** for desktop, tablet, and mobile screens.
- **English and Persian language support** with LTR/RTL direction changes.
- **Light and dark themes** with the selected theme stored in a cookie.
- **Reusable React components** for navigation, service cards, headings, progress bars, counters, timelines, and content sections.
- **Page transitions and motion effects** powered by Framer Motion.
- **Swiper-based sliders** for content such as testimonials.
- **Project portfolio** with a listing page and individual project detail routes.
- **Blog section** with an article listing and article detail routes.
- **About page** for profile information, skills, and experience.
- **Services page** to describe the work you offer.
- **Contact page UI** ready to connect to your preferred messaging or form backend.
- **Local font assets**, including Shabnam for Persian text.
- **Custom cursor effect** for compatible desktop pointer devices.
- **Customizable content and styling** without changing the overall page structure.

## Tech stack

| Technology | How it is used |
| --- | --- |
| [Next.js 13](https://nextjs.org/) | React framework and page routing using the Pages Router |
| [React 18](https://react.dev/) | Component-based UI and interactive page elements |
| [Tailwind CSS 3](https://tailwindcss.com/) | Utility-first styling and responsive layouts |
| [DaisyUI](https://daisyui.com/) | Additional Tailwind CSS component utilities |
| [Framer Motion](https://www.framer.com/motion/) | Page transitions and interface animations |
| [Swiper](https://swiperjs.com/) | Touch-friendly sliders and carousels |
| [React Icons](https://react-icons.github.io/react-icons/) | Icons used throughout the interface |
| [js-cookie](https://github.com/js-cookie/js-cookie) | Reading and storing the theme preference cookie |
| [Sharp](https://sharp.pixelplumbing.com/) | Image processing support for Next.js |
| `next/font/local` | Loading local font files, including Shabnam |

The English/Persian language switcher is implemented with React context and a small translation dictionary, rather than a separate translation service. This keeps the setup lightweight and easy to understand.

## Pages

The main routes are:

| Route | Purpose |
| --- | --- |
| `/` | Home page and introduction |
| `/about-me` | Profile, skills, and experience |
| `/service` | Services and areas of work |
| `/portfolio` | Portfolio project listing |
| `/portfolio/[portfolio_slug]` | Project details |
| `/blogs` | Blog/article listing |
| `/blogs/[blog_slug]` | Article details |
| `/contact` | Contact form interface |

## Getting started

### Requirements

- [Node.js](https://nodejs.org/) 18 or newer (Node.js 20 LTS is a good choice)
- npm, which is included with Node.js
- Git, if you plan to clone the repository

### 1. Get the code

Clone the repository from GitHub, replacing the example URL with the URL of the repository you are using:

```bash
git clone https://github.com/<your-username>/<your-repository>.git
cd <your-repository>
```

You can also download the repository as a ZIP file and extract it.

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Changes to the source files are reflected during development.

### 4. Check the production build

Create an optimized production build:

```bash
npm run build
```

Then run it locally:

```bash
npm run start
```

The `start` command serves the build created by `npm run build`.

### Available npm scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the local development server |
| `npm run lint` | Runs the Next.js lint checks |
| `npm run build` | Creates the production build |
| `npm run start` | Serves the production build |

## Project structure

```text
src/
├── components/
│   ├── layout/       # Shared page layout
│   ├── module/       # Reusable UI components
│   └── template/     # Page-level templates
├── pages/            # Next.js Pages Router routes
├── styles/           # Global CSS and shared styles
└── utils/
    ├── i18n.js        # English/Persian translations and language state
    ├── infojson.js    # Demo data for services, portfolio, and blog
    ├── fonts.js       # Local font configuration
    └── FollowMouse.jsx# Custom cursor effect

public/
├── Fonts/             # Local font files
└── imgs/              # Portfolio images, logos, and other visual assets

package.json           # Dependencies and scripts
next.config.js         # Next.js configuration
tailwind.config.js     # Tailwind CSS theme and content paths
postcss.config.js      # PostCSS configuration
```

## Make it your own

Most personalisation can be done without rebuilding the page structure.

### Update the content

- **Services, project entries, and blog entries:** start with `src/utils/infojson.js` and update the sample records, names, slugs, and descriptions.
- **Page text and translations:** update the English (`en`) and Persian (`fa`) entries in `src/utils/i18n.js`. When you add a new interface label, provide a translation for both languages and use the translation hook in the component.
- **Profile and experience:** review the About page and the content data. Remove any sample details and replace them with information that is accurate for you.
- **Images and logos:** replace or add assets under `public/imgs/`. Keep filenames in sync with the components that use them.
- **Fonts:** local font configuration lives in `src/utils/fonts.js`; font files are stored under `public/Fonts/`.
- **Colors, spacing, and component styles:** begin with `src/styles/globals.css` and `tailwind.config.js`, then update the relevant component classes.
- **Navigation and page layout:** shared layout and navigation components live in `src/components/layout/` and `src/components/module/`.

Before publishing, check every route in both languages, including the mobile menu, dark theme, detail pages, and RTL alignment. Keep email addresses, URLs, code samples, and other text that should not be reordered in an explicit LTR container when necessary.

## Localization and RTL/LTR

English is the default language and uses left-to-right direction. Persian uses right-to-left direction. The language provider updates the document language and direction and saves the selected language in local storage.

When adding or changing styles, prefer **CSS logical properties** and logical Tailwind utilities where possible:

- Use `margin-inline-start` / `margin-inline-end` instead of fixed left/right margins.
- Use `padding-inline-start` / `padding-inline-end` instead of fixed left/right padding.
- Prefer flex or grid `gap` for space between an icon and a label.
- Avoid hard-coded `left`, `right`, `ml-*`, `mr-*`, `pl-*`, and `pr-*` classes unless the layout is intentionally tied to the physical side of the screen.
- Test in both English and Persian at desktop and mobile widths. Changing `dir` alone does not automatically fix every margin, alignment, or animation.

## Contact form and backend integration

The contact page currently provides the form interface; it does not send emails or save messages by itself. To make it functional, connect it to a backend/API route or a form service. Add server-side validation, spam protection, error and success handling, and a privacy notice appropriate to your deployment. Do not place private API keys in client-side code.

## Deployment

This is a standard Next.js application and can be deployed to a hosting provider that supports Next.js, such as [Vercel](https://vercel.com/), or to a compatible Node.js server.

A typical production workflow is:

```bash
npm install
npm run build
npm run start
```

Follow your hosting provider's current Next.js instructions for environment variables, build settings, and deployment configuration. If you connect a contact API or another external service, configure its settings securely in your hosting environment.

## Before you publish your version

- Replace all placeholder copy, names, dates, contact details, and demo project content.
- Remove unused sample assets and pages.
- Confirm that you have permission to use every image, icon, and font included in your version.
- Test all routes, keyboard navigation, mobile layouts, English/Persian direction, and light/dark themes.
- Run `npm run lint` and `npm run build`.
- Add a screenshot or live demo URL near the top of this README once you have one.

## License and reuse

You are welcome to use this project as a starting point for your own personal portfolio or website, and to modify it for your needs. If you share or redistribute a copy, please retain the copyright and license notice below. I would also appreciate keeping a visible credit and link to the original author, although the MIT license does not require a separate in-page attribution.

Copyright (c) 2026 Abbas Ejlali

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

For GitHub's automatic license detection, you can copy the license text above into a top-level file named `LICENSE` as well.

---

## Built by

**Abbas Ejlali** — Frontend Developer

- GitHub: [@abbasejlali](https://github.com/abbasejlali)

If this project helps you build something, feel free to star the repository or share your improvements. Thanks for checking it out!

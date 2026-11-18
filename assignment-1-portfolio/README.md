# Assignment 1 — Personal Portfolio Website

A responsive personal portfolio website built with **HTML5 and CSS3** (plus a very
small `script.js` used only for the contact form message). It was written for a
college web development assignment and deliberately avoids all frameworks — no
React, Vite, Node.js, Tailwind, Bootstrap or build step of any kind.

The site is a single static page with four required sections: **About**,
**Education**, **Projects** and **Contact**, wrapped in a header, a hero
introduction and a footer.

---

## Assignment requirements fulfilled

| Requirement | Where it is implemented |
| --- | --- |
| Responsive portfolio using HTML and CSS | `index.html`, `style.css` (breakpoints at 960px, 720px, 520px) |
| About section | `#about` — short introduction plus a "What I focus on" card |
| Education section | `#education` — stacked timeline cards |
| Projects section | `#projects` — three responsive project cards in a CSS Grid |
| Contact section | `#contact` — contact list plus a labelled contact form |
| Header and navigation | Sticky `<header>` with a text logo and anchor navigation |
| Hero / intro with call to action | `.hero` — "View my projects" and "Get in touch" buttons |
| Footer | `<footer>` with copyright and navigation links |

## Technology stack

- **HTML5** — semantic elements (`header`, `main`, `section`, `article`, `nav`, `footer`, `ol`).
- **CSS3** — custom properties, Flexbox, CSS Grid, `clamp()`, `aspect-ratio`, media queries,
  `:focus-visible`, `prefers-reduced-motion`.
- **Vanilla JavaScript** — `script.js`, one small handler for the contact form only.
- **No dependencies** — system/OS font stacks, no CDNs, no package manager, no build step.

## Folder structure

```
assignment-1-portfolio/
├── index.html    # all page content and semantic structure
├── style.css     # design system, section styles, responsive rules
├── script.js     # contact form demo message (only JS in the project)
├── README.md     # this file
└── .gitignore    # ignores OS junk, editor folders, logs and secrets
```

There is no `assets/` folder because the design uses no images — the decorative
avatar and logo mark are built entirely with HTML/CSS.

## How to run the website locally

No installation, no build step, no server required.

1. Download or clone the project folder.
2. Open `assignment-1-portfolio/index.html` in any modern browser
   (double-click the file, or right-click → "Open with" → your browser).

Optional — if you prefer to serve it over HTTP:

```bash
# from inside the assignment-1-portfolio folder
python -m http.server 8000
# then visit http://localhost:8000
```

## Features and responsive behaviour

- **Sticky header** with a text logo and anchor links to all four sections.
- **Smooth scrolling** between sections, applied only when the visitor has not
  requested reduced motion.
- **Hero section** with an animated (reduced-motion aware) intro, two clear
  calls to action and a CSS-built initials avatar.
- **Education timeline** with marker dots and a connecting line.
- **Project cards** in a grid that reflows automatically.
- **Contact form** with visible labels, suitable input types, `autocomplete`
  hints and native HTML validation.
- **Accessible details**: skip link, one `<h1>`, logical heading order,
  landmark elements, visible keyboard focus rings, `role="status"` feedback.

Breakpoints:

| Width | Behaviour |
| --- | --- |
| > 960px (desktop) | Hero is two columns; About and Contact are two columns; project cards sit in a row. |
| 960px and below (tablet) | Multi-column sections collapse to one column; the avatar moves below the intro text. |
| 720px and below (mobile) | Navigation drops to its own centred row under the logo. |
| 520px and below (small mobile) | Hero buttons and the submit button become full width; padding is reduced. |

The page is checked so that text does not overflow, cards stack correctly and
there is no horizontal page scrolling at narrow widths.

## Personal details you must replace

Everything below is an intentional placeholder. Each one is also marked with a
`PLACEHOLDERS TO REPLACE` comment at the top of the `<body>` in `index.html`.

| Placeholder | Where it appears | Replace with |
| --- | --- | --- |
| `Your Name`, `YN` | logo, hero heading, `<title>`, `<meta description>`, footer | your name and initials |
| `Your College / University` | About paragraph, first education card | your institution |
| `Your Degree or Course` | About paragraph, first education card | your degree |
| `Higher Secondary Education` / `Secondary Education` | education timeline | your school qualifications (or delete the extra cards) |
| `20XX – 20XX` | all education cards | your study periods / expected graduation year |
| `XX%` | all education cards | your actual scores, or leave as a placeholder |
| `you@example.com` | contact list, form placeholder | your email address |
| `https://github.com/your-username` | contact list, project links | your GitHub profile and repository URLs |
| `https://www.linkedin.com/in/your-username` | contact list | your LinkedIn profile |
| `https://your-username.github.io/...` | project live demo links | your real demo URLs, or remove the "Live demo" links |
| Project titles, descriptions, tags | `#projects` cards | your own projects |
| `© 2026 Your Name` | footer | the current year and your name |

## Known limitations

- **The contact form does not send email.** There is no backend and no form
  service connected. Submitting the form with JavaScript enabled shows an
  informational message and sends nothing. Without JavaScript the form falls
  back to a normal HTML GET submission to the page itself — it still never
  delivers a message. To make it functional, point the `<form>` at a service
  (for example a Formspree endpoint) or your own server-side script, and remove
  the "front-end demonstration" note.
- **All external links are placeholders.** The GitHub, LinkedIn and live demo
  URLs (`github.com/your-username/...`, `your-username.github.io/...`) are not
  real, and no project in this repository has been deployed.
- **No real personal data.** The education entries and project cards contain
  clearly labelled sample/placeholder content only; no grades, achievements or
  employment history have been invented as fact.
- **Not deployed.** This project is not published on GitHub Pages or any hosting
  service.
- Only a small amount of JavaScript is used, and it is optional — the page is
  fully readable and navigable without it.

## Part of a larger project

This is **Assignment 1 of a multi-assignment portfolio project**. It is kept
self-contained so that later assignments (React Components Practice, a React
blog UI, and a final integrated portfolio) can be added as separate folders in
the same repository without restructuring this one.

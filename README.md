# Exploring the Cosmos — Milestone 2 Accessibility and Visual Design

**Live Site:** [https://alilly-stack.github.io/Milestone-2/](https://alilly-stack.github.io/Milestone-2/)

## Pages and Files
- `index.html` — Home page with an introduction and links to the other pages.
- `discoveries.html` — Overview of major astronomy discoveries.
- `contact.html` — Contact page with a four-field accessible form.
- `style.css` — Shared color palette, typography, responsive layout, focus styles, and form styles.
- `form.js` — Client-side validation with visible inline error messages (front-end demonstration only; does not send or store submissions).
- `README.md` — Documentation of accessibility fixes, WAVE scan results, contrast verification, and visual design principles.

## Accessibility Improvements
- Added a skip link on every page so keyboard users can jump directly to the main content.
- Added a descriptive `<title>` and a `<main>` landmark on each page.
- Labeled the `<nav>` landmark with `aria-label="Main navigation"` and marked the active page with `aria-current="page"`.
- Structured content with semantic headings, descriptive link text, and decorative symbols hidden from assistive technology.
- Added visible keyboard focus outlines and `prefers-reduced-motion` support for visitors who request less animation.
- Associated all four contact form inputs (full name, email address, topic, and message) with visible `<label>` elements.
- Grouped the contact form inputs inside a `<fieldset>` with a descriptive `<legend>`.
- Connected inline error messages to form inputs using `aria-invalid` and `aria-describedby`, along with an ARIA live region to announce submission feedback.

## WAVE Testing Results
All three live pages were tested using the WAVE browser extension and passed with **0 errors** and **0 contrast errors**.

| Page | WAVE Errors | Contrast Errors | Scan Date |
| :--- | :---: | :---: | :---: |
| `index.html` | 0 | 0 | 2026-11-14 |
| `discoveries.html` | 0 | 0 | 2026-11-14 |
| `contact.html` | 0 | 0 | 2026-11-14 |

## Color Palette and WCAG AA Contrast
All text and background color combinations (including hover and focus states) were verified using the WebAIM Contrast Checker and pass WCAG AA standards:
- **Main background:** `#070D1B`
- **Section background:** `#0D1830`
- **Card background:** `#111F3B` / `#172847`
- **Main text:** `#F4F7FF`
- **Muted text:** `#C5CEE0`
- **Teal accent:** `#62E0D0`
- **Gold accent:** `#F5C978`

## Gestalt Principles Intentionally Used
- **Proximity:** Discovery cards group related labels, headings, and descriptions closely together so visitors immediately see which information belongs to each discovery.
- **Similarity:** Cards share identical layout, typography, spacing, and label styling so visitors recognize them as parallel content items.
- **Consistency:** Navigation, color palette, and typography remain uniform across all three pages to make the site predictable and easy to navigate.

## Run Locally
Keep all project files in the same folder and open `index.html` in a web browser (an internet connection is required to load Google Fonts).

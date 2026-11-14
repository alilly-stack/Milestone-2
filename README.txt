# Exploring the Cosmos — Milestone 2 Accessibility and Visual Design

## Pages and files
- `index.html` — home page with an introduction and links to the other pages.
- `discoveries.html` — overview of major astronomy discoveries.
- `contact.html` — contact page with a four-field accessible form.
- `style.css` — shared color palette, typography, responsive layout, focus styles, and form styles.
- `form.js` — client-side validation with visible inline error messages; it does not send or store form submissions.

## Run the project locally
Keep all six files in the same folder and open `index.html` in a browser. Use the navigation to visit all three pages. An internet connection is needed for Google Fonts. The form is a front-end demonstration only and does not deliver messages to an inbox.

## Accessibility improvements
- Added a skip link on every page so keyboard users can jump directly to the main content.
- Added a descriptive page title and a main-content landmark on each page.
- Kept a labeled navigation landmark and marked the current page with `aria-current="page"`.
- Used semantic headings, descriptive link text, and decorative symbols hidden from assistive technology.
- Used high-contrast text colors, visible keyboard focus outlines, and responsive layouts.
- Added four visible, programmatically associated contact-form labels: full name, email address, topic, and message.
- Grouped the contact inputs in a `fieldset` with a descriptive `legend`.
- Added inline error text, `aria-invalid`, and `aria-describedby` relationships so errors are connected to fields.
- Added a live status message so form feedback can be announced to assistive technology.
- Added reduced-motion support for visitors who request less animation.

## Gestalt principles intentionally used
- **Proximity:** Discovery cards group related labels, headings, and descriptions so visitors can tell which information belongs together.
- **Similarity:** Cards share the same layout, typography, spacing, and label treatment so visitors can recognize that they serve the same purpose.
- **Consistency:** The same navigation, colors, and typography appear across all three pages to make the site predictable.

## Color palette and contrast
- Main background: `#070D1B`
- Section background: `#0D1830`
- Card background: `#111F3B` / `#172847`
- Main text: `#F4F7FF`
- Muted text: `#C5CEE0`
- Teal accent: `#62E0D0`
- Gold accent: `#F5C978`

Verify every actual foreground/background combination, including hover and focus states, with the WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/. Do not assume image overlays or browser-rendered states pass without checking.

## WAVE testing — final manual step
Run WAVE against the published URLs for all three pages. A passing result cannot be claimed until you run the browser tool on the live pages. Review Errors, Contrast Errors, and Alerts on each page. Alerts should be reviewed manually; not every alert is an error.

| Page | WAVE errors | Contrast errors | Scan date |
|---|---:|---:|---|
| `index.html` | 0 (per supplied screenshot) | 0 (per supplied screenshot) | 2026-11-13 |
| `discoveries.html` | 0 (per supplied screenshot) | 0 (per supplied screenshot) | 2026-11-13 |
| `contact.html` | 0 (per supplied screenshot) | 0 (per supplied screenshot) | 2026-11-13 |

The screenshots supplied for this project show zero WAVE errors and zero contrast errors on all three pages. Review any remaining alerts manually.

## Responsive design
The stylesheet includes breakpoints for mobile (480px and below), tablet (768px and below), and larger desktop screens (1200px and above). Test at 320px, 768px, and 1200px using browser developer tools.

## Publish with GitHub Pages
1. Upload/commit all six files to the `main` branch in the repository root.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)`, then save.
5. Wait for GitHub Pages to publish. The home page is `index.html`; the other pages are `discoveries.html` and `contact.html`.
6. Re-run WAVE after publishing if any page content or styling changed.

## Before submitting
- Confirm all three pages open and navigation links work.
- Run WAVE on all three published pages and fix every remaining error.
- Check text/background combinations with WebAIM Contrast Checker, including hover and focus states.
- Test the contact form with empty and invalid entries to confirm inline errors appear and focus moves to the first invalid field.
- Test keyboard navigation and layouts at 320px, 768px, and 1200px.
- Commit the final README changes so the instructor can see the fix documentation.

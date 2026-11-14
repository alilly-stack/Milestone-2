# Exploring the Cosmos — Milestone 2 Accessibility and Visual Design

## Pages and files
- `index.html` — home page with an introduction, discoveries preview, and space facts.
- `discoveries.html` — additional information about major astronomy discoveries.
- `contact.html` — contact page with a four-field accessible form.
- `style.css` — shared color palette, typography, responsive layout, focus styles, and form styles.
- `form.js` — client-side validation with visible inline error messages; it does not send or store form submissions.

## Run the project locally
Keep all five files in the same folder and open `index.html` in a browser. Use the navigation to visit all three pages. An internet connection is needed for the Google Fonts and remote space photograph. The form is a front-end demonstration only and does not deliver messages to an inbox.

## Accessibility fixes made
- Added a skip link on every page so keyboard users can jump directly to the main content.
- Added a clear page title and a single main-content landmark on each page.
- Kept a labeled navigation landmark and marked the current page with `aria-current="page"`.
- Added descriptive alternative text to the meaningful nebula photograph and hid decorative symbols from assistive technology.
- Increased the muted text color to `#C5CEE0` and strengthened decorative border contrast for better readability on the dark backgrounds.
- Used visible keyboard focus outlines and added a reduced-motion preference for visitors who request less animation.
- Added a contact form with four visible, programmatically associated labels: full name, email address, topic, and message.
- Grouped the contact inputs in a `fieldset` with a descriptive `legend`.
- Added inline error text, `aria-invalid`, and `aria-describedby` relationships so errors are connected to the fields; no JavaScript alert boxes are used.
- Added a live status message so form feedback can be announced to assistive technology.

## Gestalt principles intentionally used
- **Proximity:** Discovery cards and their related headings, descriptions, and category labels are placed together so visitors can tell which information belongs together.
- **Similarity:** Discovery cards share the same layout, typography, spacing, and label treatment so visitors can recognize that the cards serve the same purpose.
- **Consistency:** The same navigation, colors, and typography are repeated across all three pages to make the site predictable.

## Color palette and contrast
The site uses the same palette on all three pages:
- Main background: `#070D1B`
- Section background: `#0D1830`
- Card background: `#111F3B` / `#172847`
- Main text: `#F4F7FF`
- Muted text: `#C5CEE0`
- Teal accent: `#62E0D0`
- Gold accent: `#F5C978`

The selected foreground/background combinations were chosen to exceed WCAG AA minimums for normal text (4.5:1) where used as text. Before submission, verify the actual rendered combinations—including the hero overlay and any browser-rendered states—with the WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/ . Do not assume decorative or image-overlay colors pass without checking the final display.

## WAVE testing — required final manual step
WAVE must be run against the published URLs for all three pages. The files have been updated with common accessibility improvements, but a successful WAVE scan cannot be claimed until you run the browser tool on the live pages.

After publishing, open each page in Chrome and use the WAVE browser extension or enter its URL at https://wave.webaim.org/ . Review Errors, Contrast Errors, and Alerts on each page. Fix any remaining errors, then record the scan date and result here:

| Page | WAVE errors after final check | Scan date |
|---|---:|---|
| `index.html` | Fill in after running WAVE | Fill in |
| `discoveries.html` | Fill in after running WAVE | Fill in |
| `contact.html` | Fill in after running WAVE | Fill in |

Do not mark a page as passing until its own WAVE report shows zero errors. Review alerts manually; not every alert is an error.

## Responsive design
The stylesheet includes breakpoints for mobile (480px and below), tablet (768px and below), and larger desktop screens (1200px and above). Test at 320px, 768px, and 1200px using browser developer tools.

## Publish with GitHub Pages
1. Open the GitHub repository and upload/commit all updated files to the `main` branch.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)`, then save.
5. Wait for GitHub Pages to publish. The home page is `index.html`; the other pages are `discoveries.html` and `contact.html`.
6. Run WAVE on each published page and complete the table above.

## Before submitting
- Confirm all three pages open and their navigation links work.
- Run WAVE on all three published pages and fix every remaining error.
- Check every text/background combination with WebAIM Contrast Checker, including hover and focus states.
- Test the contact form with empty and invalid entries to confirm inline error messages appear and focus moves to the first invalid field.
- Test keyboard navigation and the layouts at 320px, 768px, and 1200px.
- Commit the final README changes so the instructor can see the fix documentation.

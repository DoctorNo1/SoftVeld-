# SoftVeld

Marketing website for SoftVeld — a software engineering firm specializing in
C#/.NET, ASP.NET Core, WPF desktop applications, and cloud infrastructure.

Built with plain **HTML, CSS, and JavaScript** — no frameworks, no build step.

## Pages

- `index.html` — Home
- `services.html` — Services
- `about.html` — About the company
- `contact.html` — Contact form

## Structure

- `css/style.css` — all styles (design tokens, components, responsive rules)
- `js/icons.js` — inline SVG icon set (extracted from Lucide, ISC license)
- `js/main.js` — mobile navigation, contact form handling, footer year

## Running locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

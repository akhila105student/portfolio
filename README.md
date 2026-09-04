# Akhila — Futuristic Developer Portfolio

A modern, responsive, and interactive personal portfolio website designed for a Computer Science Engineering student at CMR University, Bengaluru. Built with a dark futuristic aesthetic, glowing accents, glassmorphic cards, and interactive developer components.

---

## 🌟 Features

- **Futuristic Developer Aesthetic**: Deep obsidian blue background (`#060913`) paired with electric cyan (`#00f5ff`), vibrant purple (`#a855f7`), and soft emerald accents.
- **Interactive Code Window / Terminal**: Live simulated IDE in the Hero section featuring syntax-highlighted Python and JSON tabs, a "Run Simulation" execution button, and a "Copy Code" button.
- **Interactive Canvas Constellation**: Lightweight background particle network that gently drifts and reacts to cursor movement (respects `prefers-reduced-motion`).
- **Dynamic Sticky Navigation & Scrollspy**: Top header with blur glassmorphism, active section detection, smooth scrolling, and mobile hamburger drawer.
- **Core Technology Skills**: Categorized into *Programming Languages*, *Frontend*, *Backend*, and *Database* with official SVG icons and interactive 3D lift effects.
- **Academic Qualification Timeline**: Vertical glowing timeline showcasing B.Tech in CSE at CMR University, Bengaluru with a "Currently Pursuing" badge.
- **Featured Projects & Interactive Modals**:
  - **Hangman Game** (Python / Tkinter)
  - **AI Study Assistant**
  - Interactive "View Project" modal showing architecture highlights and placeholder links for GitHub repositories.
- **Verified Certifications**: Data Structures and Algorithms certification card by Simplilearn with verification placeholder.
- **Interactive Contact Section**: Clean contact form with client-side validation, loading spinner, status alerts, and direct contact card placeholders.
- **100% Responsive & Accessible**: Semantic HTML5, ARIA attributes, keyboard navigation support, and zero external npm build dependencies.

---

## 📁 Project Structure

```
akhila-portfolio/
├── index.html              # Main HTML5 entry point with semantic layout & SVG icons
├── README.md               # Documentation and customization guide
├── css/
│   ├── style.css           # Design tokens, layout grids, cards, components, and media queries
│   └── animations.css      # Keyframes, glow effects, cursor blinks, and reduced-motion rules
├── js/
│   ├── background.js       # Cyber-constellation canvas animation & mouse physics
│   ├── terminal.js         # Interactive code tabs switcher & live execution simulator
│   └── main.js             # Scrollspy, mobile drawer, project modals, form validation & toasts
└── assets/
    └── icons/              # Directory for custom graphics & SVG assets
```

---

## 🚀 Running Locally

### Option 1: Direct File Open
Simply double-click [`index.html`](file:///c:/Users/Akhila/OneDrive/Desktop/akhila%20portfolio/index.html) to open the website directly in any modern web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local HTTP Server (Recommended)
You can run a lightweight local web server using Python:

```bash
# Navigate to the project directory
cd "c:\Users\Akhila\OneDrive\Desktop\akhila portfolio"

# Start Python HTTP server on port 8000
python -m http.server 8000
```
Then visit **`http://localhost:8000`** in your browser.

---

## ✏️ How to Customize Your Links

All personal contact and repository links are marked with `data-placeholder` attributes in [`index.html`](file:///c:/Users/Akhila/OneDrive/Desktop/akhila%20portfolio/index.html). To replace them with your actual URLs:

1. **Email Address**:
   Search for `data-placeholder="Direct Email Address"` in `index.html` and replace `href="#"` with `href="mailto:yourname@example.com"`.
2. **GitHub Profile**:
   Search for `data-placeholder="GitHub Profile"` in `index.html` and replace `href="#"` with `href="https://github.com/yourusername"`.
3. **LinkedIn Profile**:
   Search for `data-placeholder="LinkedIn Profile"` in `index.html` and replace `href="#"` with `href="https://linkedin.com/in/yourusername"`.
4. **Project Repositories**:
   Search for `data-placeholder="Hangman GitHub Repository"` or `data-placeholder="AI Study Assistant GitHub Repository"` and paste your repository URLs.
5. **Simplilearn Certificate**:
   Search for `data-placeholder="Simplilearn DSA Certificate"` and paste your certificate verification URL.

---

## 🛡️ Content Accuracy Guarantee

This portfolio strictly includes verified information:
- **Name**: Akhila
- **Institution**: CMR University, Bengaluru
- **Degree**: Bachelor of Technology — Computer Science and Engineering (Currently Pursuing)
- **Skills**: C, Python, HTML, CSS, JavaScript, FastAPI, PostgreSQL
- **Projects**: Hangman Game, AI Study Assistant
- **Certification**: Data Structures and Algorithms Certification (Simplilearn)
- **Zero Fabricated Data**: No placeholder statistics, fake companies, or fabricated graduation years.

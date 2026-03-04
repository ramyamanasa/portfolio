# Ramya Amancherla — Portfolio

> Personal portfolio website showcasing my research, experience, and projects in AI and machine learning.

🌐 **Live:** [ramyaamancherla.vercel.app](https://ramyaamancherla.vercel.app)

---

## About

This site documents my work across clinical AI research, computer vision, large-scale data engineering, and open-source ML infrastructure. Built for speed, accessibility, and a clean reading experience.

---

## Features

- Dark/light mode toggle with smooth transitions
- Typing animation on hero
- Cursor spotlight effect
- 3D tilt cards on hover
- Magnetic button interactions
- Scroll reveal animations
- Grayscale to color photo on hover
- Active section highlighting in nav
- Glassmorphism card design
- RA monogram loader
- Custom 404 page
- Responsive across all screen sizes

---

## Tech Stack

- **Framework:** Vite + React
- **Styling:** CSS custom properties, no external UI library
- **Deployment:** Vercel
- **Version Control:** GitHub

---

## Running Locally

```bash
# Clone the repo
git clone https://github.com/ramyamanasa/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Building for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

---

## Project Structure

```
src/
  components/
    sections/       # Hero, About, Education, Research, Jobs, Currently, Contact
    Nav.jsx         # Navigation with active section tracking
    Social.jsx      # GitHub and LinkedIn sidebar
    Email.jsx       # Email sidebar
    Footer.jsx
  styles/
    global.css      # Design system and all global styles
  pages/
    NotFound.jsx    # Custom 404 page
  App.jsx           # Root component, theme and effects logic
  main.jsx
public/
  favicon.svg
  me.jpg
  resume.pdf
```

---

## Contact

**Ramya Manasa Amancherla**
- Email: ra3439@columbia.edu
- LinkedIn: [linkedin.com/in/ramya-amancherla](https://www.linkedin.com/in/ramya-amancherla/)
- GitHub: [github.com/ramyamanasa](https://github.com/ramyamanasa)

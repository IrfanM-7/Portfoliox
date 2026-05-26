# Syed Irfan - AI/ML Engineer Portfolio

A modern, professional portfolio website for an AI/ML engineering student built with React, Vite, TypeScript, and CSS.

## Features

- **Modern Dark Navy Design**: Professional AI/ML engineer aesthetic
- **Responsive Layout**: Two-panel design with fixed left sidebar and scrollable right content
- **Interactive Skills Filtering**: Filter skills by category (Frontend, Backend, AI, Database, Tools, Languages)
- **Project Showcase**: Display of key AI/ML projects with descriptions
- **Smooth Animations**: CSS-based animations and transitions
- **IntersectionObserver**: Active section tracking for smooth navigation
- **Contact Form**: Modern contact form for inquiries
- **Social Links**: LinkedIn, GitHub, Instagram, and professional profiles

## Tech Stack

- **React 18.2**
- **Vite 4.4**
- **TypeScript 5.2**
- **CSS3** (No frameworks like Tailwind or Bootstrap)
- **react-icons 4.11**

## Project Structure

```
src/
├── App.tsx          # Main React component
├── main.tsx         # Application entry point
└── styles.css       # All styling
public/              # Static assets
vite.config.ts       # Vite configuration
tsconfig.json        # TypeScript configuration
package.json         # Dependencies
index.html          # HTML entry point
```

## Installation & Setup

1. **Clone or navigate to the project directory**
   ```bash
   cd portfolioy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The portfolio will open at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

## Key Components

### Left Panel
- Fixed sidebar showing current section content
- Smooth fade and slide animations
- Shows contextual information based on active section

### Right Panel
- Scrollable main content area
- Contains all portfolio sections:
  - Home (Hero section)
  - Education
  - Skills (with category filtering)
  - Projects
  - Contact
  - Footer

### Navigation
- Side navigation icons for quick access to sections
- Scroll-to-top button
- IntersectionObserver tracking for active sections

## Customization

### Colors
Edit the CSS variables in `src/styles.css`:
```css
:root {
  --primary-navy: #0f1f3d;
  --primary-blue: #0d6efd;
  --white: #ffffff;
  --gray: #cccccc;
  --background: #f8f8f8;
}
```

### Content
Edit the data in `src/App.tsx`:
- Update `skills` array for skills section
- Update `projects` array for projects section
- Update `education` array for education section
- Modify contact information in the Contact section

### Images
Replace placeholder images in:
- Hero profile image: `.hero-image-placeholder`
- Project images: `.project-image-placeholder`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Design

The portfolio is fully responsive with breakpoints at:
- 1200px - Tablet horizontal
- 1024px - Tablet
- 768px - Mobile landscape
- 480px - Mobile portrait

## Performance

- Lightweight CSS (no frameworks)
- Optimized animations using CSS transitions
- IntersectionObserver for efficient section tracking
- No external font loading (system fonts)

## Future Enhancements

- Add actual project images
- Integrate email functionality for contact form
- Add dark mode toggle
- Add blog section
- Add certificate/achievement section

---

**Portfolio Owner**: Syed Irfan M  
**Email**: irfuijukas@gmail.com  
**Phone**: +91-8940742364  
**Location**: Tiruchirappalli, Tamil Nadu, India

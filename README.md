# Personal Website

A modern, interactive personal website built with React, Vite, and Node.js.

## Features

- **Three Main Pages:**
  - Tech Skills: Showcase of projects with images, summaries, and links
  - Guitar & Poetry: Coming soon
  - Basketball: Coming soon

- **Tech Skills Page Includes:**
  - Bio section with education profile
  - Three featured projects with interactive cards
  - Footer with GitHub link, email, and LinkedIn

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Technologies Used

- React 18
- Vite 5
- React Router DOM
- Modern CSS with animations and responsive design

## Project Structure

```
personal_website/
├── src/
│   ├── pages/
│   │   ├── TechSkills.jsx
│   │   ├── GuitarPoetry.jsx
│   │   ├── Basketball.jsx
│   │   └── PageStyles.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

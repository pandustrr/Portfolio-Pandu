# PortoPandu

Portfolio pribadi Pandu Satria — dibangun dengan Next.js 16, React 19, dan Tailwind CSS v4.

Live di: `http://localhost:3000`

---

## Tech Stack

| Layer | Tools |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19, Tailwind CSS v4 |
| Animasi | Framer Motion |
| 3D | Three.js, @react-three/fiber, @react-three/drei |
| Icons | Heroicons, Lucide React |
| Bahasa | TypeScript |

---

## Struktur Proyek

```
src/
├── app/
│   ├── layout.tsx       # Root layout, font & metadata global
│   ├── page.tsx         # Halaman utama (Home)
│   └── globals.css      # CSS global & design tokens
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Skills.tsx
│   ├── ProjectCard.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── SectionTitle.tsx
│   ├── BackgroundElements.tsx
│   ├── Lanyard.tsx      # Komponen 3D interaktif
│   └── SplashCursor.tsx # Efek cursor custom
├── constants/
│   └── index.ts         # Semua data konten (nav, proyek, skills, dll.)
└── context/
    ├── ThemeContext.tsx    # Dark/light mode
    └── LanguageContext.tsx # Multibahasa (ID / EN)
```


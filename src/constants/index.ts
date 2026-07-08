import { 
  CodeBracketIcon as Code,
  CommandLineIcon as Code2,
  CircleStackIcon as Database,
  Square3Stack3DIcon as Layout,
  DevicePhoneMobileIcon as Smartphone,
  ChatBubbleBottomCenterTextIcon as MessageSquare,
  TrophyIcon as Award,
  AcademicCapIcon as GraduationCap,
  MapPinIcon as MapPin,
  PhoneIcon as Phone,
  UserIcon as User,
  EnvelopeIcon as Mail,
  MagnifyingGlassIcon as Search,
  BookOpenIcon as BookOpen,
  BoltIcon as Zap,
  ClockIcon as Clock,
  BriefcaseIcon as Briefcase,
  RocketLaunchIcon as Rocket,
  LanguageIcon as Languages,
  SunIcon as Sun,
  MoonIcon as Moon
} from "@heroicons/react/24/outline";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const NAV_LINKS = [
  { name: { id: "Beranda", en: "Home" }, href: "#", icon: Rocket },
  { name: { id: "Tentang", en: "About" }, href: "#about", icon: User },
  { name: { id: "Keahlian", en: "Skills" }, href: "#skills", icon: Zap },
  { name: { id: "Pendidikan", en: "Education" }, href: "#education", icon: GraduationCap },
  { name: { id: "Proyek", en: "Projects" }, href: "#projects", icon: Code },
  { name: { id: "Kontak", en: "Contact" }, href: "#contact", icon: Phone },
];

export const HERO_CONTENT = {
  id: {
    name: "Pandu Satria",
    role: "Fullstack Developer",
    motto: "Menciptakan solusi digital yang bermakna, satu baris kode dalam satu waktu.",
    description: "Mahasiswa Informatika yang berdedikasi untuk membangun aplikasi web yang efisien, inovatif, dan berfokus pada pengalaman pengguna.",
    ctaPrimary: "Lihat Proyek",
    ctaSecondary: "Download CV",
  },
  en: {
    name: "Pandu Satria",
    role: "Fullstack Developer",
    motto: "Crafting meaningful digital solutions, one line of code at a time.",
    description: "Informatics student dedicated to building efficient, innovative, and user-centric web applications.",
    ctaPrimary: "View Projects",
    ctaSecondary: "Download CV",
  }
};

export const ABOUT_CONTENT = {
  id: {
    title: "Tentang Saya",
    description1: "Mahasiswa Informatika yang berfokus pada pengembangan sistem web dan pengolahan data. Berdedikasi untuk menciptakan solusi digital yang efisien dan inovatif.",
    description2: "Saya adalah mahasiswa aktif S1 Informatika di Universitas Jember dengan IPK 3.82/4.0. Memiliki minat yang kuat pada pemrograman fullstack dan pengembangan sistem berbasis kebutuhan pengguna. Terbiasa bekerja dalam tim, mengelola proyek secara tepat waktu, serta memiliki kemampuan problem solving yang kuat.",
  },
  en: {
    title: "About Me",
    description1: "Informatics student focused on web system development and data processing. Dedicated to creating efficient and innovative digital solutions.",
    description2: "I am an active undergraduate Informatics student at the University of Jember with a GPA of 3.82/4.0. Strong interest in fullstack programming and user-centric system development. Experienced in teamwork, timely project management, and possess strong problem-solving skills.",
  }
};

export const SKILLS = [
  {
    category: { id: "Pemrograman & Web Development", en: "Programming & Web Development" },
    icon: Layout,
    items: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "PHP", "Laravel", "React JS", "React Native", "C# (Basic)"],
  },
  {
    category: { id: "Basis Data & Integrasi", en: "Database & Integration" },
    icon: Database,
    items: ["MySQL", "Firebase", "Python (AI & Data)"],
  },
  {
    category: { id: "Desain Antarmuka", en: "UI/UX Design" },
    icon: Smartphone,
    items: ["Figma", "Sketch (Basic)"],
  },
  {
    category: { id: "Manajemen Proyek", en: "Project Management" },
    icon: Code2,
    items: ["Git", "GitHub", "Agile (Scrum)"],
  },
  {
    category: { id: "Soft Skills", en: "Soft Skills" },
    icon: MessageSquare,
    items: {
      id: ["Komunikasi", "Problem Solving", "Manajemen Waktu", "Adaptif Teknologi"],
      en: ["Communication", "Problem Solving", "Time Management", "Technological Adaptability"]
    },
  },
];

export const EDUCATION = [
  {
    year: "2023 - Present",
    institution: "Universitas Jember",
    degree: { id: "S1 Informatika", en: "B.S. in Computer Science" },
    score: "GPA: 3.82/4.0",
    details: {
      id: "Mata Kuliah Relevan: Algoritma dan Pemrograman I (A), Algoritma dan Pemrograman II (AB), Pemrograman Berorientasi Obyek (AB), Functional Programming (AB), Pengembangan Perangkat Lunak (A), Pemrograman Berbasis Website (A)",
      en: "Relevant Coursework: Algorithms & Programming I (A), Algorithms & Programming II (AB), Object-Oriented Programming (AB), Functional Programming (AB), Software Development (A), Web-Based Programming (A)"
    },
    icon: GraduationCap,
  }
];

export const CERTIFICATIONS = [
  {
    year: "2024",
    items: {
      id: [
        "Pemilihan Mahasiswa Berprestasi (PILMAPRES) – BEM Fakultas Ilmu Komputer, Universitas Jember",
        "Pelatihan Git & Hacktoberfest: UKM LAOS, Fakultas Ilmu Komputer, Universitas Jember",
        "Panitia PDD dalam kegiatan 3x3 Competition 2024 – UKM Bola Basket Universitas Jember"
      ],
      en: [
        "Outstanding Student Selection (PILMAPRES) – BEM Faculty of Computer Science, University of Jember",
        "Git & Hacktoberfest Training: UKM LAOS, Faculty of Computer Science, University of Jember",
        "Committee PDD for 3x3 Competition 2024 – Basketball Club University of Jember"
      ]
    }
  },
  {
    year: "2024",
    category: { id: "Lomba & Organisasi", en: "Competitions & Organizations" },
    items: {
      id: [
        "Peserta Informatic Competition (I-COM) – HMIF, Fakultas Ilmu Komputer, Universitas Jember",
        "Pengurus Kominfo – UKM Bola Basket, Universitas Jember",
        "Panitia PDD 3x3 Competition 2024 – UKM Bola Basket, Universitas Jember",
        "Panitia Pormaba 2024 - UKM Bola Basket, Universitas Jember",
        "Panitia Rektor Cup 2025 - UKM Bola Basket, Universitas Jember"
      ],
      en: [
        "Informatics Competition (I-COM) Participant – HMIF, Faculty of Computer Science, University of Jember",
        "Kominfo Officer – University Basketball Club, University of Jember",
        "Committee PDD 3x3 Competition 2024 – University Basketball Club, University of Jember",
        "Pormaba Committee 2024 - University Basketball Club, University of Jember",
        "Rector Cup 2025 Committee - University Basketball Club, University of Jember"
      ]
    }
  }
];

export const PROJECTS = [
  {
    title: { id: "Sistem Optimasi Produksi Budidaya Ikan Lele", en: "Catfish Production Optimization System" },
    period: "Feb 2025 - Jun 2025",
    description: {
      id: "Sistem web berbasis Laravel 11 dan Python untuk mengelola data Produksi budidaya ikan lele dengan integrasi metode AI ARIMA dan Fuzzy Logic.",
      en: "Web-based system using Laravel 11 and Python to manage catfish production data with AI ARIMA and Fuzzy Logic integration."
    },
    image: `${BASE}/project-placeholder.svg`,
    gallery: [`${BASE}/gallery-placeholder-1.svg`, `${BASE}/gallery-placeholder-2.svg`, `${BASE}/gallery-placeholder-3.svg`],
    status: { id: "Selesai", en: "Done" },
    tags: ["Laravel", "Python", "AI"],
    github: "#",
    demo: "#",
  },
  {
    title: { id: "Sistem Informasi Bimbingan Belajar", en: "Tutoring Information System" },
    period: "Feb 2025 - Jun 2025",
    description: {
      id: "Sistem informasi bimbel berbasis Laravel 11 dengan fitur multi-role (admin, guru, siswa) dan manajemen jadwal les.",
      en: "Bimbel information system based on Laravel 11 with multi-role features (admin, teacher, student) and schedule management."
    },
    image: `${BASE}/project-placeholder.svg`,
    gallery: [`${BASE}/gallery-placeholder-1.svg`, `${BASE}/gallery-placeholder-2.svg`, `${BASE}/gallery-placeholder-3.svg`],
    status: { id: "Selesai", en: "Done" },
    tags: ["Laravel", "MySQL", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "VROOM - Penyewaan Kendaraan",
    period: "Oct 2024 - Dec 2024",
    description: {
      id: "Aplikasi mobile penyewaan kendaraan menggunakan React Native dan Firebase dengan pendekatan Functional Programming.",
      en: "Vehicle rental mobile application using React Native and Firebase with a Functional Programming approach."
    },
    image: `${BASE}/project-placeholder.svg`,
    gallery: [`${BASE}/gallery-placeholder-1.svg`, `${BASE}/gallery-placeholder-2.svg`, `${BASE}/gallery-placeholder-3.svg`],
    status: { id: "Selesai", en: "Done" },
    tags: ["React Native", "Firebase", "JavaScript"],
    github: "#",
    demo: "#",
  },
  {
    title: { id: "KafeKasir – Aplikasi Kasir Sederhana", en: "KafeKasir – Simple Cashier App" },
    period: "Apr 2024 - Jun 2024",
    description: {
      id: "Aplikasi kasir sederhana berbasis C# untuk simulasi operasional kafe kecil dengan fitur transaksi lengkap.",
      en: "Simple cashier application based on C# for small cafe operational simulation with complete transaction features."
    },
    image: `${BASE}/project-placeholder.svg`,
    gallery: [`${BASE}/gallery-placeholder-1.svg`, `${BASE}/gallery-placeholder-2.svg`, `${BASE}/gallery-placeholder-3.svg`],
    status: { id: "Selesai", en: "Done" },
    tags: ["C#", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "GrapadiStrategix",
    period: "2025",
    description: {
      id: "Aplikasi web untuk manajemen proyek dan perencanaan tim dengan fitur kolaborasi real-time.",
      en: "Web application for project management and team planning with real-time collaboration features."
    },
    image: `${BASE}/project-placeholder.svg`,
    gallery: [`${BASE}/gallery-placeholder-1.svg`, `${BASE}/gallery-placeholder-2.svg`, `${BASE}/gallery-placeholder-3.svg`],
    status: { id: "Selesai", en: "Done" },
    tags: ["Laravel", "React JS", "MySQL", "Tailwind"],
    github: "#",
    demo: "#",
  },
];

export const CONTACT_INFO = [
  { name: { id: "Lokasi", en: "Location" }, icon: MapPin, value: "Jember, Indonesia", url: null },
  { name: "Email", icon: Mail, value: "pandusatria2807@gmail.com", url: "mailto:pandusatria2807@gmail.com" },
  { name: { id: "Telepon", en: "Phone" }, icon: Phone, value: "+62 812-3048-7469", url: "tel:+6281230487469" },
  { name: "LinkedIn", icon: User, value: "linkedin.com/in/pandusatria", url: "https://linkedin.com/in/pandusatria" },
];

export const UI_TEXT = {
  id: {
    viewProjects: "Lihat Kode",
    liveDemo: "Live Demo",
    source: "Sumber",
    experience: "Pendidikan & Pengalaman",
    education: "Pendidikan",
    certs: "Sertifikasi & Organisasi",
    at: "di",
    getInTouch: "Hubungi Saya",
    contactSubtitle: "Ada proyek atau sekadar ingin menyapa? Silakan hubungi saya!",
    formName: "Nama",
    formEmail: "Email",
    formMessage: "Pesan",
    formSend: "Kirim Pesan",
    footerCopyright: "Semua hak dilindungi.",
    viewDetail: "Lihat Detail",
    gallery: "Galeri Proyek",
    aboutProject: "Tentang Proyek",
    close: "Tutup"
  },
  en: {
    viewProjects: "View Code",
    liveDemo: "Live Demo",
    source: "Source",
    experience: "Education & Experience",
    education: "Education",
    certs: "Certifications & Organizations",
    at: "at",
    getInTouch: "Get In Touch",
    contactSubtitle: "Have a project in mind or just want to say hi? Feel free to reach out!",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    formSend: "Send Message",
    footerCopyright: "All rights reserved.",
    viewDetail: "View Detail",
    gallery: "Project Gallery",
    aboutProject: "About This Project",
    close: "Close"
  }
};

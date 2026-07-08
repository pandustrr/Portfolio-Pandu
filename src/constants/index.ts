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
    description: "Mahasiswa Informatika Semester 6 yang berfokus pada pemrograman fullstack, pengolahan data, dan pengembangan sistem berbasis kebutuhan pengguna.",
    ctaPrimary: "Lihat Proyek",
    ctaSecondary: "Download CV",
  },
  en: {
    name: "Pandu Satria",
    role: "Fullstack Developer",
    motto: "Crafting meaningful digital solutions, one line of code at a time.",
    description: "6th-semester Computer Science student focused on fullstack programming, data processing, and user-centric system development.",
    ctaPrimary: "View Projects",
    ctaSecondary: "Download CV",
  }
};

export const ABOUT_CONTENT = {
  id: {
    title: "Tentang Saya",
    description1: "Mahasiswa Informatika yang berfokus pada pemrograman fullstack, pengolahan data, dan pengembangan sistem berbasis kebutuhan pengguna.",
    description2: "Saya adalah mahasiswa aktif Semester 6 Informatika di Universitas Jember dengan IPK 3.66/4.0. Memiliki pengalaman dalam pengembangan aplikasi web menggunakan Laravel, JavaScript, serta integrasi Python untuk analisis data dan penerapan kecerdasan buatan seperti prediksi dan klasifikasi. Selain proyek akademik, saya telah mengerjakan beberapa proyek freelance berupa sistem informasi, platform bisnis, dan website organisasi yang digunakan langsung oleh mitra dan institusi untuk digitalisasi proses bisnis.",
  },
  en: {
    title: "About Me",
    description1: "Computer Science student focused on fullstack programming, data processing, and user-centric system development.",
    description2: "I am an active 6th-semester Computer Science student at the University of Jember with a GPA of 3.66/4.0. Experienced in web application development using Laravel, JavaScript, and Python integration for data analysis and AI implementation such as prediction and classification. In addition to academic projects, I have worked on several freelance projects including information systems, business platforms, and organizational websites used directly by partners and institutions.",
  }
};

export const SKILLS = [
  {
    category: { id: "Pemrograman & Web Development", en: "Programming & Web Development" },
    icon: Layout,
    items: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "PHP", "Laravel", "React JS", "Inertia JS", "React Native", "C# (Basic)"],
  },
  {
    category: { id: "Basis Data & Integrasi", en: "Database & Integration" },
    icon: Database,
    items: ["MySQL", "Firebase", "Python (Data Analysis & AI)", "C# (Basic)"],
  },
  {
    category: { id: "Desain Antarmuka", en: "UI/UX Design" },
    icon: Smartphone,
    items: ["Figma", "Sketch (Basic)"],
  },
  {
    category: { id: "Manajemen Proyek", en: "Project Management" },
    icon: Code2,
    items: ["Git & GitHub", "Agile (Scrum/Sprint)"],
  },
  {
    category: { id: "Soft Skills", en: "Soft Skills" },
    icon: MessageSquare,
    items: {
      id: ["Komunikasi Efektif", "Problem Solving", "Manajemen Waktu", "Adaptif Teknologi Baru"],
      en: ["Effective Communication", "Problem Solving", "Time Management", "Adaptable to New Tech"]
    },
  },
];

export const EDUCATION = [
  {
    year: "2023 - Present",
    institution: "Universitas Jember",
    degree: { id: "S1 Informatika", en: "B.S. in Computer Science" },
    score: "GPA: 3.66/4.0",
    details: {
      id: "Mata Kuliah Relevan: Algoritma dan Pemrograman I (A), Algoritma dan Pemrograman II (AB), Pemrograman Berorientasi Obyek (AB), Functional Programming (AB), Pengembangan Perangkat Lunak (A), Pemrograman Berbasis Website (A), Deep Learning (AB), Data Science (AB)",
      en: "Relevant Coursework: Algorithms & Programming I (A), Algorithms & Programming II (AB), Object-Oriented Programming (AB), Functional Programming (AB), Software Development (A), Web-Based Programming (A), Deep Learning (AB), Data Science (AB)"
    },
    icon: GraduationCap,
  }
];

export const CERTIFICATIONS = [
  {
    year: "2024",
    category: { id: "Sertifikasi", en: "Certifications" },
    items: {
      id: [
        "Sertifikat Pemilihan Mahasiswa Berprestasi (PILMAPRES) – BEM Fakultas Ilmu Komputer, Universitas Jember",
        "Pelatihan Git & Hacktoberfest: Pemanfaatan Layanan Git untuk Memonitor Proyek Pemrograman Secara Bersama – UKM LAOS, Fakultas Ilmu Komputer, Universitas Jember"
      ],
      en: [
        "Outstanding Student Selection (PILMAPRES) Certificate – BEM Faculty of Computer Science, University of Jember",
        "Git & Hacktoberfest Training: Utilizing Git Services to Monitor Programming Projects Together – UKM LAOS, Faculty of Computer Science, University of Jember"
      ]
    }
  },
  {
    year: "2024",
    category: { id: "Organisasi", en: "Organizations" },
    items: {
      id: [
        "Pengurus Kominfo UKM Bola Basket (Jan 2024 - Sep 2024) - Mengelola media sosial Instagram & TikTok, merancang 10+ konten visual (Canva, CapCut, Figma), dan berkolaborasi antar divisi.",
        "Peserta Informatic Competition (I-COM) – HMIF, Fakultas Ilmu Komputer, Universitas Jember"
      ],
      en: [
        "Kominfo Officer at Basketball Club (Jan 2024 - Sep 2024) - Managed Instagram & TikTok accounts, designed 10+ visual contents (Canva, CapCut, Figma), and collaborated across divisions.",
        "Informatics Competition (I-COM) Participant – HMIF, Faculty of Computer Science, University of Jember"
      ]
    }
  }
];

export const PROJECTS = [
  // --- FREELANCE PROJECTS ---
  {
    title: { 
      id: "YPDS Al-Hikmah – Portal Berita Terintegrasi & Sistem Informasi Sekolah", 
      en: "YPDS Al-Hikmah – Integrated News Portal & School Information System" 
    },
    category: "freelance",
    period: "2026",
    description: {
      id: "Mengembangkan portal digital pendidikan terintegrasi untuk mengelola profil sekolah multi-lembaga (SD, SMP, SMK, PAUD, TPQ) dan sistem Pendaftaran Peserta Didik Baru (PPDB). Dilengkapi modul berita dinamis dengan sticky post, video multimedia, view counter real-time, dan FAQ interaktif.",
      en: "Developed an integrated educational digital portal to manage multi-institution school profiles (Elementary, Junior High, Vocational, Preschool, Quranic School) and a New Student Admission (PPDB) system. Features a dynamic news module with sticky posts, video support, real-time views, and interactive FAQs."
    },
    image: `${BASE}/project-placeholder.svg`,
    gallery: [`${BASE}/gallery-placeholder-1.svg`, `${BASE}/gallery-placeholder-2.svg`, `${BASE}/gallery-placeholder-3.svg`],
    status: { id: "Freelance", en: "Freelance" },
    tags: ["Laravel", "Inertia JS", "React JS", "MySQL", "Tailwind CSS"],
    github: "https://github.com/pandustrr",
    demo: "http://ypdsalhikmahjbr.com/",
  },
  {
    title: { 
      id: "Nurul Ali Jember – Sistem Informasi Pondok Pesantren & PPDB Online", 
      en: "Nurul Ali Jember – Boarding School Info & Student Admission (PPDB) Platform" 
    },
    category: "freelance",
    period: "2026",
    description: {
      id: "Sistem informasi pondok pesantren dan PPDB online multi-gelombang. Fitur utama meliputi Dynamic Form Builder berbasis JSON dengan arsitektur EAV database, autentikasi multi-role (4 Guard), kalkulasi biaya otomatis, bulk ID Santri kustom, Recycle Bin data, serta export/import data via Excel & PDF.",
      en: "An online multi-wave student admission platform for a boarding school. Key features include a JSON-based Dynamic Form Builder with EAV database, multi-role authentication (4 separate guards), automatic fee calculations, bulk custom Student ID generation, Recycle Bin, and Excel/PDF export/import."
    },
    image: `${BASE}/project-placeholder.svg`,
    gallery: [`${BASE}/gallery-placeholder-1.svg`, `${BASE}/gallery-placeholder-2.svg`, `${BASE}/gallery-placeholder-3.svg`],
    status: { id: "Freelance", en: "Freelance" },
    tags: ["Laravel", "Inertia JS", "React JS", "MySQL", "Tailwind CSS"],
    github: "https://github.com/pandustrr",
    demo: "https://nurulalijember.id/",
  },
  {
    title: { 
      id: "Master Cigars & Coffee – Platform E-Commerce & Kemitraan B2B", 
      en: "Master Cigars & Coffee – E-Commerce & B2B Partnership Platform" 
    },
    category: "freelance",
    period: "2026",
    description: {
      id: "Platform digital e-commerce dan kemitraan B2B untuk katalog produk cerutu & kopi premium serta peluang investasi. Mengimplementasikan modul transaksi multi-jalur, pelacakan logistik real-time berbasis kode unik, serta dashboard admin untuk monitoring stok dan statistik pengunjung unik berbasis IP.",
      en: "E-commerce and B2B partnership platform for premium cigars and coffee. Features multi-channel transactions (retail, packages, point corners), real-time logistics tracking via unique codes, and a detailed admin analytics dashboard for inventory and IP-based unique visitor tracking."
    },
    image: `${BASE}/project-placeholder.svg`,
    gallery: [`${BASE}/gallery-placeholder-1.svg`, `${BASE}/gallery-placeholder-2.svg`, `${BASE}/gallery-placeholder-3.svg`],
    status: { id: "Freelance", en: "Freelance" },
    tags: ["Laravel", "Inertia JS", "React JS", "MySQL", "Tailwind CSS"],
    github: "https://github.com/pandustrr",
    demo: "https://mastercigarsandcoffee.com/",
  },
  {
    title: { 
      id: "Sugoi 8 – Platform Pemesanan Tiket Event & Registrasi Kompetisi", 
      en: "Sugoi 8 – Event Ticketing & Competition Submission Platform" 
    },
    category: "freelance",
    period: "2026",
    description: {
      id: "Platform manajemen event untuk pemesanan tiket pertunjukan dan registrasi kompetisi online secara real-time. Mengintegrasikan Google Drive API untuk automated submission, check-in pengunjung dengan QR Code Scanner, sistem anti-scalping berbasis NIK, serta dashboard analitik penjualan dan lalu lintas web.",
      en: "Real-time event management platform for ticketing and online competition registration. Integrates Google Drive API for automated file submissions, QR Code Scanner check-ins, an NIK-based anti-scalping mechanism (limit of 1 ticket per ID), and a detailed admin sales and traffic analytics dashboard."
    },
    image: `${BASE}/project-placeholder.svg`,
    gallery: [`${BASE}/gallery-placeholder-1.svg`, `${BASE}/gallery-placeholder-2.svg`, `${BASE}/gallery-placeholder-3.svg`],
    status: { id: "Freelance", en: "Freelance" },
    tags: ["Laravel", "Inertia JS", "React JS", "MySQL", "Tailwind CSS"],
    github: "https://github.com/pandustrr",
    demo: "https://sugoi8management.com/",
  },
  {
    title: { 
      id: "AFSTUDIO – Platform Arsip Karya & Interaksi Klien Fotografi", 
      en: "AFSTUDIO – Artistic Photography & Client Archive Platform" 
    },
    category: "freelance",
    period: "2026",
    description: {
      id: "Platform fotografi digital untuk manajemen arsip karya dan interaksi eksklusif dengan klien. Dilengkapi dengan sistem secure client access berbasis UID, interactive photo selector agar klien memilih foto secara mandiri untuk proses editing, dan pengelolaan otomatis kuota paket booking.",
      en: "Digital photography platform for work archives and client interaction. Features a UID-based secure client access system, an interactive photo selector allowing clients to select photos for editing, and automated quota management tailored to booking packages."
    },
    image: `${BASE}/project-placeholder.svg`,
    gallery: [`${BASE}/gallery-placeholder-1.svg`, `${BASE}/gallery-placeholder-2.svg`, `${BASE}/gallery-placeholder-3.svg`],
    status: { id: "Freelance", en: "Freelance" },
    tags: ["Laravel", "Inertia JS", "React JS", "MySQL", "Tailwind CSS"],
    github: "https://github.com/pandustrr",
    demo: "http://afstudio.my.id/",
  },
  {
    title: { 
      id: "Grapadi Strategix – Platform Perencanaan Bisnis & Manajemen Keuangan", 
      en: "Grapadi Strategix – Business Planning & Financial Management Platform" 
    },
    category: "freelance",
    period: "2026",
    description: {
      id: "Platform digital untuk perencanaan bisnis dan manajemen keuangan bagi pelaku usaha. Dilengkapi dengan proyeksi keuangan, visualisasi data interaktif, serta integrasi performa tinggi antara backend Laravel dan frontend React JS.",
      en: "A digital business planning and financial management platform for entrepreneurs. Features financial projections, interactive data visualization, and a high-performance integration between a Laravel backend and a React JS frontend."
    },
    image: `${BASE}/project-placeholder.svg`,
    gallery: [`${BASE}/gallery-placeholder-1.svg`, `${BASE}/gallery-placeholder-2.svg`, `${BASE}/gallery-placeholder-3.svg`],
    status: { id: "Freelance", en: "Freelance" },
    tags: ["Laravel", "React JS", "MySQL", "Tailwind CSS"],
    github: "https://github.com/pandustrr",
    demo: "https://strategix.grapadikonsultan.co.id/",
  },
  {
    title: { 
      id: "HMRPM UNEJ – Sistem Informasi Organisasi Himpunan", 
      en: "HMRPM UNEJ – Association Information System" 
    },
    category: "freelance",
    period: "2026",
    description: {
      id: "Sistem informasi organisasi sebagai pusat data pengurus, koordinasi divisi, dan dokumentasi kepengurusan Himpunan. Berfungsi sebagai media informasi publik dan manajemen internal dengan arsitektur Laravel, React JS, dan Inertia JS.",
      en: "An organization information system serving as a member database, division coordinator, and management documentation hub. Serves as a public information channel and internal manager powered by Laravel, React JS, and Inertia JS."
    },
    image: `${BASE}/project-placeholder.svg`,
    gallery: [`${BASE}/gallery-placeholder-1.svg`, `${BASE}/gallery-placeholder-2.svg`, `${BASE}/gallery-placeholder-3.svg`],
    status: { id: "Freelance", en: "Freelance" },
    tags: ["Laravel", "React JS", "Inertia JS", "MySQL", "Tailwind CSS"],
    github: "https://github.com/pandustrr",
    demo: "https://hmrpmunej.id",
  },
  {
    title: { 
      id: "MAHAPENA – Website Profil Perusahaan & E-Commerce", 
      en: "MAHAPENA – Company Profile Website & E-Commerce" 
    },
    category: "freelance",
    period: "2025",
    description: {
      id: "Mengembangkan website organisasi sebagai media informasi, promosi, blog, portofolio, dan penjualan merchandise dengan fitur manajemen konten (CMS) admin untuk pengelolaan data organisasi secara mandiri.",
      en: "Developed an organization website as a portal for information, promotion, blogs, portfolios, and merchandise sales, complete with a self-managed content management system (CMS) for administrators."
    },
    image: `${BASE}/project-placeholder.svg`,
    gallery: [`${BASE}/gallery-placeholder-1.svg`, `${BASE}/gallery-placeholder-2.svg`, `${BASE}/gallery-placeholder-3.svg`],
    status: { id: "Freelance", en: "Freelance" },
    tags: ["Laravel 11", "React JS", "MySQL", "Tailwind CSS"],
    github: "https://github.com/pandustrr",
    demo: "https://mahapena.feb.unej.ac.id",
  },
  {
    title: { 
      id: "Allimna Buku – Platform Penjualan Buku Online", 
      en: "Allimna Buku – Online Book Store Platform" 
    },
    category: "freelance",
    period: "2025",
    description: {
      id: "Membangun sistem penjualan buku online untuk pencarian, pembelian, dan pengelolaan data buku. Dilengkapi dengan antarmuka yang responsif dan sistem dashboard admin untuk manajemen produk serta transaksi.",
      en: "Built an online bookstore system for catalog browsing, purchasing, and managing book inventories. Features a fully responsive user interface and an admin dashboard to handle products and sales transactions."
    },
    image: `${BASE}/project-placeholder.svg`,
    gallery: [`${BASE}/gallery-placeholder-1.svg`, `${BASE}/gallery-placeholder-2.svg`, `${BASE}/gallery-placeholder-3.svg`],
    status: { id: "Freelance", en: "Freelance" },
    tags: ["Laravel", "MySQL", "Tailwind CSS"],
    github: "https://github.com/pandustrr",
    demo: "https://allimna.my.id",
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
    close: "Tutup",
    allProjects: "Semua",
    freelanceProjects: "Freelance",
    academicProjects: "Akademik"
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
    close: "Close",
    allProjects: "All",
    freelanceProjects: "Freelance",
    academicProjects: "Academic"
  }
};


// ── PERSONAL INFO ─────────────────────────────────────────
const INFO = {
  name:       "Lalit Rana",
  tagline:    "// final-year cs student & full-stack developer",
  description:"Building full-stack and AI-integrated applications with Java, Spring Boot, ReactJS, and modern web technologies. Passionate about clean APIs, scalable systems, and solving real problems with code.",
  // Typed rotating titles in hero
  titles: [
    "Java Full Stack Developer",
    "Spring Boot Engineer",
    "ReactJS Developer",
    "REST API Builder",
    "AI Integrations Dev"
  ],
  // Hero orb tech words
  orbTech: ["Java", "Spring Boot", "ReactJS", "REST APIs", "MySQL", "Git", "Gemini AI", "Llama 3"],
  email:    "ranalalit288@gmail.com",
  phone:    "+91-7078812156",
  github:   "https://github.com/LALITRANA3",
  linkedin: "https://www.linkedin.com/in/lalit-rana-22b17129a/",
  leetcode: "https://leetcode.com/ranalalit288",
};

// ── STATS (About section) ─────────────────────────────────
// { value: number, suffix: string, label: string }
const STATS = [
  { value: 200,  suffix: "+", label: "DSA Problems Solved" },
  { value: 3,    suffix: "",  label: "Internships Completed" },
  { value: 7.87, suffix: "",  label: "CGPA / 10" },
  { value: 7,   suffix: "+", label: "API Endpoints Built" },
];

// ── ABOUT TEXT ────────────────────────────────────────────
const ABOUT_PARAGRAPHS = [
  "I'm a final-year B.Tech Computer Science student at Galgotias University with a CGPA of 7.87/10. I build things for the web — from AI-powered study platforms to task management APIs.",
  "My stack spans the full spectrum: Java & Spring Boot on the backend, ReactJS & Tailwind on the frontend, MySQL & H2 for data, and modern AI APIs (Google Gemini, Groq/Llama 3) for intelligent features.",
  "I've completed 3 internships across Java Full Stack and Web Development domains and solved 200+ DSA problems to keep my problem-solving sharp.",
];

// ── SKILLS ───────────────────────────────────────────────
// To add a new category: { category: "Name", tags: ["tag1", "tag2"] }
const SKILLS = [
  {
    category: "Languages",
    tags: ["Java", "JavaScript", "SQL", "Python"],
  },
  {
    category: "Frontend",
    tags: ["ReactJS", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Backend",
    tags: ["Spring Boot", "Spring Security", "Spring Data JPA", "REST APIs", "JDBC", "JWT"],
  },
  {
    category: "Databases",
    tags: ["MySQL", "H2 Database"],
  },
  {
    category: "AI & Integrations",
    tags: ["Google Gemini API", "Groq API", "Llama 3", "Prompt Engineering"],
  },
  {
    category: "Tools & Concepts",
    tags: ["Git", "GitHub", "VS Code", "IntelliJ", "OOPs", "DBMS", "OS", "CN", "DSA"],
  },
];

// ── PROJECTS ─────────────────────────────────────────────
// To add a project: copy one block and fill in the fields.
// githubUrl: set to "#" if no link yet.
const PROJECTS = [
  {
    title:     "AI StudyHub",
    desc:      "A full-stack AI-powered student learning platform with MCQ generation, flashcards, and learning roadmaps. Integrated multiple AI APIs for intelligent study assistance.",
    tags:      ["ReactJS", "Spring Boot", "Spring Security", "JWT", "MySQL", "Gemini API", "Groq / Llama 3", "Tailwind"],
    githubUrl: "https://github.com/LALITRANA3/ai-studyhub",
  },
  {
    title:     "Task Manager API",
    desc:      "A robust backend task management system with full CRUD operations. Designed 5+ REST API endpoints and validated using Postman for production readiness.",
    tags:      ["Java", "Spring Boot", "Spring Data JPA", "H2 Database", "REST API", "Postman"],
    githubUrl: "https://github.com/LALITRANA3/work-organizer",
  },
  {
    title:     "Mini CodePen",
    desc:      "A browser-based online code editor with dedicated HTML, CSS, and JS editors. Features real-time code rendering and instant preview via DOM manipulation — no page refresh needed.",
    tags:      ["HTML", "CSS", "JavaScript", "DOM Manipulation", "Live Preview"],
    githubUrl: "https://github.com/LALITRANA3/Mini-CodePen",
  },
  {
    title:     "PomodoroPro",
    desc:      "A web-based productivity timer using the Pomodoro technique. Features customizable work/break sessions, sound alerts, animated progress bar, and automatic session tracking.",
    tags:      ["HTML", "CSS", "JavaScript", "Timer Logic", "Progress Animation", "Session Tracking"],
    githubUrl: "https://github.com/LALITRANA3/FocusFlow",
  },
  {
    title:     "Drawing App",
    desc:      "An interactive freehand drawing application built on HTML5 Canvas. Supports color picker, adjustable brush size, and clear canvas — all in a clean, responsive UI.",
    tags:      ["HTML5", "CSS3", "JavaScript", "Canvas API", "Responsive Design"],
    githubUrl: "https://github.com/LALITRANA3/drawing-app",
  },
  {
    title:     "Responsive Book Store",
    desc:      "A fully responsive book store website with dual sticky header, bookshelf slider, featured books, parallax newsletter, testimonials, deals section, and blog — all touch-friendly.",
    tags:      ["HTML5", "CSS3", "JavaScript", "Swiper.js", "CSS Grid", "Flexbox", "Parallax"],
    githubUrl: "https://github.com/LALITRANA3/online_book_store_website",
  },
];

// ── EXPERIENCE (Timeline) ─────────────────────────────────
// To add: { period, role, company, points: [] }
const EXPERIENCE = [
  {
    period:  "Jul 2025 – Oct 2025",
    role:    "Java Full Stack Developer Intern (Virtual)",
    company: "TalentNext (Wipro)",
    points:  [
      "Applied Java, Spring Boot, JDBC, MySQL, HTML, CSS, JavaScript, and REST APIs across 10+ hands-on assignments.",
      "Constructed backend modules, database workflows, and API integrations while performing testing and debugging activities.",
    ],
  },
  {
    period:  "Apr 2026 – May 2026",
    role:    "Web Development Intern",
    company: "CodTech IT Solutions",
    points:  [
      "Created responsive web applications using HTML, CSS, JavaScript, and Bootstrap across 3+ project-based assignments.",
      "Implemented interactive UI components and optimized webpage responsiveness for desktop and mobile devices.",
    ],
  },
  {
    period:  "Nov 2024 – Dec 2024",
    role:    "Web Development Intern",
    company: "Cognifyz Technologies",
    points:  [
      "Produced responsive web pages using HTML, CSS, and JavaScript for internship assignments.",
      "Resolved 10+ frontend issues related to styling, layout alignment, and user interactions across web interfaces.",
    ],
  },
];

// ── CERTIFICATIONS ────────────────────────────────────────
// To add: { icon, name, issuer, year }
const CERTIFICATIONS = [
  {
    icon:   "🏆",
    name:   "Wipro TalentNext Java Full Stack Training Program",
    issuer: "Wipro / TalentNext",
    year:   "2025",
  },
  {
    icon:   "🌐",
    name:   "Web Development Certification",
    issuer: "Cognifyz Technologies",
    year:   "2024",
  },
  {
    icon:   "☕",
    name:   "Java Programming Certification",
    issuer: "Oracle Academy",
    year:   "2024",
  },
];

// ── ACHIEVEMENTS ──────────────────────────────────────────
// To add: { icon, text }
const ACHIEVEMENTS = [
  { icon: "⚡", text: "Solved 200+ DSA problems across competitive coding platforms" },
  { icon: "🎓", text: "Completed 3 internships in Java Full Stack & Web Development" },
  { icon: "🤖", text: "Built AI-integrated full-stack platform with Gemini & Llama 3 APIs" },
  { icon: "🔌", text: "Designed and exposed 7+ REST API endpoints across projects" },
];

// ── EDUCATION ─────────────────────────────────────────────
// To add: { level, degree, school, score, year }
const EDUCATION = [
  {
    level:  "B.Tech",
    degree: "Computer Science & Engineering",
    school: "Galgotias University, Greater Noida",
    score:  "CGPA: 7.87 / 10",
    year:   "2022 – 2026",
  },
  {
    level:  "Class XII",
    degree: "Senior Secondary",
    school: "U.P. Board",
    score:  "Percentage: 70%",
    year:   "2022",
  },
  {
    level:  "Class X",
    degree: "Secondary",
    school: "U.P. Board",
    score:  "Percentage: 83%",
    year:   "2020",
  },
];

/**
 * Central portfolio data for Yash Raj — generated from GitHub profile (https://github.com/yash-raj-01).
 * Every fact on the site reflects Yash's real projects, skills, education, and repositories.
 */
export const profile = {
    fullName: 'Yash Raj',
    displayName: 'Yash Raj',
    firstName: 'YASH',
    seriesTag: 'THE SERIES',
    /** Fictional studio card shown at the very start of the opening sequence. */
    originalLabel: 'A YASH RAJ ORIGINAL',
    role: 'Full-Stack Developer & CS Student',
    badge: 'CS·DEV',
    tagline: ['Full-Stack Developer', 'Computer Science', 'React & Node.js'],
    intro: 'A Computer Science student at Newton School of Technology and full-stack developer passionate about building high-performance web applications, scalable platforms, and interactive digital experiences with React, Node.js, TypeScript, and modern web architectures.',
    location: 'Pune, Maharashtra, India',
    email: 'goluyash8826@gmail.com',
    links: {
        linkedin: 'https://www.linkedin.com/in/yash-raj-23b921358/',
        github: 'https://github.com/yash-raj-01',
    },
    resumePdf: '/assets/Yash_Raj_Resume.pdf',
    portrait: {
        src: '/assets/portrait-720.webp',
        srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
        alt: 'Portrait of Yash Raj',
    },
    interests: ['System Architecture', 'Cloud Infrastructure', 'Distributed Systems & Web Performance'],
};
export const education = [
    {
        school: 'Newton School of Technology',
        place: 'Pune, India',
        degree: 'Bachelor of Technology — Computer Science',
        period: '2025 – Present',
        score: 'Class of 2029',
    },
    {
        school: 'Senior Secondary Education',
        place: 'India',
        degree: 'Computer Science & Science Stream',
        period: '2023 – 2025',
        score: 'Graduated',
    },
];
export const experience = [
    {
        company: 'Open Source & Product Engineering',
        role: 'Full-Stack Developer & Builder',
        place: 'Pune, India',
        period: '2025 – Present',
        points: [
            'Authored and maintained 27+ public repositories spanning full-stack web applications, interactive web tools, and monorepos.',
            'Architected SETU: a production monorepo connecting a React 19 client with an Express REST API, Prisma ORM, and PostgreSQL persistence.',
            'Engineered responsive web applications and developer platforms deployed to production on Vercel with high performance benchmarks.',
        ],
    },
];
export const projects = [
    {
        id: 'setuu',
        title: 'SETU Platform',
        year: '2026',
        genre: 'Full-Stack • Monorepo • Community',
        logline: 'A modern full-stack community platform for a student organization with domain-based recruitment, event management, and Prisma + PostgreSQL.',
        stack: ['React 19', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Express.js', 'Prisma ORM', 'PostgreSQL'],
        build: [
            'Architected a production-ready monorepo combining a high-performance React 19 frontend with an Express API backend and Prisma ORM persistence.',
            'Engineered multi-domain recruitment application workflows, interactive event promotion, and resilient database fallback logic for zero-downtime development.',
            'Crafted animated, responsive landing pages and dynamic form state handling deployed to Vercel.',
        ],
        features: [
            'Monorepo architecture with client and server',
            'Domain-based recruitment application flow',
            'Event registration and attendee management',
            'Prisma ORM with PostgreSQL persistence',
            'In-memory fallback for resilient local development',
            'Framer Motion smooth micro-animations',
        ],
        metrics: [
            { value: 'React 19', label: 'latest frontend core' },
            { value: '100%', label: 'type-safe Prisma models' },
            { value: 'Multi-domain', label: 'recruitment workflows' },
            { value: 'Monorepo', label: 'unified codebase' },
        ],
        github: 'https://github.com/yash-raj-01/setuu',
        live: 'https://setuu-fawn.vercel.app',
        palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
        motif: 'flow',
    },
    {
        id: 'book-finder',
        title: 'Open Library Book Finder',
        year: '2026',
        genre: 'API Integration • Frontend • UI/UX',
        logline: 'An interactive single-page book explorer and reading tracker integrated with the Open Library public REST API.',
        stack: ['JavaScript', 'Open Library API', 'CSS3', 'LocalStorage'],
        build: [
            'Engineered a dynamic single-page web application communicating with the Open Library API with debounced queries, cover image fallbacks, and detailed metadata parsing.',
            'Implemented client-side reading shelf tracking, progress persistence via LocalStorage, and responsive search filtering.',
        ],
        features: [
            'Real-time Open Library REST API querying',
            'Personal reading shelf & progress management',
            'LocalStorage persistence with zero backend requirements',
            'Responsive single-page interface with cover gallery',
        ],
        metrics: [
            { value: 'Millions', label: 'books searchable' },
            { value: 'Instant', label: 'client-side state' },
            { value: 'REST API', label: 'real-time integration' },
        ],
        github: 'https://github.com/yash-raj-01/Open-Library-Book-Finder',
        palette: { from: '#1a0624', via: '#5b1d84', to: '#080310', accent: '#c084fc' },
        motif: 'flow',
    },
    {
        id: 'cultstory',
        title: 'CultStory',
        year: '2025',
        genre: 'Web Platform • Storytelling • Community',
        logline: 'A collaborative storytelling and blog platform where developers and creators share stories, experiences, and technical content.',
        stack: ['JavaScript', 'HTML5', 'CSS3', 'Node.js'],
        build: [
            'Built a community-driven storytelling platform enabling developers to publish articles, share experiences, and engage with readers.',
            'Designed a clean, readable content layout with responsive typography and fast client-side navigation for seamless reading experiences.',
            'Implemented dynamic content rendering and a structured publishing workflow for both technical and creative writing.',
        ],
        features: [
            'Community-driven blog and storytelling platform',
            'Article publishing and reading workflow',
            'Responsive, reader-friendly content layout',
            'Developer-focused storytelling community',
        ],
        metrics: [
            { value: 'Community', label: 'collaborative platform' },
            { value: 'Fast', label: 'content rendering' },
            { value: 'Open', label: 'developer stories' },
        ],
        github: 'https://github.com/hartej46/CultStory',
        palette: { from: '#0b162c', via: '#1e3a66', to: '#050a14', accent: '#38bdf8' },
        motif: 'shield',
    },
    {
        id: 'music',
        title: 'Music — Terminal Player',
        year: '2025',
        genre: 'CLI • Node.js • Terminal App',
        logline: 'A feature-rich terminal music player built with Node.js — play, queue, and control music entirely from the command line.',
        stack: ['Node.js', 'JavaScript', 'CLI', 'Terminal UI'],
        build: [
            'Engineered a fully interactive terminal music player using Node.js with keyboard-driven playback controls and live progress display.',
            'Implemented track queuing, shuffle, repeat modes, and real-time song metadata rendering directly in the terminal interface.',
            'Designed a lightweight, zero-dependency-minded CLI that works on any system with Node.js installed.',
        ],
        features: [
            'Keyboard-driven playback control from the terminal',
            'Track queue management with shuffle & repeat',
            'Live song progress and metadata display',
            'Pure Node.js — no heavy framework dependencies',
        ],
        metrics: [
            { value: 'Node.js', label: 'runtime powering it all' },
            { value: 'CLI', label: 'fully terminal-native' },
            { value: 'Zero UI', label: 'zero browser needed' },
        ],
        github: 'https://github.com/yash-raj-01/music',
        palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
        motif: 'tenants',
    },
];
export const achievements = [
    {
        id: 'pull-shark',
        title: 'Pull Shark Badge',
        org: 'GitHub Achievements',
        detail: 'Awarded on GitHub for opening merged pull requests and contributing to open-source workflows.',
        laurel: 'GitHub Recognition',
        link: 'https://github.com/yash-raj-01?tab=achievements',
    },
    {
        id: 'yolo',
        title: 'YOLO Badge',
        org: 'GitHub Achievements',
        detail: 'Awarded on GitHub for rapid production deployments and agile code shipping without review friction.',
        laurel: 'GitHub Recognition',
        link: 'https://github.com/yash-raj-01?tab=achievements',
    },
    {
        id: 'fullstack-monorepo',
        title: 'SETU Platform Lead',
        org: 'Student Community',
        detail: 'Architected and shipped a full-stack monorepo with React 19, Express, Prisma ORM, and PostgreSQL.',
        laurel: 'Full-Stack Project',
        link: 'https://github.com/yash-raj-01/setuu',
    },
    {
        id: 'public-repos',
        title: '27+ Public Repositories',
        org: 'GitHub Open Source',
        detail: 'Consistent development across full-stack applications, interactive prototypes, and web utilities.',
        laurel: 'Open Source',
        link: 'https://github.com/yash-raj-01?tab=repositories',
    },
    {
        id: 'nst-cs',
        title: 'B.Tech in Computer Science',
        org: 'Newton School of Technology',
        detail: 'Undergraduate student in Computer Science focusing on web technologies, algorithms, and system design.',
        laurel: 'Class of 2029',
    },
];
export const certifications = [
    { issuer: 'GitHub', name: 'Pull Shark Achievement', link: 'https://github.com/yash-raj-01?tab=achievements' },
    { issuer: 'GitHub', name: 'YOLO Achievement', link: 'https://github.com/yash-raj-01?tab=achievements' },
    { issuer: 'Newton School', name: 'B.Tech in Computer Science Program', link: 'https://github.com/yash-raj-01' },
    { issuer: 'Vercel', name: 'Production Deployments (SETU, DailyDevs, RPS, Calculator)', link: 'https://github.com/yash-raj-01' },
    { issuer: 'Open Library', name: 'Public REST API Client Architecture', link: 'https://github.com/yash-raj-01/Open-Library-Book-Finder' },
    { issuer: 'Next.js', name: 'Modern React & App Router Engineering', link: 'https://github.com/yash-raj-01/bugatti-showcase' },
];
export const skillCategories = [
    {
        id: 'languages',
        title: 'Languages',
        subtitle: 'JavaScript & TypeScript primary',
        skills: [
            { name: 'JavaScript', mono: 'Js', note: 'Primary' },
            { name: 'TypeScript', mono: 'Ts' },
            { name: 'Python', mono: 'Py' },
            { name: 'HTML5', mono: 'Ht' },
            { name: 'CSS3', mono: 'Cs' },
            { name: 'SQL', mono: 'Sq' },
        ],
    },
    {
        id: 'frontend',
        title: 'Frontend',
        subtitle: 'Interfaces & interactive experiences',
        skills: [
            { name: 'React 19', mono: 'Re' },
            { name: 'Next.js', mono: 'Nx' },
            { name: 'Vite', mono: 'Vt' },
            { name: 'Tailwind CSS', mono: 'Tw' },
            { name: 'Framer Motion', mono: 'Fm' },
        ],
    },
    {
        id: 'backend',
        title: 'Backend',
        subtitle: 'Server logic & architectures',
        skills: [
            { name: 'Node.js', mono: 'No' },
            { name: 'Express.js', mono: 'Ex' },
            { name: 'REST APIs', mono: 'Ap' },
            { name: 'Prisma Client', mono: 'Pc' },
            { name: 'Middleware', mono: 'Mw' },
        ],
    },
    {
        id: 'databases',
        title: 'Databases & ORM',
        subtitle: 'Persistence & schemas',
        skills: [
            { name: 'PostgreSQL', mono: 'Pg' },
            { name: 'Prisma ORM', mono: 'Pr' },
            { name: 'MySQL', mono: 'My' },
            { name: 'LocalStorage', mono: 'Ls' },
        ],
    },
    {
        id: 'infra',
        title: 'Infra & Tools',
        subtitle: 'Shipping & development tools',
        skills: [
            { name: 'Git', mono: 'Gi' },
            { name: 'GitHub', mono: 'Gh' },
            { name: 'VS Code', mono: 'Vc' },
            { name: 'Vercel', mono: 'Vr' },
            { name: 'Postman', mono: 'Pm' },
        ],
    },
    {
        id: 'fundamentals',
        title: 'CS Fundamentals',
        subtitle: 'The foundations',
        skills: [
            { name: 'Data Structures', mono: 'Ds' },
            { name: 'Algorithms', mono: 'Al' },
            { name: 'OOP', mono: 'Oo' },
            { name: 'Web Architecture', mono: 'Wa' },
            { name: 'Network Protocols', mono: 'Np' },
        ],
    },
    {
        id: 'interests',
        title: 'Interests',
        subtitle: 'Currently exploring',
        skills: [
            { name: 'System Architecture', mono: 'Sa' },
            { name: 'Cloud Infrastructure', mono: 'Ci' },
            { name: 'Distributed Systems', mono: 'Ds' },
        ],
    },
];
export const skillEvidence = {
    JavaScript: ['SETU', 'DailyDevs', 'Open Library Book Finder'],
    TypeScript: ['bugatti-showcase', 'budget_trip'],
    'React 19': ['SETU', 'athena', 'Rabbit', 'bugatti-showcase'],
    'Next.js': ['bugatti-showcase'],
    'Node.js': ['SETU', 'lost-found'],
    'Express.js': ['SETU', 'lost-found'],
    PostgreSQL: ['SETU (Prisma integration)'],
    'Prisma ORM': ['SETU monorepo database integration'],
    'Git / GitHub': ['Pull Shark badge', 'YOLO badge', '27 repositories'],
    Python: ['git_practice', 'CS coursework'],
    'Tailwind CSS': ['SETU', 'bugatti-showcase'],
    'Framer Motion': ['SETU', 'Portfolio Series'],
    'REST APIs': ['SETU', 'Open Library Book Finder'],
};
const crimson = { from: '#061428', via: '#034175', to: '#05070e', accent: '#38bdf8' };
const amber = { from: '#1c1003', via: '#6b3c06', to: '#05070e', accent: '#ffb547' };
const ocean = { from: '#04121f', via: '#0f4c6e', to: '#05070e', accent: '#4cc9ff' };
const violet = { from: '#120822', via: '#3d1a6e', to: '#05070e', accent: '#b98bff' };
const jade = { from: '#03150f', via: '#0d5a40', to: '#05070e', accent: '#46e3a8' };
export const seasons = [
    {
        number: 1,
        title: 'The Foundation',
        period: '2024 – 2025',
        synopsis: 'Stepping into Computer Science — mastering web fundamentals, Git version control, and interactive JavaScript applications.',
        episodes: [
            {
                code: 'S01 E01',
                title: 'The First Push',
                description: 'First steps in modern web development — semantic HTML, CSS layout architectures, and Git version control.',
                tags: ['HTML5', 'CSS3', 'Git'],
                runtime: '2024',
                palette: amber,
            },
            {
                code: 'S01 E02',
                title: 'Logic & Loops',
                description: 'Building interactive web apps from scratch: Rock Paper Scissors, Calculator, and TodoList applications.',
                tags: ['JavaScript', 'DOM', 'Interactive'],
                runtime: 'Interactive apps',
                palette: crimson,
            },
            {
                code: 'S01 E03',
                title: 'Connecting to the World',
                description: 'Open Library Book Finder — consuming asynchronous REST APIs, handling UI states, and persisting reading progress in LocalStorage.',
                tags: ['REST API', 'Async JS', 'LocalStorage'],
                runtime: 'Public API',
                palette: violet,
            },
        ],
    },
    {
        number: 2,
        title: 'Enter: Newton School of Technology',
        period: '2025 – Present',
        synopsis: 'B.Tech in Computer Science at Newton School of Technology, Pune — deep-diving into software systems and core algorithms.',
        episodes: [
            {
                code: 'S02 E01',
                title: 'The CS Undergrad',
                description: 'Enrolling in B.Tech Computer Science at Newton School of Technology — focusing on algorithm complexity, data structures, and computer architecture.',
                tags: ['B.Tech CS', 'NST', 'Class of 2029'],
                runtime: 'Aug 2025 – Present',
                palette: ocean,
            },
            {
                code: 'S02 E02',
                title: 'The Open Source Grind',
                description: 'Scaling to 27+ public repositories on GitHub and earning the Pull Shark and YOLO achievements.',
                tags: ['GitHub', '27 Repos', 'Pull Shark', 'YOLO'],
                runtime: 'Continuous shipping',
                palette: jade,
            },
        ],
    },
    {
        number: 3,
        title: 'Full-Stack Monorepos',
        period: '2025 – 2026',
        synopsis: 'Building modern full-stack platforms — React 19, Express, Prisma ORM, and PostgreSQL.',
        episodes: [
            {
                code: 'S03 E01',
                title: 'The Monorepo',
                description: 'SETU — a full-stack community platform with multi-domain recruitment applications and Prisma PostgreSQL persistence.',
                tags: ['React 19', 'Express', 'Prisma', 'PostgreSQL'],
                runtime: 'Full-Stack Monorepo',
                palette: amber,
            },
            {
                code: 'S03 E02',
                title: 'The Community Hub',
                description: 'Daily Developers — creating a global developer collaboration hub deployed to Vercel for sharing projects.',
                tags: ['Vercel', 'Community', 'Showcase'],
                runtime: 'Global showcase',
                palette: ocean,
            },
        ],
    },
    {
        number: 4,
        title: 'Modern Frontend Engineering',
        period: '2026',
        synopsis: 'Crafting high-performance visual experiences with Next.js, TypeScript, and fluid animations.',
        episodes: [
            {
                code: 'S04 E01',
                title: 'The Visual Showcase',
                description: 'Bugatti Showcase — Next.js, TypeScript, and fluid Framer Motion interactions crafted for ultra-smooth rendering.',
                tags: ['Next.js', 'TypeScript', 'Framer Motion'],
                runtime: 'High-Performance',
                palette: crimson,
            },
            {
                code: 'S04 E02',
                title: 'Interactive Web Suite',
                description: 'Developing responsive web apps and prototypes exploring modern UI paradigms and client-side reactive state.',
                tags: ['React 19', 'Next.js', 'Tailwind CSS'],
                runtime: 'Web Suite',
                palette: jade,
            },
        ],
    },
    {
        number: 5,
        title: "What's Next",
        period: 'Now streaming',
        synopsis: 'Scaling modern distributed systems, cloud architecture, and high-impact software.',
        episodes: [
            {
                code: 'S05 E01',
                title: 'The Next Level',
                description: 'Deep-diving into System Architecture, Cloud Infrastructure, and Distributed Systems.',
                tags: ['System Architecture', 'Distributed Systems', 'Cloud'],
                runtime: 'In production',
                palette: ocean,
            },
        ],
    },
];
export const topPicks = [
    { label: 'Full-Stack Monorepo', title: 'SETU', detail: 'React 19 + Express + Prisma + PostgreSQL', palette: amber },
    { label: 'Book Explorer', title: 'Open Library Finder', detail: 'REST API + LocalStorage + Vanilla JS', palette: violet },
    { label: 'Storytelling Platform', title: 'CultStory', detail: 'Community blog & developer stories', palette: ocean },
    { label: 'Terminal App', title: 'Music Player', detail: 'Node.js CLI music player with queue & shuffle', palette: jade },
    { label: 'University', title: 'Newton School', detail: 'B.Tech in Computer Science (2029)', palette: violet },
    { label: 'Open Source', title: '27+ Repositories', detail: 'Active builder & contributor on GitHub', palette: jade },
    { label: 'GitHub Badge', title: 'Pull Shark', detail: 'Earned for collaborative PR workflows', palette: ocean },
    { label: 'GitHub Badge', title: 'YOLO', detail: 'Recognized for agile production shipping', palette: crimson },
    { label: 'Backend Stack', title: 'Node.js & Express', detail: 'REST APIs, CLI tools & server-side logic', palette: jade },
    { label: 'Location', title: 'Pune, India', detail: 'Building modern software for the web', palette: violet },
];
export const introSlides = [
    {
        kicker: 'Education',
        title: 'B.Tech · Computer Science',
        lines: ['Newton School of Technology, Pune', 'Undergraduate in Computer Science'],
        chips: ['Class of 2029', 'CS Student'],
    },
    {
        kicker: 'Stack',
        title: 'React & Node.js first.',
        lines: ['React 19, Next.js, Vite, TypeScript', 'Node.js, Express, Prisma ORM, PostgreSQL'],
        chips: ['React 19', 'Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'TypeScript'],
    },
    {
        kicker: 'Architecture',
        title: 'Full-Stack & CLI Projects',
        lines: ['SETU — full-stack student community monorepo', 'Open Library Book Finder — REST API integration', 'Music — terminal player built with Node.js'],
    },
    {
        kicker: 'Open Source',
        title: '27+ Repositories',
        lines: ['Active GitHub builder & contributor', 'GitHub Pull Shark & YOLO recognition'],
    },
    {
        kicker: 'Current mission',
        title: 'Now exploring',
        lines: ['System Architecture · Cloud Infrastructure · Distributed Systems'],
    },
];
export const viewerProfiles = [
    {
        id: 'yash',
        name: 'Yash Raj',
        blurb: 'The full series, in order',
        color: '#0284c7',
        order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
    },
    {
        id: 'recruiter',
        name: 'Recruiter',
        blurb: 'Projects, skills & GitHub first',
        color: '#4cc9ff',
        order: ['originals', 'skills', 'moments', 'story', 'about', 'journey', 'picks'],
    },
    {
        id: 'developer',
        name: 'Developer',
        blurb: 'Projects, stack & GitHub first',
        color: '#46e3a8',
        order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
    },
    {
        id: 'creative',
        name: 'Creative',
        blurb: 'The story arc & highlights first',
        color: '#ffb547',
        order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
    },
];
export const sectionMeta = {
    about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & journey', palette: violet },
    journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
    originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
    picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from GitHub & projects', palette: jade },
    skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
    moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Highlights`, palette: crimson },
    story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume & Credentials', palette: violet },
};

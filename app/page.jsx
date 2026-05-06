'use client';

import { useEffect, useMemo, useState } from 'react';
import { defaultBlogPosts } from './blog/blogData';

const profile = {
  name: 'K.G. Ravindu Ashan Dhananjaya',
  shortName: 'Ravindu Ashan',
  role: 'Associate Software Engineer | Full-Stack Developer',
  location: 'Sri Lanka',
  email: 'ravinduashan66@gmail.com',
  phone: '0715532717 / 0772410748',
  github: 'https://github.com/ravindu4403',
  linkedin: 'https://www.linkedin.com/in/ravindu-ashan-3b77b61b3',
  headline:
    'Associate Software Engineer building real business systems with Laravel, Next.js, React, Java, MySQL, C#, and C++.',
  summary:
    'I am an Associate Software Engineer with 1 year of hands-on company experience at PSD / People Solutions Development. I completed HNDIT at SLIATE Badulla and build practical systems such as POS platforms, e-commerce websites, LMS solutions, inventory modules, distribution workflows, admin panels, and responsive business applications using Laravel, PHP, MySQL, JavaScript, React, Next.js, Java, C#, and C++.',
};

const navItems = ['About', 'Experience', 'Projects', 'Skills', 'Process', 'Education', 'Blog', 'Contact'];

const stats = [
  { value: '1+', label: 'Year Company Experience', note: 'Associate Software Engineer' },
  { value: '12+', label: 'Practical Projects', note: 'POS, e-commerce, LMS, mobile, and web systems' },
  { value: '11+', label: 'Core Technologies', note: 'Laravel, Next.js, React, Java, C#, C++' },
  { value: 'HNDIT', label: 'Completed Academic Work', note: 'SLIATE Badulla — Graduation pending' },
];

const categories = ['All', 'Laravel', 'POS', 'E-commerce', 'Mobile', 'Java', 'C#', 'C++', 'Games', 'Business Systems'];

const projects = [
  {
    title: 'Expo Graphic E-commerce System',
    type: 'Laravel E-commerce Platform',
    category: 'E-commerce',
    filters: ['Laravel', 'E-commerce', 'Business Systems'],
    accent: 'Bookstore + POS Sync',
    status: 'Client Business System',
    description:
      'A Laravel e-commerce platform for a books and stationery business with product/category management, admin and manager workflows, customer ordering, checkout, coupons, banners, responsive UI, and one-way POS product sync workflow.',
    tech: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Responsive UI'],
    highlights: ['POS API sync workflow', 'Draft-to-publish product flow', 'Cart and checkout', 'Coupon center'],
    impact: 'Designed around a real retail workflow: existing POS items can update the website, new POS items stay as drafts, and admin/manager users publish them after adding required website details.',
    liveUrl: '',
    repoUrl: 'https://github.com/ravindu4403/expo-graphic-ecommerce',
  },
  {
    title: 'PSD Cloud POS System',
    type: 'POS & Inventory Platform',
    category: 'POS',
    filters: ['Laravel', 'POS', 'Business Systems'],
    accent: 'Inventory + Billing',
    status: 'Company / Business System',
    description:
      'A Laravel-based POS platform with billing, inventory, purchase orders, GRN receive flow, stock transfer, barcode/QR management, reports, print layouts, and role-based cashier/manager/admin workflows.',
    tech: ['Laravel', 'MySQL', 'JavaScript', 'PHP', 'Reports'],
    highlights: ['Billing workflow', 'Stock control', 'PO to GRN', 'Barcode manager'],
    impact: 'Built around daily shop operations: cashier billing, inventory control, stock movement, purchasing, reports, and printable business documents.',
    liveUrl: '',
    repoUrl: 'https://github.com/ravindu4403/psd-cloud-pos-system',
  },
  {
    title: 'Royal Foods / V&S Distribution System',
    type: 'Distribution Management System',
    category: 'Laravel',
    filters: ['Laravel', 'POS', 'Business Systems'],
    accent: 'Credit + Route Planning',
    status: 'Real Agency Workflow',
    description:
      'A tablet-friendly Laravel distribution system for Royal Foods agency operations, including products, stock, cash sales, credit sales, due balances, partial payments, collections, shop profiles, route planning, invoices, and reports.',
    tech: ['Laravel', 'MySQL', 'PWA UI', 'PHP', 'Print'],
    highlights: ['Credit sales', 'Collections', 'Delivery routes', 'Printable invoices'],
    impact: 'Focused on real distributor workflows where salesmen need fast billing, shop-wise outstanding balances, payment collection tracking, route planning, and printable invoices.',
    liveUrl: 'https://vandssonsroyal.gamer.gd/login?i=2',
    repoUrl: 'https://github.com/ravindu4403/royal-foods-distribution-system',
  },
  {
    title: 'Viduni Investment System',
    type: 'Finance / Loan Management System',
    category: 'Laravel',
    filters: ['Laravel', 'Business Systems'],
    accent: 'Loans + Customer Records',
    status: 'Business Application',
    description:
      'A finance/loan management project for maintaining customer records, loan details, payment schedules, paid amounts, due balances, and admin-side management screens.',
    tech: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Admin Panel'],
    highlights: ['Customer records', 'Loan workflow', 'Payment tracking', 'Admin dashboard'],
    impact: 'Shows how I structure financial records, customer data, payment tracking, and admin workflows into a clean database-driven application.',
    liveUrl: 'https://loan-frontend-agraab8f2-ravindu4403s-projects.vercel.app',
    repoUrl: 'https://github.com/ravindu4403/viduni-loan-management-frontend',
  },
  {
    title: 'Nirmal Phone Shop E-commerce Website',
    type: 'Online Store',
    category: 'E-commerce',
    filters: ['E-commerce', 'Business Systems'],
    accent: 'Product Catalog',
    status: 'Small Business Store',
    description:
      'An e-commerce website for Nirmal Phone Shop with mobile phone product listings, product details, customer ordering flow, and business-friendly product presentation.',
    tech: ['PHP/Laravel', 'MySQL', 'HTML', 'CSS'],
    highlights: ['Product catalog', 'Order flow', 'Admin-ready structure'],
    impact: 'Focused on helping a small phone shop present products clearly online and support a simple customer ordering journey.',
    liveUrl: 'https://nirmalmobile.lk/',
    repoUrl: 'https://github.com/ravindu4403/nirmal-mobile-ecommerce',
  },
  {
    title: 'Lanka Medical System',
    type: 'Medical Service Web System',
    category: 'Laravel',
    filters: ['Laravel', 'Business Systems'],
    accent: 'Service Workflow',
    status: 'Healthcare Web System',
    description:
      'A medical-service web system focused on organizing service information, admin-side records, user-friendly workflows, and responsive screens for healthcare-related operations.',
    tech: ['Laravel/PHP', 'MySQL', 'JavaScript', 'Admin UI'],
    highlights: ['Service workflows', 'Admin modules', 'Responsive UI'],
    impact: 'Shows practical web-system thinking for service-based organizations that need clean records, admin management, and simple user workflows.',
    liveUrl: 'https://lankamedical.lk/',
    repoUrl: 'https://github.com/ravindu4403/lanka-medical-website',
  },
  {
    title: 'Learning Management System',
    type: 'LMS Platform',
    category: 'Laravel',
    filters: ['Laravel', 'Business Systems'],
    accent: 'Education Platform',
    status: 'Education System',
    description:
      'A Learning Management System project with user management, course/content workflows, admin dashboard functions, and structured education-related data handling.',
    tech: ['PHP/Laravel', 'MySQL', 'HTML', 'CSS'],
    highlights: ['Course modules', 'User management', 'Admin dashboard'],
    impact: 'Demonstrates how I organize education platform features, user roles, content structures, and admin responsibilities.',
    liveUrl: 'https://lms-dun-nine.vercel.app',
    repoUrl: 'https://github.com/ravindu4403/learning-management-system',
  },
  {
    title: 'Smart Attendance System',
    type: 'Attendance Management System',
    category: 'Business Systems',
    filters: ['Business Systems'],
    accent: 'Attendance + Records',
    status: 'Web Application',
    description:
      'A smart attendance web project for recording attendance data, managing users, and presenting structured daily records through a simple interface.',
    tech: ['JavaScript', 'HTML', 'CSS', 'Database'],
    highlights: ['Attendance records', 'User workflow', 'Simple dashboard'],
    impact: 'Demonstrates daily record management, workflow automation, and the ability to keep data clear for users.',
    liveUrl: 'https://smart-attendance-mx9dm4k84-ravindu4403s-projects.vercel.app',
    repoUrl: 'https://github.com/ravindu4403/smart-attendance-system',
  },
  {
    title: 'React Native Video Call App',
    type: 'Mobile App',
    category: 'Mobile',
    filters: ['Mobile'],
    accent: 'Expo + Video UI',
    status: 'Mobile App Prototype',
    description:
      'A React Native / Expo mobile app with custom splash screen, tab navigation, profile UI, call screen UI, and video call integration work using Daily.co/WebView.',
    tech: ['React Native', 'Expo', 'JavaScript', 'Daily.co'],
    highlights: ['Mobile UI', 'Video call screen', 'Splash animation'],
    impact: 'Shows mobile UI development, app navigation planning, splash animation work, and video-call feature integration experience.',
    liveUrl: '',
    repoUrl: '',
  },
  {
    title: 'Java + MySQL POS / Food Ordering System',
    type: 'Desktop Business Application',
    category: 'Java',
    filters: ['Java', 'POS', 'Business Systems'],
    accent: 'Desktop POS',
    status: 'Desktop Application',
    description:
      'A Java + MySQL desktop POS / food ordering system with login, product management, billing, orders, customers, inventory, reports, printable bills, and JDBC database integration.',
    tech: ['Java', 'Swing', 'MySQL', 'JDBC'],
    highlights: ['Desktop POS', 'Printable bill', 'Reports', 'Inventory'],
    impact: 'Shows desktop application development fundamentals, database connectivity, billing logic, report handling, and printable invoice workflows.',
    liveUrl: '',
    repoUrl: '',
  },
  {
    title: 'C# Two-Player Battle Game Simulator',
    type: 'C# OOP Game Project',
    category: 'C#',
    filters: ['C#', 'Games'],
    accent: 'OOP + Game Logic',
    status: 'Academic / Practice Project',
    description:
      'A C# two-player battle game simulator built to practice object-oriented programming, character classes, player actions, health logic, turns, and game-flow control.',
    tech: ['C#', '.NET', 'OOP', 'Game Logic', 'Console/App UI'],
    highlights: ['Player vs player logic', 'Character actions', 'Health and score handling', 'OOP structure'],
    impact: 'Shows programming fundamentals, class-based design, conditions, methods, and the ability to convert rules into working software logic.',
    liveUrl: '',
    repoUrl: '',
  },
  {
    title: 'C++ Console Game & Problem Solving Practice',
    type: 'C++ Fundamentals Project',
    category: 'C++',
    filters: ['C++', 'Games'],
    accent: 'Logic + Algorithms',
    status: 'Practice Project',
    description:
      'C++ console programming practice focused on menu-driven programs, simple game logic, loops, arrays, functions, OOP basics, and problem-solving exercises.',
    tech: ['C++', 'Console', 'Algorithms', 'Functions', 'OOP Basics'],
    highlights: ['Menu-driven flow', 'Loop and condition logic', 'Function-based structure', 'Problem solving'],
    impact: 'Highlights programming fundamentals beyond frameworks and supports interview preparation in logic, loops, functions, and problem solving.',
    liveUrl: '',
    repoUrl: '',
  },
  {
    title: 'SPELLZZ Company Website',
    type: 'Creative Company Website',
    category: 'Business Systems',
    filters: ['Business Systems'],
    accent: 'Branding + Animations',
    status: 'Creative Web Project',
    description:
      'A creative company website project with modern sections, brand-focused content, animated page interactions, project presentation, and a polished responsive layout.',
    tech: ['React', 'JavaScript', 'CSS', 'Animations', 'Responsive UI'],
    highlights: ['Creative branding', 'Animated sections', 'Responsive layout', 'Project presentation'],
    impact: 'Shows my interest in building websites that feel professional, memorable, animated, and brand-focused instead of only basic static pages.',
    liveUrl: '',
    repoUrl: 'https://github.com/ravindu4403/spellzz-company-website',
  },
];

const skillGroups = [
  {
    title: 'Frontend Engineering',
    icon: '◈',
    items: ['Next.js', 'React', 'React Native', 'JavaScript', 'HTML5', 'CSS3', 'Responsive UI', 'Animations'],
  },
  {
    title: 'Backend Development',
    icon: '◆',
    items: ['Laravel', 'PHP', 'Java', 'C#', 'C++', 'REST APIs', 'Authentication', 'Admin Panels', 'Business Logic'],
  },
  {
    title: 'Database & Systems',
    icon: '●',
    items: ['MySQL', 'MariaDB', 'SQL Queries', 'Database Design', 'Migrations', 'Reports', 'Stock Workflows'],
  },
  {
    title: 'Programming Fundamentals',
    icon: '⚙',
    items: ['OOP', 'Game Logic', 'Data Structures Basics', 'Algorithms Basics', 'Debugging', 'Clean Code', 'Problem Solving'],
  },
  {
    title: 'Tools & Deployment',
    icon: '✦',
    items: ['Git', 'GitHub', 'Vercel', 'XAMPP', 'WAMP', 'NetBeans', 'VS Code', 'Hosting QA'],
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Understand the workflow',
    text: 'I start by breaking the business problem into users, screens, data, and daily operations.',
  },
  {
    step: '02',
    title: 'Design the database and UI',
    text: 'I plan tables, relationships, admin panels, responsive screens, and the main user journey.',
  },
  {
    step: '03',
    title: 'Build features step by step',
    text: 'I develop modules clearly, test each workflow, and improve based on real feedback.',
  },
  {
    step: '04',
    title: 'Polish and prepare for release',
    text: 'I focus on speed, mobile view, validation, printable outputs, bug fixing, and deployment readiness.',
  },
];

const education = [
  {
    title: 'Higher National Diploma in Information Technology',
    institute: 'SLIATE Badulla',
    meta: 'Completed academic work — Graduation pending',
  },
  {
    title: 'Diploma in Information & Communication Technology',
    institute: 'IMBS Green Campus',
    meta: 'SLQF Level 3 — Awarded in 2024',
  },
  {
    title: 'G.C.E. Advanced Level — Commerce Stream',
    institute: 'Sri Lanka',
    meta: 'Business Studies A, Economics B, Accounting S, General English C, Common General Test 44',
  },
  {
    title: 'G.C.E. Ordinary Level',
    institute: 'Sri Lanka',
    meta: 'Sinhala A, ICT A, Mathematics B, Buddhism B, Tamil B, History B, Art B, English C, Science C',
  },
];

const terminalLines = [
  'developer.name = "K.G. Ravindu Ashan Dhananjaya";',
  'experience = "1 year Associate Software Engineer";',
  'stack = ["Laravel", "Next.js", "React", "MySQL", "Java", "C#", "C++"];',
  'goal = "build reliable business software with clean UI";',
];

function SectionHeading({ kicker, title, text }) {
  return (
    <div className="section-heading reveal-item">
      <p className="section-kicker">{kicker}</p>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}


function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="project-modal" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close project details">
          ×
        </button>
        <span className="project-type">{project.type}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="modal-grid">
          <div>
            <h4>Tech Stack</h4>
            <div className="chip-wrap">
              {project.tech.map((tech) => (
                <span className="chip" key={tech}>{tech}</span>
              ))}
            </div>
          </div>
          <div>
            <h4>Main Highlights</h4>
            <ul>
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="impact-box">
          <strong>Real-world value</strong>
          <p>{project.impact}</p>
        </div>
        <div className="modal-actions">
          {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer">Open Live Website</a> : null}
          {project.repoUrl ? <a href={project.repoUrl} target="_blank" rel="noreferrer">Open GitHub Repo</a> : null}
          {!project.liveUrl && !project.repoUrl ? <span>Project repository or live link is private/not published yet.</span> : null}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((project) => project.filters?.includes(activeCategory) || project.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal-item:not(.is-visible)');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [activeCategory]);

  return (
    <main>
      <div className="site-bg" />
      <div className="cursor-glow" />

      <header className="navbar">
        <a href="#home" className="brand" aria-label="Go to home">
          <span className="brand-mark">RA</span>
          <span>Ravindu</span>
        </a>
        <nav aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      <section id="home" className="hero section-shell">
        <div className="hero-copy reveal-item is-visible">
          <p className="eyebrow">Available for Junior / Associate Software Engineering Roles</p>
          <h1>
            <span>Building</span> <span className="gradient-text">real business</span> software with clean code and polished UI.
          </h1>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn primary">Explore Projects</a>
            <a href={`mailto:${profile.email}`} className="btn secondary">Contact Me</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn ghost">GitHub</a>
          </div>
          <div className="quick-info">
            <span>{profile.location}</span>
            <span>{profile.role}</span>
            <span>Laravel • React • Next.js • MySQL • C# • C++</span>
          </div>
        </div>

        <div className="hero-visual reveal-item is-visible">
          <div className="profile-card">
            <div className="profile-orbit orbit-one" />
            <div className="profile-orbit orbit-two" />
            <img src="/images/ravindu-profile.jpg" alt="Ravindu Ashan" className="profile-photo" />
            <div className="floating-badge top">Laravel • Next.js • MySQL</div>
            <div className="floating-badge bottom">C# • C++ • Games</div>
          </div>
          <div className="mini-terminal">
            <div className="terminal-head">
              <span />
              <span />
              <span />
            </div>
            {terminalLines.map((line, index) => (
              <code key={line} style={{ '--line-delay': `${index * 0.22}s` }}>{line}</code>
            ))}
          </div>
        </div>
      </section>

      <section className="stats section-shell" aria-label="Professional highlights">
        {stats.map((stat, index) => (
          <div className="stat-card reveal-item" key={stat.label} style={{ '--delay': `${index * 0.08}s` }}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
            <small>{stat.note}</small>
          </div>
        ))}
      </section>

      <section id="about" className="section-shell split-section">
        <SectionHeading
          kicker="About Me"
          title="A developer focused on real business problems."
          text="My strongest area is turning day-to-day business workflows into clean software screens, database structures, and practical modules."
        />
        <div className="glass-panel reveal-item">
          <p>
            I am {profile.name}, a software developer from Sri Lanka. My main strength is building practical
            business systems: POS platforms, e-commerce websites, LMS solutions, distribution systems, medical
            service systems, inventory modules, admin dashboards, and database-driven workflows.
          </p>
          <p>
            I completed HNDIT at SLIATE Badulla, hold a Diploma in ICT from IMBS Green Campus, and have a
            1-year Associate Software Engineer experience letter from PSD / People Solutions Development. I focus
            on clean UI, clear database design, responsive screens, testing, deployment readiness, and real user needs.
          </p>
        </div>
      </section>

      <section id="experience" className="section-shell experience-section">
        <SectionHeading
          kicker="Experience"
          title="Company experience plus practical project building."
          text="My experience includes company work, real client-focused systems, and continuous project improvement."
        />
        <div className="experience-card reveal-item">
          <div>
            <span className="experience-label">Current / Recent Experience</span>
            <h3>Associate Software Engineer</h3>
            <p>PSD / People Solutions Development</p>
          </div>
          <span className="experience-pill">1 Year Experience</span>
        </div>
        <div className="timeline-grid">
          {[
            'Developed and improved real-world business application features.',
            'Worked with Laravel, PHP, MySQL, JavaScript, admin panels, and responsive UI.',
            'Supported POS, inventory, billing, reporting, and e-commerce workflows.',
            'Handled debugging, testing, UI polish, database updates, and deployment-related tasks.',
          ].map((item, index) => (
            <div className="timeline-card reveal-item" key={item} style={{ '--delay': `${index * 0.08}s` }}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section-shell projects-section">
        <SectionHeading
          kicker="Selected Work"
          title="Projects that prove practical software development ability."
          text="Each card highlights the type of system, technologies used, main workflow, and the business value behind the project."
        />
        <div className="filter-bar reveal-item" role="tablist" aria-label="Project filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={activeCategory === category ? 'active' : ''}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="project-grid">
          {filteredProjects.map((project, index) => (
            <article className="project-card reveal-item" key={project.title} style={{ '--delay': `${index * 0.05}s` }}>
              <div className="project-visual" aria-hidden="true">
                <div className="browser-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="mock-sidebar" />
                <div className="mock-lines">
                  <span />
                  <span />
                  <span />
                </div>
                <strong>{String(index + 1).padStart(2, '0')}</strong>
              </div>
              <div className="project-content">
                <span className="project-type">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="chip-wrap">
                  {project.tech.slice(0, 5).map((tech) => (
                    <span className="chip" key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-status">{project.status}</div>
                <div className="project-footer">
                  <span>{project.accent}</span>
                  <div className="project-actions">
                    <button type="button" onClick={() => setSelectedProject(project)}>Details</button>
                    {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer">Live</a> : null}
                    {project.repoUrl ? <a href={project.repoUrl} target="_blank" rel="noreferrer">GitHub</a> : null}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section-shell skills-section">
        <SectionHeading
          kicker="Skills"
          title="Technology stack I use to build full systems."
          text="I work across UI, backend logic, databases, reports, business workflows, and deployment preparation."
        />
        <div className="skills-layout">
          <div className="skill-orbit reveal-item" aria-label="Main technologies">
            <div className="orbit-ring ring-one" />
            <div className="orbit-ring ring-two" />
            <div className="orbit-core">Full-Stack</div>
            <span className="orbit-chip chip-a">Laravel</span>
            <span className="orbit-chip chip-b">Next.js</span>
            <span className="orbit-chip chip-c">MySQL</span>
            <span className="orbit-chip chip-d">React</span>
            <span className="orbit-chip chip-e">Java</span>
            <span className="orbit-chip chip-f">C#</span>
            <span className="orbit-chip chip-g">C++</span>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group, index) => (
              <div className="skill-card reveal-item" key={group.title} style={{ '--delay': `${index * 0.08}s` }}>
                <div className="skill-title">
                  <span>{group.icon}</span>
                  <h3>{group.title}</h3>
                </div>
                <div className="chip-wrap">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="process" className="section-shell process-section">
        <SectionHeading
          kicker="How I Build"
          title="A clear development process from idea to working system."
          text="My workflow is simple: understand the business, design the data, build carefully, test, and polish."
        />
        <div className="process-grid">
          {processSteps.map((item, index) => (
            <div className="process-card reveal-item" key={item.title} style={{ '--delay': `${index * 0.08}s` }}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="section-shell education-section">
        <SectionHeading kicker="Education" title="Academic qualifications." />
        <div className="education-list">
          {education.map((item, index) => (
            <div className="education-card reveal-item" key={item.title} style={{ '--delay': `${index * 0.06}s` }}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.institute}</p>
              </div>
              <span>{item.meta}</span>
            </div>
          ))}
        </div>
      </section>


      <section id="blog" className="section-shell home-blog-section">
        <SectionHeading
          kicker="Blog"
          title="Real project stories, lessons, and software engineering notes."
          text="I write about the real systems I build: Laravel e-commerce, POS platforms, distribution workflows, mobile apps, deployment fixes, and the practical lessons behind each project."
        />
        <div className="home-blog-panel home-blog-panel-premium reveal-item is-visible">
          <div className="home-blog-copy">
            <span className="blog-badge">Project Journal</span>
            <h3>From idea to working software.</h3>
            <p>Explore case-study style articles about my portfolio projects, business systems, UI decisions, deployment work, and the problems I solved while building real applications.</p>
            <div className="blog-mini-stats">
              <span>Laravel</span>
              <span>Next.js</span>
              <span>POS</span>
              <span>Mobile Apps</span>
            </div>
          </div>
          <div className="home-blog-actions home-blog-actions-orbit">
            <div className="home-blog-orbit-wrap" aria-hidden="true">
              <span className="home-blog-orbit-ring ring-one" />
              <span className="home-blog-orbit-ring ring-two" />
              <span className="home-blog-orbit-dot dot-one" />
              <span className="home-blog-orbit-dot dot-two" />
            </div>
            <a className="btn primary blog-read-button" href="/blog" aria-label="Open blog page">Read My Blog</a>
          </div>
        </div>

        <div className="home-blog-preview-grid reveal-item is-visible">
          {defaultBlogPosts.slice(0, 3).map((post) => (
            <a className="home-blog-preview-card" href={`/blog/${post.slug}`} key={post.slug}>
              <span>{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <strong>Read article →</strong>
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell contact-section reveal-item">
        <p className="section-kicker">Contact</p>
        <h2>Let’s build reliable software for real users.</h2>
        <p>
          I am open to Associate Software Engineer, Junior Software Engineer, Full-Stack Developer,
          Laravel Developer, C#/.NET Junior Developer, Web Developer, and software engineering trainee opportunities.
        </p>
        <div className="contact-grid">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phone.split(' ')[0]}`}>{profile.phone}</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </section>

      <footer className="footer section-shell">
        <span>© 2026 {profile.shortName}. Portfolio, projects, and profile content prepared for software engineering opportunities.</span>
        <span>Built with Next.js, responsive CSS, animations, and real project experience.</span>
      </footer>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </main>
  );
}

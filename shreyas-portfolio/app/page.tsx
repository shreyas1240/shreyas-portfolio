
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Download,
  Code2,
  Database,
  BrainCircuit,
  Layers3,
  GraduationCap,
  Award,
  BriefcaseBusiness,
  X,
} from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    n: '01',
    title: 'Smart Classroom Management Software',
    type: 'FULL-STACK DEVELOPMENT',
    description:
      'A web-based classroom platform with role-based authentication and responsive dashboards for students and faculty, plus secure file management and streamlined communication.',
    stack: ['Django', 'Tailwind CSS', 'PostgreSQL'],
    link: 'https://github.com/shreyas1240/finalized_smartclass',
  },
  {
    n: '02',
    title: 'Crime Hotspot Identification — Namma Suraksha',
    type: 'MACHINE LEARNING · DATA ANALYTICS',
    description:
      'A predictive crime-analytics project using historical crime data, feature engineering and ensemble methods, with interactive geospatial heatmaps to support resource planning.',
    stack: ['Python', 'Pandas', 'Scikit-learn'],
    link: 'https://github.com/shreyas1240/hackathon',
  },
  {
    n: '03',
    title: 'AI-Powered Elder Care Robot',
    type: 'IOT · ARTIFICIAL INTELLIGENCE',
    description:
      'A Raspberry Pi-based assistant with real-time voice commands, fall detection and emergency alerts powered by a modular sensor pipeline.',
    stack: ['Raspberry Pi', 'Python', 'Sensors'],
    link: 'mailto:shreyasg492@gmail.com?subject=AI%20Elder%20Care%20Robot',
  },
];

const skillGroups = [
  {
    icon: Code2,
    title: 'Programming',
    items: ['Python', 'Java', 'C', 'C++', 'JavaScript', 'SQL', 'R'],
  },
  {
    icon: Layers3,
    title: 'Web & Backend',
    items: [
      'Django',
      'Node.js',
      'Express.js',
      'REST APIs',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
    ],
  },
  {
    icon: BrainCircuit,
    title: 'Data & Machine Learning',
    items: [
      'Pandas',
      'Scikit-learn',
      'Feature Engineering',
      'Power BI',
    ],
  },
  {
    icon: Database,
    title: 'Databases & Tools',
    items: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Git',
      'GitHub',
      'Linux',
      'Postman',
    ],
  },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    ['About', '#about'],
    ['Skills', '#skills'],
    ['Experience', '#experience'],
    ['Projects', '#projects'],
    ['Contact', '#contact'],
  ];

  return (
    <main>
      {/* NAVIGATION */}
      <header className="navbar">
        <a className="brand" href="#home">
          SG<span>.</span>
        </a>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {nav.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#contact">
          Let's talk <ArrowUpRight size={15} />
        </a>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* HERO SECTION */}
      <section className="hero section-wrap" id="home">
        <div className="hero-grid" />

        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="visible"
          variants={reveal}
        >
          <div className="eyebrow">
            <span className="status-dot" />
            AVAILABLE FOR OPPORTUNITIES
            <span className="eyebrow-line" />
          </div>

          <p className="hero-kicker">HELLO, I'M</p>

          <h1>
            Shreyas <span>G.</span>
          </h1>

          <h2>
            Building thoughtful products with <em>code & data.</em>
          </h2>

          <p className="hero-description">
            Computer Science graduate focused on full-stack development,
            data science and machine learning. I enjoy turning complex
            problems into useful, intuitive digital experiences.
          </p>

          <div className="hero-actions">
            <a className="button-primary" href="#projects">
              Explore my work <ArrowUpRight size={17} />
            </a>

            <a
              className="button-ghost"
              href="/Shreyas_G_Resume.pdf"
              download
            >
              Download resume <Download size={16} />
            </a>
          </div>

          <div className="hero-meta">
            <span>
              <MapPin size={14} /> Bengaluru, India
            </span>
            <span className="meta-sep" />
            <span>Computer Science · 2026</span>
          </div>
        </motion.div>

        {/* PROFESSIONAL PROFILE PHOTO */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="portrait-frame">
            <div className="portrait-glow" />

            <Image
              src="/profile.jpg"
              alt="Professional portrait of Shreyas G"
              fill
              priority
              className="portrait-image"
              sizes="(max-width: 800px) 80vw, 420px"
              style={{
                objectFit: 'cover',
                objectPosition: 'center top',
              }}
            />
          </div>

          <div className="floating-card card-top">
            <span className="mini-icon">
              <Code2 size={17} />
            </span>
            <div>
              <b>Developer</b>
              <small>Building for the web</small>
            </div>
          </div>

          <div className="floating-card card-bottom">
            <span className="mini-icon purple">
              <BrainCircuit size={17} />
            </span>
            <div>
              <b>Data & AI</b>
              <small>Turning data into insight</small>
            </div>
          </div>

          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="hero-index">
            01 <span>/ 05</span>
          </div>
        </motion.div>

        <a className="scroll-cue" href="#about">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={15} />
        </a>
      </section>

      {/* ABOUT SECTION */}
      <section
        className="about section-wrap section-pad"
        id="about"
      >
        <div className="section-label">01 / ABOUT ME</div>

        <div className="about-content">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="section-overline">A LITTLE INTRODUCTION</p>

            <h2>
              Curious by nature.
              <br />
              <span>Driven by impact.</span>
            </h2>
          </motion.div>

          <motion.div
            className="about-text"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p>
              I'm Shreyas, a Computer Science and Engineering graduate
              from Presidency University, Bengaluru. My interests sit
              at the intersection of software engineering, data and
              intelligent systems.
            </p>

            <p>
              From building role-based web platforms to developing
              machine-learning solutions for real-world challenges,
              I enjoy learning by building and collaborating with
              people who care about meaningful technology.
            </p>

            <div className="about-facts">
              <div>
                <b>2026</b>
                <small>Graduation</small>
              </div>
              <div>
                <b>03+</b>
                <small>Featured projects</small>
              </div>
              <div>
                <b>Top 30</b>
                <small>Namma Suraksha</small>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section
        className="skills section-wrap section-pad"
        id="skills"
      >
        <div className="section-label">02 / TOOLKIT</div>

        <div className="section-heading">
          <div>
            <p className="section-overline">WHAT I WORK WITH</p>
            <h2>
              Skills & <span>technologies.</span>
            </h2>
          </div>

          <p className="heading-note">
            A practical toolkit for designing, developing and
            delivering digital solutions.
          </p>
        </div>

        <div className="skill-grid">
          {skillGroups.map((group, i) => (
            <motion.article
              className="skill-card"
              key={group.title}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="skill-icon">
                <group.icon size={21} />
              </div>

              <h3>{group.title}</h3>

              <div className="tag-list">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section
        className="experience section-wrap section-pad"
        id="experience"
      >
        <div className="section-label">03 / EXPERIENCE</div>

        <div className="section-heading">
          <div>
            <p className="section-overline">
              WHERE I'VE CONTRIBUTED
            </p>
            <h2>
              Learning through <span>building.</span>
            </h2>
          </div>
        </div>

        <motion.div
          className="experience-card"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="experience-icon">
            <BriefcaseBusiness size={23} />
          </div>

          <div className="experience-main">
            <div className="experience-top">
              <div>
                <h3>Web Development Intern (Full-Stack)</h3>
                <p>SkillCraft Technology Pvt. Ltd.</p>
              </div>

              <span className="date-pill">
                MAR 2026 — JUL 2026
              </span>
            </div>

            <p className="experience-description">
              Developed full-stack web application features and
              integrated them with backend services and databases.
              Used Git and GitHub for version control and collaborated
              with team members on code changes.
            </p>

            <div className="tag-list">
              <span>Full-Stack Development</span>
              <span>Backend Integration</span>
              <span>Git & GitHub</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PROJECTS SECTION */}
      <section
        className="projects section-wrap section-pad"
        id="projects"
      >
        <div className="section-label">04 / SELECTED WORK</div>

        <div className="section-heading">
          <div>
            <p className="section-overline">THINGS I'VE BUILT</p>
            <h2>
              Projects with <span>purpose.</span>
            </h2>
          </div>

          <p className="heading-note">
            A selection of projects where I explored ideas,
            solved problems and learned by shipping.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project, i) => (
            <motion.article
              className="project-row"
              key={project.n}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="project-number">{project.n}</div>

              <div className="project-info">
                <p className="project-type">{project.type}</p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="tag-list">
                  {project.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>

              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title}`}
              >
                <ArrowUpRight size={22} />
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS AND EDUCATION */}
      <section className="recognition section-wrap section-pad">
        <div className="section-label">05 / MILESTONES</div>

        <div className="section-heading">
          <div>
            <p className="section-overline">PROUD MOMENTS</p>
            <h2>
              Recognition & <span>education.</span>
            </h2>
          </div>
        </div>

        <div className="recognition-grid">
          <div className="recognition-column">
            <h3>
              <Award size={18} /> Achievements & certifications
            </h3>

            <div className="timeline-item">
              <b>Top 30 out of 450+ teams</b>
              <p>
                Namma Suraksha Hackathon (Software Edition), 2025
              </p>
            </div>

            <div className="timeline-item">
              <b>Google IT Automation with Python</b>
              <p>Professional Certificate · 2022</p>
            </div>

            <div className="timeline-item">
              <b>Power BI Certification</b>
              <p>Simplilearn · 2025</p>
            </div>

            <div className="timeline-item">
              <b>Data Analytics Job Simulation</b>
              <p>Deloitte / Forage</p>
            </div>
          </div>

          <div className="recognition-column education-column">
            <h3>
              <GraduationCap size={19} /> Education
            </h3>

            <div className="timeline-item">
              <span className="timeline-date">2022 — 2026</span>
              <b>B.Tech — Computer Science and Engineering</b>
              <p>Presidency University · Bengaluru</p>
              <p className="grade">CGPA: 7.1 / 10</p>
            </div>

            <div className="timeline-item">
              <span className="timeline-date">2021 — 2022</span>
              <b>Pre-University Course (PCMB)</b>
              <p>BGS PU College · Sidlaghatta</p>
              <p className="grade">87%</p>
            </div>

            <div className="timeline-item">
              <span className="timeline-date">2019 — 2020</span>
              <b>Class X</b>
              <p>BGS Public School · Sidlaghatta</p>
              <p className="grade">92%</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        className="contact section-wrap section-pad"
        id="contact"
      >
        <div className="contact-panel">
          <div className="contact-orb" />

          <p className="section-overline">
            HAVE A PROJECT OR OPPORTUNITY?
          </p>

          <h2>
            Let's make something
            <br />
            <span>meaningful together.</span>
          </h2>

          <p className="contact-copy">
            I'm open to entry-level opportunities, collaborations
            and conversations around software, data and AI.
          </p>

          <a
            className="button-primary"
            href="mailto:shreyasg492@gmail.com"
          >
            Get in touch <ArrowUpRight size={17} />
          </a>

          <div className="contact-details">
            <a href="mailto:shreyasg492@gmail.com">
              <Mail size={15} /> shreyasg492@gmail.com
            </a>

            <a href="tel:+919606181646">
              <Phone size={15} /> +91 96061 81646
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer section-wrap">
        <a className="brand" href="#home">
          SG<span>.</span>
        </a>

        <p>Designed & built by Shreyas G. · 2026</p>

        <div className="socials">
          <a
            href="https://github.com/shreyas1240"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="mailto:shreyasg492@gmail.com"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </footer>
    </main>
  );
}

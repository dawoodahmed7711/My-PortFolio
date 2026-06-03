import React, { useEffect, useState } from "react";
import "./App.css";
import image from './Orignal.png'

const profileImg =
  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&q=80"; // replace with your photo URL

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const skills = [
    { name: "HTML5", icon: "fa-brands fa-html5" },
    { name: "CSS3", icon: "fa-brands fa-css3-alt" },
    { name: "JavaScript", icon: "fa-brands fa-js" },
    { name: "React", icon: "fa-brands fa-react" },
    { name: "GitHub", icon: "fa-brands fa-github" },
    { name: "Responsive Design", icon: "fa-solid fa-mobile-screen" },
  ];

  const experience = [
    {
      role: "Frontend Web Developer",
      company: "Self-Employed (Special Projects)",
      date: "July 2024 – Present",
      points: [
        "Built responsive websites using HTML, CSS and JavaScript",
        "Created interactive UI components",
        "Worked with Flexbox, Grid and DOM manipulation",
        "Published projects on GitHub and Netlify",
      ],
    },
    {
      role: "BS Student",
      company: "The Islamia University of Bahawalpur",
      date: "2024",
      points: ["Pursuing studies while building real-world web projects."],
    },
  ];

  const projects = [
    {
      title: "Landing Pages",
      desc: "Modern, conversion-focused landing pages with clean layouts.",
      icon: "fa-solid fa-rocket",
    },
    {
      title: "Portfolio Websites",
      desc: "Personal portfolios with smooth animations and responsive design.",
      icon: "fa-solid fa-user-tie",
    },
    {
      title: "Calculator App",
      desc: "Interactive calculator built with vanilla JavaScript.",
      icon: "fa-solid fa-calculator",
    },
    {
      title: "To-Do App",
      desc: "Task manager with local storage and clean UI.",
      icon: "fa-solid fa-list-check",
    },
  ];

  return (
    <div className="app">
      {/* NAV */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <a href="#home" className="logo">
            My Portfolio<span>.</span>
          </a>
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
              <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>
      </nav>

      {/* HERO */}
      <header id="home" className="hero">
        <div className="hero-grid">
          <div className="hero-text">
            <span className="hello">👋 Hello, I'm</span>
            <h1>Dawood Ahmad</h1>
            <h2>Front-end Developer</h2>
            <p className="tagline">
              I craft modern, responsive and user-friendly websites with
              <strong> HTML, CSS, JavaScript</strong> and <strong>React</strong>.
              Clean design. Fast performance. Pixel-perfect on every screen.
            </p>
            <div className="cta-group">
              <a href="#contact" className="btn btn-primary">
                <i className="fa-solid fa-paper-plane"></i> Contact Me
              </a>
              <a
                href="https://www.linkedin.com/in/dawood-ahmad-front-end-developer-b572b0386"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                <i className="fa-brands fa-linkedin"></i> LinkedIn
              </a>
            </div>
            <div className="hero-socials">
              <a href="mailto:dawoodahmed7711@gmail.com"><i className="fa-solid fa-envelope"></i></a>
              <a href="https://github.com/dawoodahmed7711" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
              <a href="https://www.linkedin.com/in/dawood-ahmad-front-end-developer-b572b0386" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>

          <div className="hero-photo">
            <div className="photo-ring">
              <img src={image} alt="Dawood Ahmad" />
            </div>
            <div className="floating-badge badge-1">
              <i className="fa-brands fa-react"></i> React
            </div>
            <div className="floating-badge badge-2">
              <i className="fa-solid fa-code"></i> Clean Code
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container">
          <h3 className="section-title">About Me</h3>
          <div className="section-line"></div>
          <p className="about-text">
            I'm a Junior Frontend Web Developer based in Bahawalpur, Pakistan. I love
            building landing pages, portfolios, calculators and to-do apps that
            feel snappy and look great. I focus on clean design, mobile
            responsiveness, and fast performance. Currently open to
            <strong> internships, junior frontend roles</strong> and
            <strong> freelance projects</strong>.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section section-alt">
        <div className="container">
          <h3 className="section-title">Skills</h3>
          <div className="section-line"></div>
          <div className="skills-grid">
            {skills.map((s) => (
              <div key={s.name} className="skill-card">
                <i className={s.icon}></i>
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <div className="container">
          <h3 className="section-title">Experience</h3>
          <div className="section-line"></div>
          <div className="timeline">
            {experience.map((e, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">{e.date}</span>
                  <h4>{e.role}</h4>
                  <p className="timeline-company">{e.company}</p>
                  <ul>
                    {e.points.map((p, j) => <li key={j}>{p}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section section-alt">
        <div className="container">
          <h3 className="section-title">Projects</h3>
          <div className="section-line"></div>
          <div className="projects-grid">
            {projects.map((p) => (
              <div key={p.title} className="project-card">
                <div className="project-icon"><i className={p.icon}></i></div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
                <a href="https://github.com/dawoodahmed7711" className="project-link">
                  View Project <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact">
        <div className="container contact-inner">
          <h3>Let's build something great together.</h3>
          <p>Open to internships, junior frontend roles, and freelance projects.</p>
          <div className="cta-group center">
            <a href="mailto:dawoodahmed7711@gmail.com" className="btn btn-primary">
              <i className="fa-solid fa-envelope"></i> dawoodahmed7711@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/dawood-ahmad-front-end-developer-b572b0386/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              <i className="fa-brands fa-linkedin"></i> Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Dawood Ahmad. Built with React.</p>
      </footer>
    </div>
  );
}

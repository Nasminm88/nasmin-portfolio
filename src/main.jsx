import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Download,
  Mail,
  Phone,
  MapPin,
  GitBranch,
  Cpu,
  Cog,
  Code2,
  BrainCircuit,
  Menu,
  X
} from "lucide-react";

import "./styles.css";

/* =========================
   PROJECTS
========================= */

const projects = [
  {
    title: "HealthAI – AI-Powered Healthcare Assistant",
    tag: "AI / Healthcare",
    description:
      "AI-based healthcare solution involving medical analysis, medical report generation, and chatbot/assistant functionality.",
    tech: ["AI", "Computer Vision", "Healthcare"],
    github:
      "https://github.com/Nasminm88/HealthAI-AI-Assisted-Medical-Report-Analysis-and-Health-Support-System"
  },

  {
    title: "Hospital Assistance Tracking & Smart Patient Flow",
    tag: "Smart Healthcare",
    description:
      "Healthcare-focused system for patient tracking, hospital assistance, and smart patient-flow management.",
    tech: ["IoT", "Tracking", "Smart Systems"],
    github:
      "https://github.com/Nasminm88/HospitalAsset-Tracking-and-Smart-Patient-Flow-Management-System"
  },

  {
    title: "Intelligent Remote Healthcare & Assistance System",
    tag: "Remote Healthcare",
    description:
      "Remote healthcare solution focused on continuous patient monitoring and remote healthcare assistance.",
    tech: ["IoT", "Monitoring", "Healthcare"],
    github:
      "https://github.com/Nasminm88/INTELLIGENT-REMOTE-HEALTHCARE-AND-ASSISTED-LIVING-ECOSYSTEM-"
  },

  {
    title: "Drone for Medical Delivery",
    tag: "Autonomous Systems",
    description:
      "Designed a drone capable of carrying approximately 250 g payload for short-range delivery, with approximately 80% stable and controlled flight performance.",
    tech: ["Drone", "Fabrication", "Control"],
    github:
      "https://github.com/Nasminm88/MEDICINE-DELIVERY-DRONE"
  },

  {
    title: "Blood Glucose Monitoring System",
    tag: "Embedded / Medical",
    description:
      "Arduino-based glucose monitoring system with approximately 85% measurement consistency; calibration techniques improved accuracy by approximately 20%.",
    tech: ["Arduino", "Sensors", "Embedded"],
    github:
      "https://github.com/Nasminm88/EMBEDDED-SYSTEM-DESIGN-FOR-BLOOD-GLUCOSE-MEASUREMENT-"
  },

  {
    title: "Wearable-Based Health & Fitness Alert System",
    tag: "IoT Wearable",
    description:
      "IoT wearable concept for real-time heart-rate, SpO₂, and fall detection.",
    tech: ["IoT", "Sensors", "Wearable"],
    github:
      "https://github.com/Nasminm88/WEARABLE-BASEDHEALTHANDFITNESSALERTSYSTEM-APROJECTREPORT"
  }
];

/* =========================
   SKILLS
========================= */

const skills = [
  ["UG NX", "CAD"],
  ["AutoCAD", "CAD"],
  ["C", "Programming"],
  ["Python", "Programming"],
  ["Java", "Programming"],
  ["Arduino", "Embedded"],
  ["OpenCV", "AI / Vision"],
  ["Basic ML", "AI / Vision"],
  ["CNC", "Manufacturing"],
  ["3D Printing", "Manufacturing"]
];

/* =========================
   MAIN APP
========================= */

function App() {
  const [open, setOpen] = React.useState(false);

  const nav = [
    ["About", "about"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Experience", "experience"],
    ["Contact", "contact"]
  ];

  return (
    <div>

      {/* =========================
          NAVIGATION
      ========================= */}

      <header className="nav-wrap">
        <nav className="nav">

          <a className="logo" href="#home">
            NM<span>.</span>
          </a>

          <div className={`nav-links ${open ? "show" : ""}`}>

            {nav.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}

            <a
              className="nav-resume"
              href="/Nasmin_M_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
              <Download size={15} />
            </a>

          </div>

          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>

        </nav>
      </header>


      <main>

        {/* =========================
            HERO
        ========================= */}

        <section id="home" className="hero">

          <div className="hero-glow"></div>

          <div className="hero-copy">

            <p className="eyebrow">
              B.E. MECHANICAL ENGINEERING • 2023–2027
            </p>

            <h1>
              Engineering ideas into{" "}
              <span>practical solutions.</span>
            </h1>

            <p className="hero-text">
              Hi, I'm <strong>Nasmin M</strong> — a Mechanical Engineering
              undergraduate interested in product design, AI, IoT,
              embedded systems and healthcare technology.
            </p>

            <div className="hero-actions">

              <a
                className="btn primary"
                href="#projects"
              >
                View Projects
                <ArrowRight size={18} />
              </a>

              <a
                className="btn secondary"
                href="/Nasmin_M_Resume.pdf"
                download
              >
                Download Resume
                <Download size={18} />
              </a>

            </div>

            <div className="quick-info">

              <span>
                <MapPin size={16} />
                Salem, Tamil Nadu
              </span>

              <span>
                <Mail size={16} />
                2k23me063@kiot.ac.in
              </span>

            </div>

          </div>


          <div className="hero-photo-wrap">

            <div className="photo-frame">

              <img
                src="/profile.png"
                alt="Nasmin M professional profile"
              />

            </div>

            <div className="floating-card">

              <span className="dot"></span>

              Open to opportunities

            </div>

          </div>

        </section>


        {/* =========================
            ABOUT
        ========================= */}

        <section id="about" className="section">

          <div className="section-label">
            01 — ABOUT
          </div>

          <div className="two-col">

            <div>

              <h2>
                Mechanical engineering with a{" "}
                <em>technology-first</em> mindset.
              </h2>

            </div>


            <div className="about-text">

              <p>
                I am a Mechanical Engineering undergraduate at
                Knowledge Institute of Technology, Salem. My work
                combines mechanical engineering with electronics and
                software to develop practical engineering solutions.
              </p>

              <p>
                My interests include Product Design, R&D,
                AI & Healthcare, IoT, Embedded Systems,
                Occupational Health & Safety, and Automotive engineering.
              </p>


              <div className="stats">

                <div>
                  <strong>6+</strong>
                  <span>Major Projects</span>
                </div>

                <div>
                  <strong>5+</strong>
                  <span>Hackathons</span>
                </div>

                <div>
                  <strong>7.8</strong>
                  <span>CGPA</span>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =========================
            SKILLS
        ========================= */}

        <section
          id="skills"
          className="section dark-section"
        >

          <div className="section-label">
            02 — SKILLS
          </div>


          <div className="section-heading">

            <h2>
              Technical toolkit
            </h2>

            <p>
              Tools and technologies I use across mechanical,
              embedded and AI-focused projects.
            </p>

          </div>


          <div className="skill-grid">

            {skills.map(([name, category]) => (

              <div
                className="skill-card"
                key={name}
              >

                <div className="skill-icon">

                  {category === "CAD" ? (
                    <Cog />
                  ) : category === "Programming" ? (
                    <Code2 />
                  ) : category === "Embedded" ? (
                    <Cpu />
                  ) : category === "AI / Vision" ? (
                    <BrainCircuit />
                  ) : (
                    <Cog />
                  )}

                </div>


                <div>

                  <strong>
                    {name}
                  </strong>

                  <small>
                    {category}
                  </small>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* =========================
            PROJECTS
        ========================= */}

        <section
          id="projects"
          className="section"
        >

          <div className="section-label">
            03 — PROJECTS
          </div>


          <div className="section-heading project-heading">

            <div>
              <h2>
                Selected work
              </h2>
            </div>

            <p>
              Engineering projects spanning healthcare,
              embedded systems, IoT, AI and autonomous systems.
            </p>

          </div>


          <div className="project-grid">

            {projects.map((project, index) => (

              <article
                className="project-card"
                key={project.title}
              >

                <div className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </div>


                <span className="project-tag">
                  {project.tag}
                </span>


                <h3>
                  {project.title}
                </h3>


                <p>
                  {project.description}
                </p>


                <div className="tech-row">

                  {project.tech.map((technology) => (

                    <span key={technology}>
                      {technology}
                    </span>

                  ))}

                </div>


                <a
                  className="github-project"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                  <ArrowRight size={16} />
                </a>

              </article>

            ))}

          </div>

        </section>


        {/* =========================
            TRAINING & EXPERIENCE
        ========================= */}

        <section
          id="experience"
          className="section experience-section"
        >

          <div className="section-label">
            04 — TRAINING & EXPERIENCE
          </div>


          <div className="timeline">

            <div className="timeline-item">

              <div className="timeline-dot"></div>

              <div>

                <span>
                  I2I PROGRAM • KIOT
                </span>

                <h3>
                  Python, OpenCV & Basic ML
                </h3>

                <p>
                  Exposure to reverse engineering and
                  autonomous systems.
                </p>

              </div>

            </div>


            <div className="timeline-item">

              <div className="timeline-dot"></div>

              <div>

                <span>
                  CNC TRAINING • DMW COMPANY
                </span>

                <h3>
                  Machining & Quality Basics
                </h3>

                <p>
                  Basic machining operations, drawing interpretation,
                  quality checks and tolerance understanding.
                </p>

              </div>

            </div>


            <div className="timeline-item">

              <div className="timeline-dot"></div>

              <div>

                <span>
                  DRONE TRAINING • IIT MADRAS
                </span>

                <h3>
                  Drone Assembly & Flight Operation
                </h3>

                <p>
                  Hands-on training in drone assembly, fabrication,
                  flight operation and basic control testing.
                </p>

              </div>

            </div>

          </div>


          <div className="education">

            <span>
              EDUCATION
            </span>

            <h3>
              B.E. Mechanical Engineering
            </h3>

            <p>
              Knowledge Institute of Technology, Salem
              • 2023–2027 • CGPA 7.8
            </p>

          </div>

        </section>


        {/* =========================
            ACHIEVEMENTS
        ========================= */}

        <section className="section achievements">

          <div className="section-label">
            05 — ACHIEVEMENTS
          </div>


          <div className="achievement-list">

            <span>
              Best Innovation Award – E-Bike
            </span>

            <span>
              Finalist – CMIT Hackathon
            </span>

            <span>
              Winner – Technical Presentations
            </span>

            <span>
              5+ Hackathons
            </span>

            <span>
              NPTEL – ML & Deep Learning
            </span>

            <span>
              NPTEL – Additive Manufacturing
            </span>

            <span>
              Placement Ambassador
            </span>

            <span>
              Treasurer – FLAME
            </span>

            <span>
              Ideal Lab Ambassador
            </span>

            <span>
              NSS Volunteer
            </span>

          </div>

        </section>


        {/* =========================
            CONTACT
        ========================= */}

        <section
          id="contact"
          className="contact-section"
        >

          <div className="contact-inner">

            <div>

              <div className="section-label">
                06 — CONTACT
              </div>

              <h2>
                Let's build something
                <br />
                <span>meaningful.</span>
              </h2>

            </div>


            <div className="contact-links">

              {/* EMAIL */}

              <a href="mailto:2k23me063@kiot.ac.in">

                <Mail />

                <span>
                  2k23me063@kiot.ac.in
                </span>

              </a>


              {/* PHONE */}

              <a href="tel:+917845476204">

                <Phone />

                <span>
                  +91 78454 76204
                </span>

              </a>


              {/* LINKEDIN */}

              <a
                href="https://www.linkedin.com/in/nasmin-m-7401152a4/"
                target="_blank"
                rel="noreferrer"
              >

                <span className="contact-text-icon">
                  in
                </span>

                <span>
                  LinkedIn
                </span>

              </a>


              {/* GITHUB */}

              <a
                href="https://github.com/Nasminm88"
                target="_blank"
                rel="noreferrer"
              >

                <GitBranch />

                <span>
                  GitHub
                </span>

              </a>

            </div>

          </div>

        </section>

      </main>


      {/* =========================
          FOOTER
      ========================= */}

      <footer>

        <span>
          © 2026 Nasmin M
        </span>

        <span>
          B.E. Mechanical Engineering
        </span>

      </footer>

    </div>
  );
}


/* =========================
   RENDER APP
========================= */

createRoot(
  document.getElementById("root")
).render(
  <App />
);
import React from 'react';
import { FaLinkedin, FaInstagram, FaBriefcase } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import avatar from "../assets/avatar.jpg";
import printLogo from "../assets/printandgo.jpg";
import massaLogo from "../assets/massa.jpg";
import kingLogo from "../assets/kingshcut.jpg";
import gameLogo from "../assets/xelevatin.jpg";
import molenLogo from "../assets/molen.jpg";

const projectsData = [
  {
    title: "Print and Go",
    description: "Self-service printing system for modern print shops.",
    logo: printLogo,
    path: "/projects/print",
  },
  {
    title: "Massa",
    description: "Platform connecting UMKM and investors.",
    logo: massaLogo,
    path: "/projects/massa",
  },
  {
    title: "Kingshcut",
    description: "Barbershop app for reservations and customer management.",
    logo: kingLogo,
    path: "/projects/kingshcut",
  },
  {
    title: "X Elevatin PIC GAME",
    description: "Esports competition event at Binus Semarang.",
    logo: gameLogo,
    path: "/projects/game",
  },
  {
    title: "Molen",
    description: "On-demand mechanic booking app.",
    logo: molenLogo,
    path: "/projects/molen",
  },
];

function Home() {
  return (
    <div className="wrapper">
      {/* Profile Card */}
      <section className="card profile-card" id="profile-section">
        <div className="profile-status">
          <p className="profile-role">Information Systems</p>
          <div className="status-work">
            <div className="work-dot"></div>
            <p>AVAILABLE FOR WORK</p>
          </div>
        </div>
        <div className="profile-info-content">
          <div className="profile-text">
            <h1>I'm Jovan</h1>
            <p>
              Information Systems student with interest in web-based systems and
              focused on using technology to improve efficiency.
            </p>
          </div>
          <div className="profile-avatar">
            <img src={avatar} alt="Jovan" />
          </div>
        </div>
      </section>

      {/* Projects Card */}
      <section className="card projects-card" id="projects-section">
        <div className="projects-header">
          <h2>Projects</h2>
        </div>
        <div className="project-list">
          {projectsData.map((project, index) => (
            <Link key={index} to={project.path} className="project-item">
              <img src={project.logo} alt={project.title} />
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Card */}
      <section className="card contact-card" id="contact-section">
        <h2>Contact</h2>
        <p>📞 +62895368570703</p>
        <p>✉️ ongjovanvillareal@gmail.com</p>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/ong-jovan-villareal-94bb81249"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={28} color="#0A66C2" />
          </a>
          <a
            href="https://www.instagram.com/ongjovanvillareal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={28} color="#E1306C" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
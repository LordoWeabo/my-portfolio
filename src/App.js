import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// avatar
import avatar from "./assets/avatar.jpg";

// logo project
import printLogo from "./assets/printandgo.jpg";
import massaLogo from "./assets/massa.jpg";
import kingLogo from "./assets/kingshcut.jpg";
import gameLogo from "./assets/xelevatin.jpg";
import molenLogo from "./assets/molen.jpg";

// icons
import { FaLinkedin, FaInstagram } from "react-icons/fa";

// Component for project detail
function ProjectDetail({ title, description, logo, website, isDownload }) {
  return (
    <div className="card detail-card">
      <img src={logo} alt={`${title} logo`} className="detail-logo" />
      <h2>{title}</h2>
      <p className="detail-desc">{description}</p>
      <div className="detail-buttons">
        {isDownload ? (
          <a href={website} download className="btn btn-download">
            Download
          </a>
        ) : (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Visit Website
          </a>
        )}
        <Link to="/" className="btn btn-back">
          ← Back
        </Link>
      </div>
    </div>
  );
}

// Component Home (profile + project list + contact)
function Home() {
  return (
    <div className="wrapper">
      {/* Profile Card */}
      <section className="card profile-card">
        <div className="profile-info">
          <h1>I'm Jovan</h1>
          <p>
            Information Systems student with interest in web-based systems and
            focused on using technology to improve efficiency.
          </p>
          <a href="/downloads/CV.pdf" download className="btn btn-download">
            Download CV
          </a>
        </div>
        <div className="profile-avatar">
          <img src={avatar} alt="Jovan" />
        </div>
      </section>

      {/* Projects Card */}
      <section className="card projects-card">
        <div className="projects-header">
          <h2>Projects</h2>
        </div>

        <div className="project-list">
          <Link to="/print" className="project-item">
            <img src={printLogo} alt="Print and Go" />
            <div>
              <h3>Print and Go</h3>
              <p>Self-service printing system for modern print shops.</p>
            </div>
          </Link>

          <Link to="/massa" className="project-item">
            <img src={massaLogo} alt="Massa" />
            <div>
              <h3>Massa</h3>
              <p>Platform connecting UMKM and investors.</p>
            </div>
          </Link>

          <Link to="/kingshcut" className="project-item">
            <img src={kingLogo} alt="Kingshcut" />
            <div>
              <h3>Kingshcut</h3>
              <p>Barbershop app for reservations and customer management.</p>
            </div>
          </Link>

          <Link to="/game" className="project-item">
            <img src={gameLogo} alt="X Elevatin PIC GAME" />
            <div>
              <h3>X Elevatin PIC GAME</h3>
              <p>Esports competition event at Binus Semarang.</p>
            </div>
          </Link>

          <Link to="/molen" className="project-item">
            <img src={molenLogo} alt="Molen" />
            <div>
              <h3>Molen</h3>
              <p>On-demand mechanic booking app.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Contact Card */}
      <section className="card contact-card">
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

// Main App
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Detail Projects */}
        <Route
          path="/print"
          element={
            <ProjectDetail
              title="Print and Go"
              description="Print and Go is a self-service printing system designed to modernize traditional printing shops. The system allows customers to upload documents online, make digital payments, and collect their prints without direct assistance from staff. This reduces queues, improves efficiency, and enables businesses to operate with fewer resources. For printing shop owners, Print and Go offers sales tracking, automated price calculation, and better transaction management, helping them adapt to the growing demand for fast, contactless services."
              logo={printLogo}
              website="/downloads/printandgo.zip"
              isDownload={true}
            />
          }
        />

        <Route
          path="/massa"
          element={
            <ProjectDetail
              title="Massa"
              description="Massa is an application that connects small and medium-sized enterprises (SMEs) and project owners with potential investors. Inspired by the 'Shark Tank' concept, Massa provides a platform where entrepreneurs can showcase their business ideas, growth potential, and financial needs. Investors can easily browse, evaluate, and fund projects that align with their interests. This creates a transparent ecosystem where SMEs gain access to funding opportunities, while investors discover promising ventures. The platform encourages entrepreneurship, financial inclusion, and sustainable business growth."
              logo={massaLogo}
              website="/downloads/massa.zip"
              isDownload={true}
            />
          }
        />

        <Route
          path="/kingshcut"
          element={
            <ProjectDetail
              title="Kingshcut"
              description="Kingshcut is a barbershop management application designed to make grooming services more accessible and organized. Customers can book appointments online, join a digital queue, and avoid long waiting times. The system also provides barbershop owners with customer management tools, including booking schedules, customer histories, and promotional notifications. Kingshcut aims to improve both the customer experience and operational efficiency by digitizing processes that were once manual. It helps barbers build stronger customer relationships and ensures a smooth, professional service experience."
              logo={kingLogo}
              website="/downloads/kingshcut.zip"
              isDownload={true}
            />
          }
        />

        <Route
          path="/game"
          element={
            <ProjectDetail
              title="X Elevatin PIC GAME"
              description="X Elevatin PIC Game is a competitive gaming event hosted at Binus Semarang, featuring tournaments for Tekken, FIFA, and Mobile Legends. The event provides a platform for students and gaming enthusiasts to showcase their skills, engage in friendly competition, and build a sense of community through esports. Organized with professional standards, the competition fosters teamwork, sportsmanship, and event management experience for the organizing committee. Beyond entertainment, it highlights the growing role of esports in education and youth engagement."
              logo={gameLogo}
              website="https://www.linkedin.com/posts/ong-jovan-villareal-94bb81249_eventmanagement-bifestelevationx-gamingcompetition-activity-7282619949401980929-Dh_a"
              isDownload={false}
            />
          }
        />

        <Route
          path="/molen"
          element={
            <ProjectDetail
              title="Molen"
              description="Molen is an on-demand mechanic booking application that allows users to request vehicle repair services anytime and anywhere. Instead of searching for a workshop, users can book a mechanic directly from the app and have them arrive at their location. The system ensures convenience for vehicle owners while expanding the reach of mechanics who can now serve a broader customer base. Features include real-time booking, service tracking, and secure payments. Molen provides a practical solution for emergencies and daily maintenance, making vehicle care simpler and more reliable."
              logo={molenLogo}
              website="https://www.figma.com/design/0cbIWGneMbPDIxNtx0QwcJ/UI-AISAD?node-id=0-1&t=3hUfBIfrOr5zZX5D-1"
              isDownload={false}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

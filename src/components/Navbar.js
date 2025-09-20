import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaFolder, FaBriefcase } from 'react-icons/fa';

function Navbar() {
  const location = useLocation();

  const handleNavClick = (sectionId, e) => {
    // Jika tidak di halaman utama, navigasi dulu ke halaman utama
    if (location.pathname !== '/') {
      e.preventDefault(); // Mencegah default link behavior
      window.location.href = `/#${sectionId}`; // Arahkan ke root dengan hash section
      // window.location.replace(`/#${sectionId}`); // Bisa juga pakai ini
      return;
    }

    // Jika sudah di halaman utama, scroll saja
    const section = document.getElementById(sectionId);
    if (section) {
      e.preventDefault();
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCVClick = () => {
    window.location.href = process.env.PUBLIC_URL + "/downloads/CV.pdf";
  };

  return (
    <nav className="card navbar-card">
      <div className="navbar-links">
        <Link to="/" className="navbar-item" onClick={(e) => handleNavClick('profile-section', e)}>
          <FaHome size={20} />
        </Link>
        <Link to="/" className="navbar-item" onClick={(e) => handleNavClick('projects-section', e)}>
          <FaFolder size={20} />
        </Link>
        <Link to="/" className="navbar-item" onClick={(e) => handleNavClick('contact-section', e)}>
          <FaUser size={20} />
        </Link>
      </div>
      <div className="navbar-right">
        <button onClick={handleDownloadCVClick} className="btn btn-download-cv">
          <FaBriefcase /> Download CV
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
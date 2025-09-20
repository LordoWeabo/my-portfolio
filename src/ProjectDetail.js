import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function ProjectDetail({ title, description, logo, showcase, website, isDownload }) {
  return (
    <div className="card detail-card">
      {/* Logo kecil */}
      <img src={logo} alt={`${title} logo`} className="detail-logo" />

      {/* Judul */}
      <h2>{title}</h2>

      {/* Deskripsi panjang */}
      <p className="detail-desc">{description}</p>

      {/* Showcase image */}
      {showcase && (
        <img
          src={showcase}
          alt={`${title} showcase`}
          className="detail-showcase"
        />
      )}

      {/* Tombol */}
      <div className="detail-buttons">
        {isDownload ? (
          <a href={website} download className="btn-download">
            Download
          </a>
        ) : (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-visit"
          >
            Visit Website
          </a>
        )}

        <Link to="/" className="btn-back">
          ← Back
        </Link>
      </div>
    </div>
  );
}

export default ProjectDetail;


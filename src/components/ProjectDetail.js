import React from 'react';
import { Link } from 'react-router-dom';

function ProjectDetail({ title, description, logo, website, isDownload }) {
  return (
    <div className="wrapper">
      <div className="card detail-card">
        <img src={logo} alt={`${title} logo`} className="detail-logo" />
        <h2>{title}</h2>
        <p className="detail-desc">{description}</p>
        <div className="detail-buttons">
          {isDownload ? (
            <a
              href={process.env.PUBLIC_URL + website}
              download
              className="btn btn-download"
            >
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
    </div>
  );
}

export default ProjectDetail;
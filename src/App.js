import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProjectDetail from './components/ProjectDetail';
import Navbar from './components/Navbar';
import './App.css';

// Import asset (gambar logo)
import printLogo from "./assets/printandgo.jpg";
import massaLogo from "./assets/massa.jpg";
import kingLogo from "./assets/kingshcut.jpg";
import gameLogo from "./assets/xelevatin.jpg";
import molenLogo from "./assets/molen.jpg";

function App() {
  return (
    <Router>
      <div className="main-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects/print"
            element={
              <ProjectDetail
                title="Print and Go"
                description="Print and Go is a self-service printing system designed to modernize traditional printing shops. The system allows customers to upload documents online, make digital payments, and collect their prints without direct assistance from staff. This reduces queues, improves efficiency, and enables businesses to operate with fewer resources. For printing shop owners, Print and Go offers sales tracking, automated price calculation, and better transaction management, helping them adapt to the growing demand for fast, contactless services."
                logo={printLogo}
                website="https://drive.google.com/uc?export=download&id=13y80_eE5cvY4VzcvzY5HH3FASUP3bJf8"
                isDownload={false}
              />
            }
          />
          <Route
            path="/projects/massa"
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
            path="/projects/kingshcut"
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
            path="/projects/game"
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
            path="/projects/molen"
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
      </div>
    </Router>
  );
}

export default App;
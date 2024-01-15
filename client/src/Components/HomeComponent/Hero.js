import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";
import Footer from "../FooterComponent/Footer";

function Hero() {
  return (
    <div>
      <div className="hero-container">
        <video autoPlay loop muted>
          <source src="../media/video-2.mp4" type="video/mp4" />
        </video>
        <h1>Welcome to Webnotes</h1>
        <p>Get started with your first note today!</p>

        <Link to="/NotesList" className="btn-add-page">
          Start now
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Hero;

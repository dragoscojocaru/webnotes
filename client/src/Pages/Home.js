import Hero from "../Components/HomeComponent/Hero.js";
import React from "react";
import Navbar from "../Components/NavbarComponents/NavbarComponent.jsx";
import "../Components/NotesList.css";

export default function Home() {
  return (
    <div id="main-container">
      <Navbar />
      <Hero />
    </div>
  );
}

import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import TestPage from "./components/testPage";
import ResultPage from "./components/resultPage";
import HomePage from "./components/homePage";
import AboutSection from "./components/about";
import TeamSection from "./components/teampage";
import ContactSection from "./components/contactForm";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/test" element={<TestPage />} />
        <Route exact path="/result" element={<ResultPage />} />
        <Route exact path="/about" element={<AboutSection />} />
        <Route exact path="/team" element={<TeamSection />} />
        <Route exact path="/contact" element={<ContactSection />} />
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";

import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      {/* hero section */}
      <section className="hero-section text-center d-flex flex-column justify-content-between align-items-center">
        <h1 className="heading text-capitalize">
          Innovating Skin Wellness Through Detection
        </h1>
        <h3 className="text-capitalize">Fast, Accurate, and Secure</h3>
        <button className="btn btn-white" onClick={() => navigate("/test")}>
          quick check-up
        </button>
      </section>
    </div>
  );
};

export default HomePage;

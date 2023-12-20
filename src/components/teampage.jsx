import React from "react";
import priyanshi from "../assets/priyanshi.jpg";
import pranay from "../assets/pranay.png";
import prateek from "../assets/prateek.jpg";

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="container">
        <h1 className="heading">Meet Our team</h1>
        <div className="row d-flex justify-content-evenly align-items-center">
          {/* priyanshi */}
          <div className="team-card text-center">
            <img src={priyanshi} className="rounded-circle" alt="Priyanshi" />
            <p>
              <strong>Priyanshi Agrawal</strong>
            </p>
            <p className="text-uppercase">Developer</p>
            <p>
              <a
                href="https://github.com/priyanshi1282"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Add GitHub SVG here */}
              </a>
              <a
                href="linkedin.com/in/priyanshi-agrawal-88b6341bb"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Add LinkedIn SVG here */}
              </a>
            </p>
          </div>

          {/* pranay */}
          <div className="team-card text-center">
            <img src={pranay} className="rounded-circle" alt="Pranay" />
            <p>
              <strong>Pranay Nagpure</strong>
            </p>
            <p className="text-uppercase">Developer</p>
            <p>
              <a
                href="https://github.com/PranayN13"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Add GitHub SVG here */}
              </a>
              <a
                href="https://www.linkedin.com/in/pranayn13/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Add LinkedIn SVG here */}
              </a>
            </p>
          </div>

          {/* prateek */}
          <div className="team-card text-center">
            <img src={prateek} className="rounded-circle" alt="Prateek" />
            <p>
              <strong>Prateek Thakur</strong>
            </p>
            <p className="text-uppercase">Developer</p>
            <p>
              <a
                href="https://github.com/prateekthakur272"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Add GitHub SVG here */}
              </a>
              <a
                href="https://www.linkedin.com/in/prateek-thakur-452127216/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Add LinkedIn SVG here */}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

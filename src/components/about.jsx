import React from "react";
import aboutImg from "../assets/about-img.png";

const AboutSection = () => {
  return (
    <section className="about-section">
      <img src={aboutImg} alt="About" />
      <div className="container">
        <div className="row">
          <div className="col-5">
            <h1 className="heading">An Overview of Our Service</h1>
          </div>
          <div className="col-2"></div>
          <div className="col-5">
            <p>
              At dermDetect, we use advanced technology to empower you with
              quick and accurate skin cancer detection. Our mission is to ensure
              skin wellness through innovation and early insights.
            </p>
            <ul>
              <li>Quick and Easy Testing</li>
              <li>Confidential and Secure</li>
              <li>Accurate Results</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

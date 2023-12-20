import React from "react";
import resultImage from "../assets/skin-cancer.jpg";

const ResultPage = () => {
  return (
    <div className="result-page container">
      <div className="row">
        <div className="col-5">
          <img className="result-img" src={resultImage} alt="test image" />
        </div>
        <div className="col-1"></div>
        <div className="col-6 d-flex flex-column justify-content-between">
          <h1 className="heading">Your Skin Analysis Results</h1>
          <hr />
          <h3>
            Test Result : <span>Class name</span>
          </h3>
          <p>
            Malignant tumors can spread rapidly and require treatment to avoid
            spread. If they are caught early, treatment is likely to be surgery
            with possible chemotherapy or radiotherapy.
          </p>
          <button className="btn btn-blue">Test Again</button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;

import React from "react";
import contactImg from "../assets/contact-us.jpg";

const ContactSection = () => {
  return (
    <section className="contact-section container">
      <div className="row">
        <div className="col-5">
          <h1 className="heading">Contact us</h1>
          <img src={contactImg} alt="Contact" />
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <form action="mailto:priyanshiagrawal1282@gmail.com">
            <label>Name</label>
            <br />
            <input type="text" />
            <br />
            <label>Email</label>
            <br />
            <input type="email" />
            <br />
            <label>Message</label>
            <br />
            <textarea cols="20" rows="10"></textarea>
            <br />
            <button className="btn btn-blue">send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

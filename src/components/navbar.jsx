import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../assets/main-logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="nav-container d-flex justify-content-between align-items-center">
      <div className="brand-logo">
        <img src={logo} onClick={() => navigate("/")} alt="dermDetect" />
      </div>
      <ul className="nav-list d-flex justify-content-between align-items-center">
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          {/* Update the 'to' prop with the correct path for the Team page */}
          <NavLink to="/team" className="nav-link">
            Team
          </NavLink>
        </li>
        <li className="nav-item">
          {/* Update the 'to' prop with the correct path for the Contact page */}
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </li>
        {/* Login section */}
        <li className="nav-item" id="login">
          <button className="btn btn-white">Login</button>
          <div className="login-form">
            <form>
              <label>Email</label>
              <br />
              <input type="email" />
              <br />
              <label>Password</label>
              <br />
              <input type="password" />
              <br />
              <button type="submit" className="btn btn-blue">
                Login
              </button>
            </form>
            <hr />
            <span>or</span>
            <button className="btn btn-outline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={30}
                width={30}
                viewBox="0 0 640 512"
              >
                <path
                  fill="#df452a"
                  d="M386.1 228.5c1.8 9.7 3.1 19.4 3.1 32C389.2 370.2 315.6 448 204.8 448c-106.1 0-192-85.9-192-192s85.9-192 192-192c51.9 0 95.1 18.9 128.6 50.3l-52.1 50c-14.1-13.6-39-29.6-76.5-29.6-65.5 0-118.9 54.2-118.9 121.3 0 67.1 53.4 121.3 118.9 121.3 76 0 104.5-54.7 109-82.8H204.8v-66h181.3zm185.4 6.4V179.2h-56v55.7h-55.7v56h55.7v55.7h56v-55.7H627.2v-56h-55.7z"
                />
              </svg>
              Login with google
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

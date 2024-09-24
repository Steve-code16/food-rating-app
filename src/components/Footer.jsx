import React from "react";
import { Link } from "react-router-dom";
import "./FooterStyles.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="left-col">
          <Link to="/" className="logo">
            <img src="./logo.png" width="70" height="70" />
          </Link>
          <div className="social-media">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p className="rights-text">
            &copy; {new Date(Date.now()).getFullYear()} Created By Steve All
            Rights Reserved
          </p>
        </div>

        <div className="right-col">
          <h2>Our Newsletter</h2>
          <div className="acc-border"></div>
          <p>Enter your Email to get our news and updates</p>
          <form className="newsletter-form">
            <input
              type="text"
              name=""
              className="txtb"
              placeholder="Enter Your Email"
            />
            <input type="submit" name="" className="btn" value="submit" />
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

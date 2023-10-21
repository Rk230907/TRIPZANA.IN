import React from "react";
import "./Footer.css"; // Import your CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content" id="contact">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1-123-456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/destinations">Destinations</a>
          <a href="/about">About Us</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Tourism Website</p>
      </div>
    </footer>
  );
}

export default Footer;

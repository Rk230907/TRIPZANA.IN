import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Header.css";

function Header() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact"); // Get the contact section by ID
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth", // Add smooth behavior for animation
      });
    }
  };
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src={process.env.PUBLIC_URL + "/logo.jpg"} alt="Tourism Logo" />
          <h1>TRIPZANA.IN</h1>
        </div>
        <p className="tagline">Tour with us! :)</p>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link> {/* Use Link to navigate to Home */}
          </li>
          <li>
            <Link to="/destinations">Destinations</Link>{" "}
            {/* Use Link to navigate to Destinations */}
          </li>
          <li>
            <Link to="/about">About Us</Link>{" "}
            {/* Use Link to navigate to About */}
          </li>
          <li>
            <a href="#" onClick={scrollToContact}>
              Contact Us
            </a>{" "}
            {/* Use onClick to trigger smooth scrolling */}
            {/* Add id attribute for scrolling to Contact */}
            {/* Use Link to navigate to Contact */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

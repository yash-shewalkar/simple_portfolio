/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";
import { Link } from 'react-scroll';

const Header = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(255,255,255,0.75)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <Link to="home" smooth={true} duration={500}>Home</Link>
      <Link to="about" smooth={true} duration={500}>About</Link>
      <Link to="portfolio" smooth={true} duration={500}>Portfolio</Link>
      <Link to="footer" smooth={true} duration={500}>Contact</Link>
    </div>
  );
};

export default Header;

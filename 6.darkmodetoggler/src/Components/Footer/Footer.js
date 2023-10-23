import React from "react";
import "./Footer.css";
const Footer = ({myTheme}) => {
  return (
    <footer className="footer --flex-center" data-theme = {myTheme}>
      <p>copyrights &copy; 2023</p>
    </footer>
  );
};

export default Footer;

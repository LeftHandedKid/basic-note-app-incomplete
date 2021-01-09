import React from "react";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer className="footer">
      <p>CopyRight &copy; {currentYear} All Rights Reserved </p>
    </footer>
  );
};

export default Footer;
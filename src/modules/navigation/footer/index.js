import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer><div className="footer-subscribe">
        Copyright<span> </span>
        <a href="mailto:info@jdev.pl" title="Napisz do autora">
          <span className="signature"><span className="firstname-sign">
            Mikołaj
          </span>
          <span className="lastname-sign">
            Jadczak</span>
          </span>
        </a>
    </div></footer>
  );
};

export default Footer;

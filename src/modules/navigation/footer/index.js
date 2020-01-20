import React from "react";
import "./footer.css";
import PropTypes from "prop-types";

const Footer = ({label}) => {
  return (
    <footer><div className="footer-subscribe">
        Copyright<span> </span>
      <a href="https://jdev.pl" target="_blank" rel="noreferrer noopener" title={label}>
          <span className="signature"><span className="firstname-sign">
            Mikołaj
          </span>
          <span> </span>
          <span className="lastname-sign">
            Jadczak</span>
          </span>
        </a>
    </div></footer>
  );
};

export default Footer;
Footer.propTypes = { label: PropTypes.string };

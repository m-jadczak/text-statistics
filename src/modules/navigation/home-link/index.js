import React from "react";
import "./home-link.css";
import PropTypes from "prop-types";

const HomeLink = ({label}) => {
  return (
    <div className="svg-container">
      <div title={label} className="nav-link home-link">
      </div>
      <div className="link-title link-title1">{label}</div>

    </div>
  );
};

export default HomeLink;
HomeLink.propTypes = { label: PropTypes.string };

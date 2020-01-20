import React from "react";
import "./data-link.css";
import PropTypes from "prop-types";

const DataLink = ({label}) => {
  return (
    <div className="svg-container">
      <div title={label} className="nav-link data-link">
      </div>
      <div className="link-title link-title1">{label}</div>
    </div>
  );
};

export default DataLink;
DataLink.propTypes = { label: PropTypes.string };

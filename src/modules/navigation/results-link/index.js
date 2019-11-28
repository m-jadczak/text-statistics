import React, {useEffect, useRef} from "react";
import PropTypes from "prop-types";
import "./results-link.css";
import Proflie from "./profile";

const ResultsLink = ({isActive}) => {
  let isJustMounted = useRef(false);
  useEffect(()=>{isJustMounted.current=true;},[]);

  return (
    <div className="svg-container">
      <div title="Pokaż wyniki" className="nav-link results-link">
        <Proflie isJustMounted={isJustMounted.current} isActive={isActive} key={isActive}/>
      </div>
      <div className="link-title link-title1">Pokaż wyniki</div>
    </div>
  );
};

export default ResultsLink;

ResultsLink.propTypes = {
  isActive: PropTypes.bool
};

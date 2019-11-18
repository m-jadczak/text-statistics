import React, {useRef} from "react";
import PropTypes from "prop-types";

import "./loading-input-data.css";

const LoadingInputData = ({appStateHook}) => {
  const refTextArea = useRef();

  return <form onSubmit={(e)=>{e.preventDefault(); onSubmit(appStateHook,refTextArea);}} className="panel input-panel">
          <h2 className="flex-container">Wpisz lub wklej tekst</h2>
          <div aria-label="Wpisz lub wklej skopiowany tekst..." className="flex-container flex-direction-responsive">
            <textarea ref={refTextArea} defaultValue="Wpisz lub wklej tekst."></textarea>
            <button type="submit">Wczytaj dane</button>
          </div>
        </form>;
};

const onSubmit = ({setAppState},refTextArea)=>{
  const resultsLink = document.querySelector("a[href=\"#results\"]");

  setAppState({buffer:refTextArea.current.value, status:"LOADED"});
  if(resultsLink) resultsLink.click();
};

export default LoadingInputData;

LoadingInputData.propTypes = { appStateHook: PropTypes.object.isRequired };

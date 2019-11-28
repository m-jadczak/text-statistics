import React, {useRef} from "react";
import PropTypes from "prop-types";

import "./loading-input-data.css";

const LoadingInputData = ({appStateHook}) => {
  const refTextArea = useRef();

  return <form onSubmit={(e)=>{e.preventDefault(); onSubmit(appStateHook,refTextArea);}} className="panel input-panel">
          <h2 className="flex-container">Wpisz lub wklej tekst</h2>
          <div aria-label="Wpisz lub wklej skopiowany tekst..." className="flex-container flex-direction-responsive">
            <textarea onKeyDown={(e)=>onKeyDown(e)} onFocus={(e)=>onFocus(e)} ref={refTextArea} defaultValue="Wpisz lub wklej tekst."></textarea>
            <button type="submit" onClick={(e)=>e.target.blur()}><span className="submit-image button-image"></span>Wczytaj dane</button>
          </div>
        </form>;
};

const onFocus = (e)=>{
  e.target.setSelectionRange(0, e.target.value.length);
};

const onKeyDown = (e)=>{
  if (e.keyCode === 38 || e.keyCode === 40) {
    e.nativeEvent.stopImmediatePropagation();
  }
};

const onSubmit = ({setAppState},refTextArea)=>{
  setAppState({buffer:null,status:"READY"});
  const resultsLink = document.querySelector("a[href=\"#results\"]");

  setTimeout(()=>setAppState({buffer:refTextArea.current.value, status:"LOADED"}),10);
  if(resultsLink) resultsLink.click();
};

export default LoadingInputData;

LoadingInputData.propTypes = { appStateHook: PropTypes.object.isRequired };

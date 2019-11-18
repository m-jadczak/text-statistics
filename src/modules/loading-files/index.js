import React, {useRef} from "react";
import PropTypes from "prop-types";
import "./loading-files.css";

const LoadingFiles = ({appStateHook}) => {
  const refFileInput = useRef();

  return(

    <div className="panel file-panel">
      <h2 id="file-loader-header" className="flex-container" key="header">Załaduj z pliku tekstowego (.txt)</h2>
      <input
        className="file-input"
        ref={refFileInput}
        aria-labelledby="file-loader-header"
        type="file" name="file" key="file-loader"
        accept=".txt"
        onChange={(e)=>onChangeHandler(refFileInput.current,e,appStateHook)}/>
      <div className="flex-container"><button onClick={()=> refFileInput.current.click()}> LOADER </button></div>
    </div>
);};

const onChangeHandler = (FileInput,e,{setAppState}) => {
  const file =e.target.files[0];
  const resultsLink = document.querySelector("a[href=\"#results\"]");

  if(file){
    setAppState({status:"LOADING"});
    file.text()
    .then(result => setAppState({status: result?"LOADED":"READY",buffer:result}))
    .then(()=>{
      if(resultsLink) resultsLink.click();
      return FileInput.value=null;}
    );
  }
};

export default LoadingFiles;

LoadingFiles.propTypes = { appStateHook: PropTypes.object.isRequired };

import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./loading-files.css";
import WebWorker from "../../common/classes/WebWorker";
import worker from "./worker/worker.js";

const LoadingFiles = ({ appStateHook }) => {
  const refFileInput = useRef();
  const workerInctance = useRef();
  const setAppState = appStateHook.setAppState;
  const status = appStateHook.appState.status;

  useEffect(() => {
    const resultsLink = document.querySelector("a[href=\"#results\"]");
    const workerHandler = e => {
      setTimeout(() => setAppState({ status: e.data ? "LOADED" : "READY", buffer: e.data }), 10);
      if (resultsLink) resultsLink.click();
      refFileInput.current.value = null;
    };
    const errorHandler = () => {
      setAppState({ status: "ERROR" });
    };

    workerInctance.current = new WebWorker(worker);
    workerInctance.current.addEventListener("message", workerHandler);
    workerInctance.current.addEventListener("error", errorHandler);

    return () => {
      if (workerInctance.current) {
        workerInctance.current.removeEventListener("message", workerHandler);
        workerInctance.current.removeEventListener("error", errorHandler);
        workerInctance.current.terminate();
      }
    };

  }, [setAppState]);

  return (

    <div className="panel file-panel">
      <h2 id="file-loader-header" className="flex-container" key="header">Załaduj z pliku tekstowego (.txt)</h2>
      <input
        className="file-input"
        ref={refFileInput}
        aria-labelledby="file-loader-header"
        type="file" name="file" key="file-loader"
        accept=".txt"
        onChange={(e)=>onChangeHandler(setAppState,e,workerInctance.current)}/>
      <div className="flex-container"><button className={status==="LOADING"?"loading":""} onClick={()=> {return refFileInput.current.click();}}><span className="file-image button-image"></span> Załaduj z pliku<span className="sup">*</span></button></div>
      <span className="font-small footnote sup">*Edytory tekstu często po zapisaniu dokumentu dodają na jego końcu znak końca linii.</span>
      <p className={status==="FILE_TO_BIG_ERROR"?"":"invisable"}>Plik, który wybrałeś jest za duży. Maksymalny rozmiar pliku to 300 MB.</p>
    </div>
  );
};

const onChangeHandler = (setAppState, e, workerInctance) => {
  const file = e.target.files[0];
  if (file.size > 316569164) {
    setAppState({ status: "FILE_TO_BIG_ERROR" });
  } else {
    setAppState({ status: "LOADING" });
    if (file && workerInctance) {
      workerInctance.postMessage(file);
    }
  }
};

export default LoadingFiles;

LoadingFiles.propTypes = { appStateHook: PropTypes.object.isRequired };

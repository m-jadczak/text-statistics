import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./loading-files.css";
import WebWorker from "../../common/classes/WebWorker";
import worker from "./worker/worker.js";
import {useTranslate } from "react-translate";

const LoadingFiles = ({ appStateHook }) => {
  const refFileInput = useRef();
  const workerInctance = useRef();
  const setAppState = appStateHook.setAppState;
  const status = appStateHook.appState.status;
  const t = useTranslate("LoadingFiles");

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
      <h2 id="file-loader-header" className="flex-container" key="header">{t("HEADER")} (.txt)</h2>
      <input
        className="file-input"
        ref={refFileInput}
        aria-labelledby="file-loader-header"
        type="file" name="file" key="file-loader"
        accept=".txt"
        onChange={(e)=>onChangeHandler(setAppState,e,workerInctance.current)}/>
      <div className="flex-container"><button className={status==="LOADING"?"loading":""} onClick={()=> {return refFileInput.current.click();}}><span className="file-image button-image"></span>{t("LOAD_FROM_FILE")}<span className="sup">*</span></button></div>
      <span className="font-small footnote sup">*{t("*")}</span>
      <p className={status==="FILE_TO_BIG_ERROR"?"":"invisable"}>{t("TO_BIG")}</p>
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

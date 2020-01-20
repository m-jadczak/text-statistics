import React, {useEffect,useRef} from "react";
import "./stats-generator.css";

import worker from "./calculate/worker.js";
import WebWorker from "../../../common/classes/WebWorker";
import {useTranslate } from "react-translate";


import PropTypes from "prop-types";

const StatsGenerator = ({appStateHook,setStatistics}) => {
  const t = useTranslate("StatsGenerator");
  const workerInctance = useRef();
  const setAppState = appStateHook.setAppState;
  const status = appStateHook.appState.status;
  const bufferLength = (appStateHook.appState.buffer) ? appStateHook.appState.buffer.length : 0;

  useEffect(()=>{
  let fadeDelay, workingDelay;
    const workerHandler = e => {
      setStatistics(e.data);

      workingDelay = setTimeout(()=>setAppState({status:"PREPARING_RESULTS"}),1400);
      fadeDelay = setTimeout(()=>setAppState({status:"DONE"}),2000);
    };

    const errorHandler = () => {
      setAppState({status:"ERROR"});
    };

        workerInctance.current = new WebWorker(worker);
        workerInctance.current.addEventListener("message", workerHandler);
        workerInctance.current.addEventListener("error", errorHandler);

    return ()=>{
      if (workerInctance)
        clearTimeout(fadeDelay);
        clearTimeout(workingDelay);
        workerInctance.current.removeEventListener("message",workerHandler);
        workerInctance.current.removeEventListener("error",errorHandler);
        workerInctance.current.terminate();
      };


  },[setAppState,setStatistics]);

  return <button className={classMaker(status,bufferLength)}
                 onClick={(e)=>onClick(e,appStateHook,workerInctance.current,t)}>
                  <span className="button-image cogs-image"></span><span className="button-title">{t("BUTTON")}</span>
         </button>;
};

const classMaker = (status,bufferLength) => {
  const isWorking = ()=>{
    return status==="WORKING"?" working":"";
  };
  const isBigData = () => {
    return bufferLength>2000000 ? " big-data" : "";
  };

  return `generate-button${isWorking()}${isBigData()}`;
};

const onClick = (e,{setAppState,appState}, workerInctance,t)=> {
  let translate = {"SPACE":t("SPACE"),"EOL":t("EOL"),"TAB":t("TAB"),"FORM_FEED":t("FORM_FEED"),"WHITE":t("WHITE")};
  e.target.blur();
  if(appState.status==="LOADED"){
    setAppState({status:"WORKING"});
    workerInctance.postMessage([appState.buffer,translate]);
  }
};

StatsGenerator.propTypes = {
  appStateHook: PropTypes.object.isRequired,
  setStatistics: PropTypes.func
};

export default StatsGenerator;

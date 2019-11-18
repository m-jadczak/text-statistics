import React, {useEffect,useRef} from "react";
import "./generate-stats.css";

import worker from "./calculate/worker.js";
import WebWorker from "./calculate/WebWorker";

import PropTypes from "prop-types";

const GenerateStats = ({appStateHook,setStatistics}) => {
  const workerInctance = useRef();
  const setAppState = appStateHook.setAppState;
  const status = appStateHook.appState.status;

  useEffect(()=>{
    workerInctance.current = new WebWorker(worker);
    let fadeDelay, workingDelay;
    const workerHandler = e => {
      setStatistics(e.data);
      workingDelay = setTimeout(()=>setAppState({status:"PREPARING_RESULTS"}),1400);
      fadeDelay = setTimeout(()=>setAppState({status:"DONE"}),2000);
    };
    workerInctance.current.addEventListener("message", workerHandler);
    return ()=>{
                clearTimeout(fadeDelay);
                clearTimeout(workingDelay);
                workerInctance.current.removeEventListener("message",workerHandler);
              };
  },[setAppState,setStatistics]);
  return <button className={`generate-button${status==="WORKING"?
                  " working":""}`}
                 onClick={()=>onClick(appStateHook,workerInctance.current)}>Wygeneruj statystyki</button>;
};

const onClick = ({setAppState,appState}, workerInctance)=> {
  setAppState({status:"WORKING"});
  workerInctance.postMessage(appState.buffer);
};

GenerateStats.propTypes = {
  appStateHook: PropTypes.object.isRequired,
  setStatistics: PropTypes.func };

export default GenerateStats;

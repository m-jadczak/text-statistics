import React, {useState} from "react";
import PropTypes from "prop-types";
import "./display-results.css";
import {DataNotFound, GenerateStats} from "./components";

const DisplayResults = ({appStateHook}) => {
  const [statistics,setStatistics] = useState({});

  return (
    <div className={`panel results-panel${appStateHook.appState.status==="PREPARING_RESULTS"?" results-panel-prepering":""}`}>
      {chooseComponent(appStateHook,statistics,setStatistics)}
    </div>
  );
};


const chooseComponent = (appStateHook,statistics,setStatistics) =>{
  const status = appStateHook.appState.status;

// TODO: GRID LEYAOUT

  switch (status) {
    case "LOADED":
    case "WORKING":
    case "PREPARING_RESULTS":
      return <GenerateStats setStatistics={setStatistics} appStateHook={appStateHook}/>;
    case "DONE":
      return <p>
        {statistics.allChars}
        {statistics.whiteChars}
      </p>;
    default:
      return <DataNotFound/>;
  }
};

DisplayResults.propTypes = {   appStateHook: PropTypes.object.isRequired };

export default DisplayResults;

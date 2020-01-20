import React, {useState} from "react";
import PropTypes from "prop-types";
import "./display-results.css";
import {DataNotFound, StatsGenerator, StatsDisplayer} from "./components";
import {useTranslate } from "react-translate";

const DisplayResults = ({appStateHook}) => {
  const [statistics,setStatistics] = useState({});
  const t = useTranslate("DisplayResults");

  return (
    <div className={`panel results-panel${appStateHook.appState.status==="PREPARING_RESULTS"?" results-panel-prepering":""}`}>
      {chooseComponent(appStateHook,statistics,setStatistics,t)}
    </div>
  );
};


const chooseComponent = (appStateHook,statistics,setStatistics,t) =>{
  const status = appStateHook.appState.status;

  switch (status) {
      case "LOADED":
      case "WORKING":
      case "PREPARING_RESULTS":
      return <StatsGenerator setStatistics={setStatistics} appStateHook={appStateHook}/>;
    case "DONE":
      return <StatsDisplayer statistics={statistics}/>;
    case "ERROR":
      return [<h2 key="1">{t("HEADER_ERROR")} :(</h2>, <p key="2">{t("DESC_ERROR")}</p>];
    default:
      return <DataNotFound/>;
  }
};

DisplayResults.propTypes = {   appStateHook: PropTypes.object.isRequired };

export default DisplayResults;

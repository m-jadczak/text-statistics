import React, {useState} from "react";
import PropTypes from "prop-types";
import "./display-results.css";
import {DataNotFound, StatsGenerator, StatsDisplayer} from "./components";

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

  switch (status) {
      case "LOADED":
      case "WORKING":
      case "PREPARING_RESULTS":
      return <StatsGenerator setStatistics={setStatistics} appStateHook={appStateHook}/>;
    case "DONE":
      return <StatsDisplayer statistics={statistics}/>;
    case "ERROR":
      return [<h2 key="1">Ups... Coś poszło nie tak :(</h2>, <p key="2">Spróbuj ponownie wczytać dane. Jeżeli problem będzie się powtarzał - napisz do mnie. Adres znajduje się w stopce. Kliknij na moje imię i nazwisko.</p>];
    default:
      return <DataNotFound/>;
  }
};

DisplayResults.propTypes = {   appStateHook: PropTypes.object.isRequired };

export default DisplayResults;

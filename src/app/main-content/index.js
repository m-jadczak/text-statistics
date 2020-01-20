import React from "react";
import PropTypes from "prop-types";
import LoadingInputData from "../../modules/loading-input-data";
import LoadingFiles from "../../modules/loading-files";
import DisplayResults from "../../modules/display-results";
import Home from "./home-page";
import LangSwitch from "./lang-switch";

const MainContent = ({ appStateHook,handleLang }) => {
  return (
    <main>
    <div className="section-container" id={"home-page"}>
      <section>
        <LangSwitch handleLang={handleLang}/>
        <Home/>
      </section>
    </div>
    <div className="section-container" id={"data-handling"}>
      <section>
        <LoadingInputData appStateHook={appStateHook}/>
        <LoadingFiles appStateHook={appStateHook}/>
      </section>
    </div>
    <div className="section-container" id={"results"}>
      <section>
        <DisplayResults appStateHook={appStateHook}/>
      </section>
    </div>

  </main>);
};

export default MainContent;
MainContent.propTypes = {
  appStateHook: PropTypes.object.isRequired,
  handleLang: PropTypes.object.isRequired
};

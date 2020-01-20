import React, {useEffect} from "react";
import "./stats-displayer.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import PropTypes from "prop-types";

import GeneralStats from "./general-stats";
import Frequency from "./frequency";
import Punctuation from "./punctuation";
import Sentences from "./sentences";
import Numbers from "./numbers";
import {useTranslate } from "react-translate";


const StatsDisplayer = ({statistics}) => {
  const t = useTranslate("StatsDisplayer");

  useEffect(()=>{});

  return (
  [<div key="0" className="displayed-results">
    {GeneralStats(statistics)}
    {Frequency(statistics)}
    {Punctuation(statistics)}
    {Sentences(statistics)}
    {Numbers(statistics)}



  </div>,
  <AnchorLink key="1" href="#data-handling">{t("LOAD_OTHER")}</AnchorLink>]
  );
};



StatsDisplayer.propTypes = {
  statistics: PropTypes.object
};

export default StatsDisplayer;

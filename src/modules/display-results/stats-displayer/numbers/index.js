import React from "react";
import PropTypes from "prop-types";
import {useTranslate } from "react-translate";


const Numbers = (statistics) => {
  const t = useTranslate("Numbers");
  const {numbers} = statistics;

return (
  <div className="grid">
    <h3>{t("HEADER")}</h3>
      <span className="stat-label">{t("NUMBERS_COUNT")}</span>
      <span className="stat-result"> {numbers.count || t("NO_NUMBERS")}</span>

      {numbers.count ? [<span key="span1" className="stat-label">{t("MAX")}</span>,
      <span key="span2" className="stat-result"> {numbers.max || 0}</span>,

      <span key="span3" className="stat-label">{t("MIN")}</span>,
      <span key="span4" className="stat-result"> {numbers.min || 0}</span>] : ""}
  </div>
  );
};

Numbers.propTypes = { statistics: PropTypes.object };

export default Numbers;

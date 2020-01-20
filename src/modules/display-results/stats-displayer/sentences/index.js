import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import PropTypes from "prop-types";
import {useTranslate } from "react-translate";

const Sentences = (statistics) => {
  const t = useTranslate("Sentences");
  const {sentences} = statistics;

return (
  <div className="grid">
    <h3>{t("HEADER")}</h3>
    <span className="stat-label">{t("SENTENCES_COUNT")}</span>
    <span className="stat-result"> {sentences.count || 0}</span>

    <span className="stat-label">{t("AVERAGE")}<AnchorLink  href="#ref4" title={t("PAR_TEMPLATE")}>[*]</AnchorLink></span>
    <span className="stat-result"> {(sentences.totalWords/sentences.count).toFixed(2) || 0}</span>

    <span className="stat-label">{t("MAX")}</span>
    <span className="stat-result"> {sentences.max || 0}</span>

    <span className="stat-label">{t("MIN")}</span>
    <span className="stat-result"> {sentences.min || 0}</span>
    <p className="annotation" id="ref4">[*] {t("PAR_TEMPLATE")}</p>
  </div>
  );
};

Sentences.propTypes = { statistics: PropTypes.object };

export default Sentences;

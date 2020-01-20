import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import PropTypes from "prop-types";
import {useTranslate } from "react-translate";

const Punctuation = (statistics) => {
  const t = useTranslate("Punctuation");
  const {dividersCount, prosodicCount, extractionCount} = statistics;

return (
  <div className="grid">
    <h3>{t("HEADER")}</h3>
    <span className="stat-label">{t("PUNCTUATION_COUNT")}<AnchorLink  href="#ref2" title={t("PAR_TEMPLATE_1")}>[*]</AnchorLink>
    <AnchorLink  href="#ref2p2" title={t("PAR_TEMPLATE_2")}>[**]</AnchorLink></span>
    <span className="stat-result"> {(dividersCount||0)+(prosodicCount||0)+(extractionCount||0)}</span>

    <span className="stat-label">{t("DIVIDERS_COUNT")}</span>
    <span className="stat-result"> {dividersCount || 0}</span>

    <span className="stat-label">{t("PROSODIC_COUNT")}</span>
    <span className="stat-result"> {prosodicCount || 0}</span>

    <span className="stat-label"> {t("EXTRACTION_COUNT")} <AnchorLink  href="#ref3" title={t("PAR_TEMPLATE_3")}>[***]</AnchorLink></span>
    <span className="stat-result"> {extractionCount || 0}</span>

    <p className="annotation" id="ref2">[*] {t("PAR_TEMPLATE_1")}</p>
    <p className="annotation" id="ref2p2">[**] {t("PAR_TEMPLATE_2")}</p>
    <p className="annotation" id="ref3">[***] {t("PAR_TEMPLATE_3")}</p>
  </div>
);
};

Punctuation.propTypes = { statistics: PropTypes.object };

export default Punctuation;

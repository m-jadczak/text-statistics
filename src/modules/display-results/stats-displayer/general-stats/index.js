import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import PropTypes from "prop-types";
import {useTranslate } from "react-translate";

const GeneralStats = (statistics) => {
  const {wordsCount, allCharsCount, lettersCount, polishCount, digitsCount, whiteCount} = statistics;
    const t = useTranslate("GeneralStats");

return (
  <div className="grid">
    <h3>{t("HEADER")}</h3>
    <span className="stat-label">{t("WORDS_COUNT")} <AnchorLink  href="#ref1" title={t("PAR_TEMPLATE_1")}>[*]</AnchorLink></span>
    <span className="stat-result">{wordsCount || 0}</span>

    <span className="stat-label">{t("CHARS_COUNT")}<AnchorLink  href="#ref1p2" title={t("PAR_TEMPLATE_2")}>[**]</AnchorLink></span>
    <span className="stat-result">{allCharsCount || 0}</span>

    <span className="stat-label">{t("LETTERS_COUNT")}</span>
    <span className="stat-result">{lettersCount || 0}</span>

    <span className="stat-label">{t("POLISH_COUNT")}</span>
    <span className="stat-result"> {polishCount || 0}</span>

    <span className="stat-label">{t("DIGITS_COUNT")}</span>
    <span className="stat-result"> {digitsCount || 0}</span>

    <span className="stat-label">{t("WHITE_COUNT")}</span>
    <span className="stat-result"> {whiteCount || 0}</span>
    <p className="annotation" id="ref1">[*] {t("PAR_TEMPLATE_1")}</p>
    <p className="annotation" id="ref1">[**] {t("PAR_TEMPLATE_2")}</p>
  </div>
);
};

GeneralStats.propTypes = { statistics: PropTypes.object };

export default GeneralStats;

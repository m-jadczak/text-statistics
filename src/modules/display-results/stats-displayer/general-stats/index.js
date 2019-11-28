import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import PropTypes from "prop-types";

const  parTemplate1 = "Słowem jest ciąg złożony wyłącznie z liter. Każdy znak niebędący literą traktowany jest jako separator pomiędzy słowami.",

parTemplate1p2 = "Systemy operacyjne używają różnych znaków końca linii. System Windows na przykład używa w tym celu dwóch znaków (CR + LF). Aplikacja dla przejrzystości traktuje tę kombinację jako jeden znak końca linii.";

const GeneralStats = (statistics) => {
  const {wordsCount, allCharsCount, lettersCount, polishCount, digitsCount, whiteCount} = statistics;

return (
  <div className="grid">
    <h3>Statystyki ogólne</h3>
    <span className="stat-label">Liczba wszystkich słów <AnchorLink  href="#ref1" title={parTemplate1}>[*]</AnchorLink></span>
    <span className="stat-result">{wordsCount || 0}</span>

    <span className="stat-label"> Liczba wszystkich znaków<AnchorLink  href="#ref1p2" title={parTemplate1p2}>[**]</AnchorLink></span>
    <span className="stat-result">{allCharsCount || 0}</span>

    <span className="stat-label">Liczba liter</span>
    <span className="stat-result">{lettersCount || 0}</span>

    <span className="stat-label">Liczba polskich znaków</span>
    <span className="stat-result"> {polishCount || 0}</span>

    <span className="stat-label">Liczba cyfr</span>
    <span className="stat-result"> {digitsCount || 0}</span>

    <span className="stat-label">Liczba białych znaków (spacja, tabulator, znak końca linii itp.)</span>
    <span className="stat-result"> {whiteCount || 0}</span>
    <p className="annotation" id="ref1">[*] {parTemplate1}</p>
    <p className="annotation" id="ref1">[**] {parTemplate1p2}</p>
  </div>
);
};

GeneralStats.propTypes = { statistics: PropTypes.object };

export default GeneralStats;

import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import PropTypes from "prop-types";

const parTemplate2 = "Znak wielokropka liczony jest tylko wtedy gdy w tekście występuje znak wielokropka będący osobnym znakiem (wyglądający tak …). Jeżeli w tekście występują 3 kropki (czyli ...), liczone są wówczas osobno.",

parTemplate2p2 = "Separator dziesiętny w liczbach (np. 0.2 albo 12,21) oraz minus przed liczbą ( np. -121) nie są znakami interpunkcyjnymi.",

parTemplate3 = "Poza dwukropkiem, interpukcyjny znak wyodrębniający tworzy PARA znaków: znak otwierający oraz znak zamykający. Pojedyncze nawiasy, cudzysłowy itp. nie są zliczane.";

const Punctuation = (statistics) => {
  const {dividersCount, prosodicCount, extractionCount} = statistics;

return (
  <div className="grid">
    <h3>Interpunkcja</h3>
    <span className="stat-label">Liczba znaków interpunkcyjnych <AnchorLink  href="#ref2" title={parTemplate2}>[*]</AnchorLink>
    <AnchorLink  href="#ref2p2" title={parTemplate2p2}>[**]</AnchorLink></span>
    <span className="stat-result"> {(dividersCount||0)+(prosodicCount||0)+(extractionCount||0)}</span>

    <span className="stat-label">Liczba znaków oddzielających</span>
    <span className="stat-result"> {dividersCount || 0}</span>

    <span className="stat-label">Liczba znaków prozodycznych, emocji oraz opuszczenia</span>
    <span className="stat-result"> {prosodicCount || 0}</span>

    <span className="stat-label"> Liczba znaków wyodrębniających <AnchorLink  href="#ref3" title={parTemplate3}>[***]</AnchorLink></span>
    <span className="stat-result"> {extractionCount || 0}</span>

    <p className="annotation" id="ref2">[*] {parTemplate2}</p>
    <p className="annotation" id="ref2p2">[**] {parTemplate2p2}</p>
    <p className="annotation" id="ref3">[***] {parTemplate3}</p>
  </div>
);
};

Punctuation.propTypes = { statistics: PropTypes.object };

export default Punctuation;

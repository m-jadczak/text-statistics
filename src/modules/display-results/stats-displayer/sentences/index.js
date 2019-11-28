import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import PropTypes from "prop-types";

const parTemplate4 = "Aplikacja liczy wypowiedzenia zakończone jednym ze znaków: kropką (.), wykrzyknikiem (!), znakiem zapytania (?).";

const Sentences = (statistics) => {
  const {sentences} = statistics;

return (
  <div className="grid">
    <h3>Wypowiedzenia (zdania, równoważniki zdań, wykrzyknienia i zawiadomienia)</h3>
    <span className="stat-label">Liczba wypowiedzeń</span>
    <span className="stat-result"> {sentences.count || 0}</span>

    <span className="stat-label">Średnia liczba słów w wypowiedzeniu<AnchorLink  href="#ref4" title={parTemplate4}>[*]</AnchorLink></span>
    <span className="stat-result"> {(sentences.totalWords/sentences.count).toFixed(2) || 0}</span>

    <span className="stat-label">Liczba słów w najdłuższym wypowiedzeniu</span>
    <span className="stat-result"> {sentences.max || 0}</span>

    <span className="stat-label">Liczba słów w najkrótszym wypowiedzeniu</span>
    <span className="stat-result"> {sentences.min || 0}</span>
    <p className="annotation" id="ref4">[*] {parTemplate4}</p>
  </div>
  );
};

Sentences.propTypes = { statistics: PropTypes.object };

export default Sentences;

import React from "react";
import PropTypes from "prop-types";

const Numbers = (statistics) => {
  const {numbers} = statistics;

return (
  <div className="grid">
    <h3>Liczby w tekście</h3>
      <span className="stat-label">Liczb ogółem</span>
      <span className="stat-result"> {numbers.count || "BRAK LICZB W TEKŚCIE"}</span>

      {numbers.count ? [<span key="span1" className="stat-label">Największa liczba</span>,
      <span key="span2" className="stat-result"> {numbers.max || 0}</span>,

      <span key="span3" className="stat-label">Najmniejsza liczba</span>,
      <span key="span4" className="stat-result"> {numbers.min || 0}</span>] : ""}
  </div>
  );
};

Numbers.propTypes = { statistics: PropTypes.object };

export default Numbers;

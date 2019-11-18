import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll";

const DataNotFound = () => {
  return (
    <div className="data-not-found">
      <p>Nie wprowadzono żadnych danych.</p>
      <p>Dodaj dane do statystki w sekcji{" "}
      <AnchorLink
        onClick={(e)=>e.target.blur()}
        href="#data-handling" aria-label="Wprowadź dane">Wprowadź dane</AnchorLink>.</p>
    </div>
  );
};

export default DataNotFound;

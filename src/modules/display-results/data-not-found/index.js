import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {useTranslate } from "react-translate";

const DataNotFound = () => {
  const t = useTranslate("DataNotFound");
  return (
    <div className="data-not-found">
      <p>{t("HEADER")}</p>
      <p>{t("ADD_DATA")}{" "}
      <AnchorLink
        onClick={(e)=>e.target.blur()}
        href="#data-handling" aria-label={t("DATA_LABEL")}>{t("DATA_LABEL")}</AnchorLink>{t("ADD_DATA_1")}.</p>
    </div>
  );
};

export default DataNotFound;

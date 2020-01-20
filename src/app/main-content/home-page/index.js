import React from "react";
import {useTranslate } from "react-translate";

const Home = () => {
  const t = useTranslate("Home");

  return (
    <div className="panel home-page">
      <h1 key="home-header" className="flex-container">
        <span>T<span className="font-gold">S</span>T - {t("HEADER")}</span>
      </h1>
      <p>{t("CONTENT_1")} T<span className="font-gold">S</span>T{t("CONTENT_1E")}. {t("CONTENT_2")}</p>
      <p className="keyboard-only">{t("CONTENT_3")}</p>
      <p>{t("CONTENT_4")} <a href="mailto:info@jdev.pl" title={t("WRITE_TO")}>info@jdev.pl</a> {t("CONTENT_5")}</p>
  </div>);
};

export default Home;

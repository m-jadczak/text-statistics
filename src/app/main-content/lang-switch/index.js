import React, {useRef} from "react";
import PropTypes from "prop-types";
import "./lang-switch.css";
import {useTranslate } from "react-translate";

const LangSwitch = ({handleLang}) => {
  const t = useTranslate("LangSwitch");
  const buttonRef = useRef(null);
  const {toggleLang, lang, setLang} = handleLang;

  return (
      <button title={t("CHANGE_LANG")} aria-label={t("CHANGE_LANG")} ref={buttonRef} className={`languages current-${lang.locale}`}
            onClick={async ()=>{buttonRef.current.blur();setLang(await toggleLang(lang));}}>
              <span className="pl">PL</span>
              <span className="en">EN</span>
    </button>
  );
};
LangSwitch.propTypes = { handleLang: PropTypes.object };

export default LangSwitch;

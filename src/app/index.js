import React ,{useState,useEffect} from "react";
import "./app.css";

import Navigation from "../modules/navigation";
import MainContent from "./main-content";
import { TranslatorProvider } from "react-translate";
import defaulTranslation from "../lang/pl.js";

const TekStat = () => {
	const [appState,setAppState] = useState({buffer:null,status:"READY"});
	const [lang,setLang] = useState(defaulTranslation);
	useEffect(()=>{
		const changeLang = async () => {
			if((navigator.language || navigator.userLanguage).slice(0,2)!=="pl"){
				setLang(await toggleLang({locale:"pl"}));
			}
		};
		changeLang();
	},[]);

	return (
	<TranslatorProvider translations={lang}>
		<div className="app">
			<Navigation/>
			<MainContent appStateHook={{appState, setAppState}} handleLang={{toggleLang, lang, setLang}}/>
		</div>
	</TranslatorProvider>
	);
};

const toggleLang = async ({locale}) => {
  let module;
  if(locale!=="pl"){
    module = await import("../lang/pl.js");
  } else module = await import("../lang/en.js");
    return module.default;
};


export default TekStat;

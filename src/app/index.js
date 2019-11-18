import React ,{useState} from "react";
import "./app.css";

import Navigation from "../modules/navigation";
import MainContent from "./main-content";

const TekStat = () => {
	const [appState,setAppState] = useState({buffer:null,status:"READY"});

	return (
		<div className="app">
			<Navigation/>
			<MainContent appStateHook={{appState, setAppState}} />
			<footer>
			</footer>
		</div>
	);
};

export default TekStat;

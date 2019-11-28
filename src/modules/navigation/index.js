import React, { useEffect, useState } from "react";
import "./navigation.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {HomeLink,DataLink,ResultsLink,Logo,Footer} from "./components";

const LINK_IDS = ["home-page", "data-handling", "results"];

const Navigation = () => {
  const currentActive = useNavigation();

  return (<nav>
    <ul className="side-nav">
      <li><Logo/></li>
      <li><AnchorLink className={setActiveClass(0,currentActive)}
                      onClick={(e)=>e.target.blur()}
                      href="#home-page" aria-label="Strona główna">
                      <HomeLink/>
          </AnchorLink></li>
      <li><AnchorLink className={setActiveClass(1,currentActive)}
                      onClick={(e)=>e.target.blur()}
                      href="#data-handling" aria-label="Wprowadź dane"><DataLink/></AnchorLink></li>
      <li><AnchorLink className={setActiveClass(2,currentActive)}
                      onClick={(e)=>e.target.blur()}
                      href="#results" aria-label="Pokaż wyniki"><ResultsLink isActive={currentActive===2}/></AnchorLink></li>
                    <li><Footer/></li>
    </ul>
  </nav>);
};

const useNavigation = () => {
  const [currentActive,setActive] = useState(0);
  useEffect(()=>{
    handleScroll(0,setActive);
  },[]);

  useEffect(()=>{
    const scrollListner = ()=> handleScroll(currentActive,setActive);

    document.addEventListener("scroll", scrollListner);
    return ()=>document.removeEventListener("scroll", scrollListner);
  },[currentActive]);

  useEffect(()=>{
    const arrowsListner = (e)=> handleArrows(e,currentActive);
    document.addEventListener("keydown", arrowsListner);
    return ()=>document.removeEventListener("keydown", arrowsListner);
  },[currentActive]);

  return currentActive;
};

const setActiveClass = (linkNr,currentActive) => (linkNr===currentActive) ? "active" : "";

const handleScroll = (currentActive,setActive)=>{
  const sectionsBounds = [document.getElementById(LINK_IDS[0]).getBoundingClientRect(),
        document.getElementById(LINK_IDS[1]).getBoundingClientRect(),
        document.getElementById(LINK_IDS[2]).getBoundingClientRect()];

  const dist = sectionsBounds.map((bound)=>bound=bound.top);

  const offset = sectionsBounds[1].height/2;
  let activeSection;

  if(dist[1]>offset && dist[2]>0) {activeSection = 0;}
  else if (dist[0]<offset && dist[2]>offset) {activeSection = 1;}
  else if (dist[1]<offset && dist[0]<0) activeSection = 2;

    if(currentActive!==activeSection) {
      window.history.pushState(LINK_IDS[activeSection],LINK_IDS[activeSection],"#"+LINK_IDS[activeSection]);
      setActive(activeSection);
    }
};

const handleArrows = (e, currentActive)=> {
  if (currentActive>0 && e.keyCode === 38) {
      e.preventDefault();
      document.querySelector(`a[href="#${LINK_IDS[currentActive-1]}"]`).click();
  }
  else if (currentActive<2 && e.keyCode === 40) {
      e.preventDefault();
      document.querySelector(`a[href="#${LINK_IDS[currentActive+1]}"]`).click();
  }

};

export default Navigation;

import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import LangSwitch from "./index";

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("should render", ()=>{

  const mockedHandleLang = {
    toggleLang : jest.fn(),
    lang: {locale:"pl"},
    setLang: jest.fn()
  };

  act(()=>{
    render(<LangSwitch handleLang={mockedHandleLang}/>, container);
  });
  expect(container.firstChild.nodeName).toEqual("BUTTON");
});

it("should toggle to EN after click",()=>{
  let mockedHandleLang = {
    lang: {locale:"pl"},
    toggleLang : jest.fn().mockImplementation(lang => (lang.locale==="pl") ? mockedHandleLang.lang =  {locale:"en"} : mockedHandleLang.lang= {locale:"pl"}),
    setLang: jest.fn()
  };

  act(()=>{
    render(<LangSwitch handleLang={mockedHandleLang}/>, container);
  });

  const button = document.querySelector(".languages");
    expect(container.firstChild.classList).toContain("current-pl");

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(mockedHandleLang.toggleLang).toHaveBeenCalledTimes(1);
  expect(mockedHandleLang.lang.locale).toEqual("en");
  act(()=>{
    render(<LangSwitch handleLang={mockedHandleLang}/>, container);
  });
  expect(container.firstChild.classList).toContain("current-en");
});

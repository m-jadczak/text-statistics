import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import HomePage from "./index.js";
import {TranslatorProvider } from "react-translate";
import plLang from "lang/pl.js";
import enLang from "lang/en.js";

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

it("renders h1 correctyly with or wihout a choosen lang", ()=>{
  act(()=>{
    render(<HomePage/> ,container);
  });
  expect(container.firstChild).not.toEqual(undefined);

  act(()=>{
    render(	<TranslatorProvider translations={plLang}><HomePage/></TranslatorProvider> ,container);
  });
  expect(container.firstChild.firstChild.textContent).toBe("TST - Trafne Statystyki Tekstu");

  act(()=>{
    render(	<TranslatorProvider translations={enLang}><HomePage/></TranslatorProvider> ,container);
  });
  expect(container.firstChild.firstChild.textContent).toBe("TST - Accurate Text Statistics");
});

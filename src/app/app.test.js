import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from './index.js';

import mockLoadingInputData from "../modules/loading-input-data";
import mockLoadingFiles from "../modules/loading-files";

jest.mock("../modules/loading-files", () => {
  return function DummyLoad() {
    return (
      <div>

      </div>
    );
  };
});

jest.mock("../modules/loading-input-data", () => {
  return function DummyInput() {
    return (
      <div>

      </div>
    );
  };
});


let container = null, languageGetter;

beforeEach(() => {
  languageGetter = jest.spyOn(window.navigator, 'language', 'get')
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders without error",async ()=>{
  await act(async ()=>{
    render(<App />, container);
  });
  expect(container.firstChild).not.toEqual(undefined);
});


describe("default languges", ()=>{
  it("select default lang to polish for polish browser lang", async () => {
    languageGetter.mockReturnValue("pl");
    await act(async ()=>{
      render(<App />, container);
    });
    const title = document.querySelector(".home-page h1");
    expect(title.textContent).toEqual("TST - Trafne Statystyki Tekstu");
  });


  it("selects default lang to english for other than polish browser lang", async () => {
    languageGetter.mockReturnValue("fr");
    await act(async ()=>{
      render(<App />, container);
    });
    const title = document.querySelector(".home-page h1");
    expect(title.textContent).toEqual("TST - Accurate Text Statistics");
  });
});

it("toggles lang after setLang is invoked (lang button toggled)",async ()=>{
  languageGetter.mockReturnValue("pl");
  await act(async ()=>{
    render(<App />, container);
  });
  const title = document.querySelector(".home-page h1");
  expect(title.textContent).toEqual("TST - Trafne Statystyki Tekstu");

  let button = document.querySelector(".languages");
  await act(async () => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(title.textContent).toEqual("TST - Accurate Text Statistics");

  await act(async () => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(title.textContent).toEqual("TST - Trafne Statystyki Tekstu");
});

import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import MainContent from './index.js';

import mockLoadingInputData from "../../modules/loading-input-data";
import mockLoadingFiles from "../../modules/loading-files";

jest.mock("../../modules/loading-files", () => {
  return function DummyLoad() {
    return (
      <div>

      </div>
    );
  };
});

jest.mock("../../modules/loading-input-data", () => {
  return function DummyInput() {
    return (
      <div>

      </div>
    );
  };
});


let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders without error",async ()=>{
  const mockedHandleLang = {
    toggleLang : jest.fn(),
    lang: {locale:"pl"},
    setLang: jest.fn()
  };
  const mockedAppStateHook=
    {appState:"", setAppState:jest.fn()}

  await act(async ()=>{
    render(<MainContent appStateHook={mockedAppStateHook} handleLang={mockedHandleLang} />, container);
  });
  expect(container.firstChild).not.toEqual(undefined);
});

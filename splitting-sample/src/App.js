import React, { useState } from "react";
import loadable from "@loadable/component";
import logo from "./logo.svg";
import "./App.css";

const SplitMe = loadable(() => import("./components/SplitMe"), {
  fallback: <div>loading...</div>,
});

const App = () => {
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    setVisible(true);
  };

  const onMouseOver = () => {
    SplitMe.preload();
  };

  return (
    <div>
      <div className="app">
        <header className="App-header">
          <img src={logo} alt="logo" className="App-logo" />
          <p onClick={onClick} onMouseOver={onMouseOver}>
            Hello React!
          </p>
          {visible && <SplitMe />}
        </header>
      </div>
    </div>
  );
};

export default App;

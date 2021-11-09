import React, { Suspense, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const SplitMe = React.lazy(() => import("./components/SplitMe"));

const App = () => {
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    setVisible(true);
  };

  return (
    <div>
      <div className="app">
        <header className="App-header">
          <img src={logo} alt="logo" className="App-logo" />
          <p onClick={onClick}>Hello React!</p>
          <Suspense fallback={<div>loading...</div>}>
            {visible && <SplitMe />}
          </Suspense>
        </header>
      </div>
    </div>
  );
};

export default App;

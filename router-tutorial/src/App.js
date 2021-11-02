import React from "react";
import { Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
    </div>
  );
};

export default App;

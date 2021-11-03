import React from "react";
import { Link, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/velopert">velopert</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact />
      <Route path={["/about", "/info"]} component={About} />
      <Route path="/profile/:username" component={Profile} />
    </div>
  );
};

export default App;

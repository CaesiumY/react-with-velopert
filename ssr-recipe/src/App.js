import React from "react";
import { Route, Routes } from "react-router-dom";
import loadable from "@loadable/component";
import Menu from "./components/Menu";
const RedPage = loadable(() => import("./pages/BluePage"));
const BluePage = loadable(() => import("./pages/RedPage"));
const UsersPage = loadable(() => import("./pages/UsersPage"));

const App = () => {
  return (
    <div>
      <Menu />
      <hr />
      <Routes>
        <Route path="/red" element={<RedPage />} />
        <Route path="/blue" element={<BluePage />} />
        <Route path="/users/*" element={<UsersPage />} />
      </Routes>
    </div>
  );
};

export default App;

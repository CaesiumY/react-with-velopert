import React from "react";
import { Route, Routes } from "react-router-dom";
import UserContainer from "../containers/UserContainer";
import UsersContainer from "../containers/UsersContainer";

const UsersPage = () => {
  return (
    <>
      <UsersContainer />
      <Routes>
        <Route path=":id" element={<UserContainer />} />
      </Routes>
    </>
  );
};

export default UsersPage;

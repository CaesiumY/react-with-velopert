import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Users from "../components/Users";
import { getUsers } from "../modules/users";

const UsersContainer = () => {
  const users = useSelector(({ users }) => users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    if (users) return;
    dispatch(getUsers());
  }, [dispatch, users]);

  return <Users users={users} />;
};

export default UsersContainer;

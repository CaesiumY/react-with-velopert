import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import User from "../components/User";
import { usePreloader } from "../lib/PreloadContext";
import { getUser } from "../modules/users";

const UserContainer = () => {
  const { id } = useParams();
  const user = useSelector(({ users }) => users.user);
  const dispatch = useDispatch();

  usePreloader(() => dispatch(getUser(id)));

  useEffect(() => {
    if (user?.id === parseInt(id, 10)) return;
    dispatch(getUser(id));
  }, [id, user, dispatch]);

  if (!user) return null;

  return <User user={user} />;
};

export default UserContainer;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sample from "../components/Sample";

import { getPost, getUsers, GET_POST, GET_USERS } from "../modules/sample";

const SampleContainer = () => {
  const { post, users } = useSelector(({ sample }) => sample);
  const loading = useSelector(({ loading }) => loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const fn = async () => {
      try {
        dispatch(getPost(1));
        dispatch(getUsers());
      } catch (error) {
        console.error(error);
      }
    };

    fn();
  }, [dispatch]);

  return (
    <Sample
      loadingPost={loading[GET_POST]}
      loadingUsers={loading[GET_USERS]}
      post={post}
      users={users}
    />
  );
};

export default React.memo(SampleContainer);

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sample from "../components/Sample";

import { getPost, getUsers } from "../modules/sample";

const SampleContainer = () => {
  const { loading, post, users } = useSelector(({ sample }) => sample);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(1));
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Sample
      loadingPost={loading.GET_POST}
      loadingUsers={loading.GET_USERS}
      post={post}
      users={users}
    />
  );
};

export default React.memo(SampleContainer);

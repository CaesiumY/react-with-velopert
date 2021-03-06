import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import WriteActionButton from '../../components/write/WriteActionButton';
import { updatePost, writePost } from '../../modules/write';

const WriteActionButtonContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { title, body, tags, post, postError, originalPostId } = useSelector(
    ({ write }) => ({
      title: write.title,
      body: write.body,
      tags: write.tags,
      post: write.post,
      postError: write.postError,
      originalPostId: write.originalPostId,
    }),
  );

  const onPublish = () => {
    if (originalPostId) {
      dispatch(updatePost({ id: originalPostId, title, body, tags }));
      return;
    }

    dispatch(writePost({ title, body, tags, post, postError }));
  };

  const onCancel = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      navigate(`/@${user.username}/${_id}`);
    }

    if (postError) {
      console.error('Failed to load WriteActionButtonContainer', postError);
    }
  }, [post, postError, navigate]);

  return (
    <WriteActionButton
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={!!originalPostId}
    />
  );
};

export default WriteActionButtonContainer;

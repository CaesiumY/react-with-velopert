import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import PostActionButton from '../../components/post/PostActionButton';
import PostViewer from '../../components/post/PostViewer';
import { readPost, unloadPost } from '../../modules/post';
import { setOriginalPost } from '../../modules/write';

const PostViewerContainer = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { post, error, loading, user } = useSelector(
    ({ post, loading, user }) => ({
      post: post.post,
      error: post.error,
      loading: loading['post/READ_POST'],
      user: user.user,
    }),
  );

  useEffect(() => {
    dispatch(readPost(postId));

    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  const onEdit = () => {
    console.log(post);
    dispatch(setOriginalPost(post));
    navigate('/write');
  };

  const ownPost = user?._id === post?.user._id;

  return (
    <PostViewer
      post={post}
      error={error}
      loading={loading}
      actionButtons={ownPost && <PostActionButton onEdit={onEdit} />}
    />
  );
};

export default PostViewerContainer;

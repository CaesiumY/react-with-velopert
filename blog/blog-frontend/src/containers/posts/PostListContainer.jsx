import QueryString from 'qs';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import PostList from '../../components/post/PostList';
import { listPost } from '../../modules/posts';

const PostListContainer = () => {
  const location = useLocation();
  const { username } = useParams();
  const dispatch = useDispatch();
  const { posts, error, loading, user } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['posts/LIST_POSTS'],
      user: user.user,
    }),
  );

  useEffect(() => {
    const { tag, page } = QueryString.parse(location.search, {
      ignoreQueryPrefix: true,
    });

    dispatch(listPost({ tag, username, page }));
  }, [dispatch, location.search, username]);

  return (
    <PostList
      posts={posts}
      error={error}
      loading={loading}
      showWriteButton={user}
    />
  );
};

export default PostListContainer;

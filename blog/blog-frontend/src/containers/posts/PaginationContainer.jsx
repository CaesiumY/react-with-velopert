import QueryString from 'qs';
import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Pagination from '../../components/post/Pagination';

const PaginationContainer = () => {
  const location = useLocation();
  const { lastPage, posts, loading } = useSelector(({ posts, loading }) => ({
    lastPage: posts.lastPage,
    posts: posts.posts,
    loading: loading['posts/LIST_POSTS'],
  }));

  if (!posts || loading) return null;

  const {
    tag,
    username,
    page = 1,
  } = QueryString.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return (
    <Pagination
      page={parseInt(page, 10)}
      tag={tag}
      username={username}
      lastPage={lastPage}
    />
  );
};

export default PaginationContainer;

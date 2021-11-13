let postId = 1;

const posts = [
  {
    id: 1,
    title: '제목',
    body: '내용',
  },
];

// ANCHOR - 포스트 작성
export const write = (ctx) => {
  const { title, body } = ctx.request.body;

  postId += 1;
  const post = {
    id: postId,
    title,
    body,
  };

  posts.push(post);
  ctx.body = post;
};

// ANCHOR - 포스트 목록 조회
export const list = (ctx) => {
  ctx.body = posts;
};

// ANCHOR - 특정 포스트 조회
export const read = (ctx) => {
  const { id } = ctx.params;

  const post = posts.find((post) => post.id.toString() === id);

  if (!post) {
    ctx.status = 404;
    ctx.body = {
      message: '존재하지 않는 포스트입니다.',
    };
    return;
  }

  ctx.body = post;
};

// ANCHOR - 특정 포스트 삭제
export const remove = (ctx) => {
  const { id } = ctx.params;

  const index = posts.findIndex((post) => post.id.toString() === id);

  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '존재하지 않는 포스트입니다.',
    };
    return;
  }

  posts.splice(index, 1);
  ctx.status = 204;
};

// ANCHOR - 특정 포스트 교체
export const replace = (ctx) => {
  const { id } = ctx.params;

  const index = posts.findIndex((post) => post.id.toString() === id);

  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '존재하지 않는 포스트입니다.',
    };
    return;
  }

  posts[index] = {
    id,
    ...ctx.request.body,
  };
  ctx.body = posts[index];
};

// ANCHOR - 특정 포스트 수정
export const update = (ctx) => {
  const { id } = ctx.params;

  const index = posts.findIndex((post) => post.id.toString() === id);

  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '존재하지 않는 포스트입니다.',
    };
    return;
  }

  posts[index] = {
    ...posts[index],
    ...ctx.request.body,
  };
  ctx.body = posts[index];
};

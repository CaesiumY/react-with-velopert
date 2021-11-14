import Post from './models/post';

const createFakeData = () => {
  const posts = [...Array(40).keys()].map((i) => ({
    title: `포스트 ${i}`,
    body: `바디 ${i}`,
    tags: ['fake', 'data'],
  }));

  Post.insertMany(posts, (err, docs) => console.log(docs));
};

export default createFakeData;

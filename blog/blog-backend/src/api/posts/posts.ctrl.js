import Post from '../../models/post';

/* ANCHOR - sample post object
{
  title: String,
  body: String,
  tages: [String]
}
*/

export const write = async (ctx) => {
  const { title, body, tags } = ctx.request.body;

  const post = new Post({
    title,
    body,
    tags,
  });

  try {
    await post.save();
    ctx.body = post;
  } catch (error) {
    ctx.throw(500, error);
  }
};
export const list = async (ctx) => {
  try {
    const posts = await Post.find().exec();
    ctx.body = posts;
  } catch (error) {
    ctx.throw(500, error);
  }
};
export const read = async (ctx) => {
  const { id } = ctx.params;

  try {
    const post = await Post.findById(id).exec();

    if (!post) {
      ctx.status = 404;
      return;
    }

    ctx.body = post;
  } catch (error) {
    ctx.throw(500, error);
  }
};
export const remove = async (ctx) => {
  const { id } = ctx.params;

  try {
    await Post.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (error) {
    ctx.throw(500, error);
  }
};
export const update = async (ctx) => {
  const { id } = ctx.params;

  try {
    const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
      new: true,
    }).exec();

    if (!post) {
      ctx.statux = 404;
      return;
    }

    ctx.body = post;
  } catch (error) {
    ctx.throw(500, error);
  }
};

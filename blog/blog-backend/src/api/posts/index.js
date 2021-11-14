import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

const posts = new Router();

posts.post('/', postsCtrl.write);
posts.get('/', postsCtrl.list);

const post = new Router();
posts.use('/:id', postsCtrl.checkObjectIdValid, post.routes());

post.get('/', postsCtrl.read);
post.delete('/', postsCtrl.remove);
post.patch('/', postsCtrl.update);

export default posts;

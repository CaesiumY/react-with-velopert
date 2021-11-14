import Router from 'koa-router';
import checkLoggedIn from '../../lib/checkLoggedIn';
import * as postsCtrl from './posts.ctrl';

const posts = new Router();

posts.post('/', checkLoggedIn, postsCtrl.write);
posts.get('/', postsCtrl.list);

const post = new Router();
posts.use('/:id', postsCtrl.getPostById, post.routes());

post.get('/', postsCtrl.read);
post.delete('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.remove);
post.patch('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.update);

export default posts;

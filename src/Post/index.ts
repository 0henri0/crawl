import { RoutingControllersOptions } from 'routing-controllers';
import { PostController } from './controllers/post.controller';

const Post: RoutingControllersOptions = {
  controllers: [PostController],
};

export default Post;

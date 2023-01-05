import { Controller, Get } from 'routing-controllers';

@Controller('/posts')
export class PostController {
  @Get('/')
  index() {
    return 'posts';
  }
}

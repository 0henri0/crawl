import { Request } from 'express';
import { Controller, Get, Req } from 'routing-controllers';

@Controller('/posts')
export class PostController {
  @Get('/')
  index(@Req() req: Request) {
    console.log(req.ip)
    return 'posts';
  }
}

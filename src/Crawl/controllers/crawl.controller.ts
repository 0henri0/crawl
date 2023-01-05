import { Controller, Get } from 'routing-controllers';

@Controller('/crawl')
export class CrawlController {
  @Get('/')
  index() {
    return 'crawl';
  }
}

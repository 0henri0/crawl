import { RoutingControllersOptions } from 'routing-controllers';
import { CrawlController } from './controllers/crawl.controller';

const Crawl: RoutingControllersOptions = {
  controllers: [CrawlController],
};

export default Crawl;

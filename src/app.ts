import Crawl from './Crawl';
import Post from './Post';
import * as dotenv from 'dotenv';
dotenv.config();
import 'reflect-metadata';
import { createExpressServer, useExpressServer } from 'routing-controllers';

const app = createExpressServer();

useExpressServer(app, Crawl);
useExpressServer(app, Post);

export default app;

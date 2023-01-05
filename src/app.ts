import User from './User';
import Crawl from './Crawl';
import Post from './Post';
import * as dotenv from 'dotenv';
dotenv.config();
import 'reflect-metadata';
import { createExpressServer, useExpressServer } from 'routing-controllers';
import { AppDataSource } from './Framework/models';

const app = createExpressServer();
useExpressServer(app, Crawl);
useExpressServer(app, Post);
useExpressServer(app, User);
AppDataSource.initialize()
  .then(() => {})
  .catch((error) => console.log(error));

export default app;

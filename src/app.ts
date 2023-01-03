import * as dotenv from 'dotenv';
dotenv.config();
import express, { Express, Request, Response } from 'express';

const app: Express = express();
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});
export default app;

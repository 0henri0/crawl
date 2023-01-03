import * as dotenv from 'dotenv';

dotenv.config();
import app from './app';
import http, { Server } from 'http';

const port = process.env.PORT || 3000;
console.log('Hello world!');

app.set('port', port);

const server: Server = http.createServer(app);

server.listen(port);

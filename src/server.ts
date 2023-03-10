import * as dotenv from 'dotenv';
dotenv.config();
import app from './app';
import http, { Server } from 'http';

process.env.UV_THREADPOOL_SIZE = '12';
const port = process.env.PORT || 3000;
console.log('Hello world!');

app.set('port', port);

app.get('/health-check', (req, res) => {
  res.status(200).send('OK');
});

const server: Server = http.createServer(app);

server.listen(port, () => {
  console.log('Listening on ' + port);
});

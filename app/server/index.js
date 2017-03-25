import express from 'express';
import path from 'path';
import socket from 'socket.io';
import ioHandler from './io';

const app = express();

app
  .use('/', express.static('./'))
  .use('/', (req, res, next) => res.sendFile(path.join(__dirname, '../client/views/index.html')));

const server = app.listen(4000, () => console.log('Listening on port: 4000...'));
const io = socket.listen(server);

io.on('connection', ioHandler);

export { app, io };

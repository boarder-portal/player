import express from 'express';

const app = express();

app
  .use('/', express.static('./'))
  .use('/', (req, res, next) => res.sendFile(__dirname + '/app/client/views/index.html'));

app.listen(4000, () => console.log('Listening on port: 4000...'));

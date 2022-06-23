import * as express from 'express';

import { useLogger } from '@stellar/feature-logger';

const app = express();

useLogger(app)

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to express-api!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

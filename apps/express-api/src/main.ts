import * as express from 'express';

import { useLogger } from '@stellar/feature-logger';
import { health } from '@stellar/util-health'

const app = express();

useLogger(app)

app.use('/health', health)

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to express-api!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

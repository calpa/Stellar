import { useLogger } from '@stellar/feature-logger';
import * as express from 'express';

const app = express();

useLogger(app)

app.get('/api', (req, res) => {
  res.send({ message: 'Bot API' });
});

const port = process.env.port || 3334;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

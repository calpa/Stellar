import * as request from 'supertest'
import * as express from 'express'
import { health } from './util-health';

const app = express()

app.use('/health', health)

describe('utilHealth', () => {
  it('should work', (done) => {
    request(app).
      get('/health')
      .expect(200, done)
  });
});

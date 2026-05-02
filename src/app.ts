import express, { type Express } from 'express';
import path from 'path';
import { apiRouter } from './routes/api.js';

export function createApp(): Express {
  const app = express();

  app.use(express.json());

  const publicDir = path.join(__dirname, '..');

  // API first so paths like /api/items are never treated as static files
  app.use('/api', apiRouter);

  app.use(express.static(publicDir));

  return app;
}

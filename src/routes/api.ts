import { Router } from 'express';
import { healthRouter } from './health.js';
import { itemsRouter } from './items.js';

/**
 * Root router for all HTTP APIs.
 * Everything here is mounted at /api in app.ts.
 */
export const apiRouter = Router();

apiRouter.use('/health', healthRouter);
apiRouter.use('/items', itemsRouter);

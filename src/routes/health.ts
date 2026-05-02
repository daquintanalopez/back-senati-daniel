import { Router } from 'express';

/**
 * Liveness / readiness style checks.
 * Mounted under /api/health → GET /api/health
 */
export const healthRouter = Router();

healthRouter.get('/', (_req, res) => {
  res.json({
    status: 'ok',
    uptimeSeconds: Math.round(process.uptime()),
  });
});

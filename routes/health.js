const { Router } = require('express');

/** GET /api/health */
const router = Router();

router.get('/', (_req, res) => {
  res.json({
    status: 'ok',
    uptimeSeconds: Math.round(process.uptime()),
  });
});

module.exports = router;

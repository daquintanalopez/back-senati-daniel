const { Router } = require('express');
const healthRouter = require('./health');
const itemsRouter = require('./items');

/** All HTTP APIs mounted at /api in index.js */
const router = Router();

router.use('/health', healthRouter);
router.use('/items', itemsRouter);

module.exports = router;

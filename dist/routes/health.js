"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthRouter = void 0;
const express_1 = require("express");
/**
 * Liveness / readiness style checks.
 * Mounted under /api/health → GET /api/health
 */
exports.healthRouter = (0, express_1.Router)();
exports.healthRouter.get('/', (_req, res) => {
    res.json({
        status: 'ok',
        uptimeSeconds: Math.round(process.uptime()),
    });
});

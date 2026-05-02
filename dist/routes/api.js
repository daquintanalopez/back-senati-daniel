"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = require("express");
const health_js_1 = require("./health.js");
const items_js_1 = require("./items.js");
/**
 * Root router for all HTTP APIs.
 * Everything here is mounted at /api in app.ts.
 */
exports.apiRouter = (0, express_1.Router)();
exports.apiRouter.use('/health', health_js_1.healthRouter);
exports.apiRouter.use('/items', items_js_1.itemsRouter);

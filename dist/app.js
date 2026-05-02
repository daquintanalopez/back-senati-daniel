"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = createApp;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const api_js_1 = require("./routes/api.js");
function createApp() {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    const publicDir = path_1.default.join(__dirname, '..');
    // API first so paths like /api/items are never treated as static files
    app.use('/api', api_js_1.apiRouter);
    app.use(express_1.default.static(publicDir));
    return app;
}

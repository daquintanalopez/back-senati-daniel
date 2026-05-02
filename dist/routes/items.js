"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemsRouter = void 0;
const express_1 = require("express");
const itemsStore_js_1 = require("../data/itemsStore.js");
/**
 * Example REST-style resource.
 * Mounted under /api/items → GET /api/items, GET /api/items/:id, POST /api/items
 */
exports.itemsRouter = (0, express_1.Router)();
exports.itemsRouter.get('/', (_req, res) => {
    res.json({ items: (0, itemsStore_js_1.listItems)() });
});
exports.itemsRouter.get('/:id', (req, res) => {
    const item = (0, itemsStore_js_1.getItemById)(req.params.id);
    if (!item) {
        res.status(404).json({ error: 'Item not found' });
        return;
    }
    res.json(item);
});
exports.itemsRouter.post('/', (req, res) => {
    const title = typeof req.body?.title === 'string' ? req.body.title.trim() : '';
    if (!title) {
        res.status(400).json({ error: 'Body must include a non-empty "title" string' });
        return;
    }
    const created = (0, itemsStore_js_1.addItem)(title);
    res.status(201).json(created);
});

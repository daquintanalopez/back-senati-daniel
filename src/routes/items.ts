import { Router } from 'express';
import { addItem, getItemById, listItems } from '../data/itemsStore.js';

/**
 * Example REST-style resource.
 * Mounted under /api/items → GET /api/items, GET /api/items/:id, POST /api/items
 */
export const itemsRouter = Router();

itemsRouter.get('/', (_req, res) => {
  res.json({ items: listItems() });
});

itemsRouter.get('/:id', (req, res) => {
  const item = getItemById(req.params.id);
  if (!item) {
    res.status(404).json({ error: 'Item not found' });
    return;
  }
  res.json(item);
});

itemsRouter.post('/', (req, res) => {
  const title = typeof req.body?.title === 'string' ? req.body.title.trim() : '';
  if (!title) {
    res.status(400).json({ error: 'Body must include a non-empty "title" string' });
    return;
  }
  const created = addItem(title);
  res.status(201).json(created);
});

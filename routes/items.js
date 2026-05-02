const { Router } = require('express');
const { listItems, getItemById, addItem } = require('../data/itemsStore');

/** /api/items — collection + single item + create */
const router = Router();

router.get('/', (_req, res) => {
  res.json({ items: listItems() });
});

router.get('/:id', (req, res) => {
  const item = getItemById(req.params.id);
  if (!item) {
    res.status(404).json({ error: 'Item not found' });
    return;
  }
  res.json(item);
});

router.post('/', (req, res) => {
  const title = typeof req.body?.title === 'string' ? req.body.title.trim() : '';
  if (!title) {
    res.status(400).json({ error: 'Body must include a non-empty "title" string' });
    return;
  }
  const created = addItem(title);
  res.status(201).json(created);
});

module.exports = router;

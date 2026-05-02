/** In-memory store (replace with a database later). */

let items = [
  { id: '1', title: 'First item' },
  { id: '2', title: 'Second item' },
];

function listItems() {
  return items;
}

function getItemById(id) {
  return items.find((i) => i.id === id);
}

function addItem(title) {
  const numericIds = items.map((i) => Number(i.id)).filter(Number.isFinite);
  const next = (numericIds.length ? Math.max(...numericIds) : 0) + 1;
  const item = { id: String(next), title };
  items = [...items, item];
  return item;
}

module.exports = { listItems, getItemById, addItem };

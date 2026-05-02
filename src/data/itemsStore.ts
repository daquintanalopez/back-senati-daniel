import type { Item } from '../types/item.js';

/** Example in-memory store (replace with DB later). */
let items: Item[] = [
  { id: '1', title: 'First item' },
  { id: '2', title: 'Second item' },
];

export function listItems(): Item[] {
  return items;
}

export function getItemById(id: string): Item | undefined {
  return items.find((i) => i.id === id);
}

export function addItem(title: string): Item {
  const numericIds = items.map((i) => Number(i.id)).filter(Number.isFinite);
  const next = (numericIds.length ? Math.max(...numericIds) : 0) + 1;
  const item: Item = { id: String(next), title };
  items = [...items, item];
  return item;
}

import { createApp } from './app.js';

const app = createApp();
const port = Number(process.env.PORT) || 3000;

app.listen(port, () => {
  const base = `http://localhost:${port}`;
  console.log(`Server listening on ${base}`);
  console.log(`API base: ${base}/api`);
});

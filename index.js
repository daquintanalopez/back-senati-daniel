import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = Number(process.env.PORT) || 3000;

const publicDir = path.join(__dirname);

app.get('/test', (req, res) => {
  res.status(200).json({ ok: true, message: 'Server is up' });
});

app.use(express.static(publicDir));

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
  console.log(`Test route: http://localhost:${port}/test`);
});

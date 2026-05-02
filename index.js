const express = require('express');
const path = require('path');
const apiRouter = require('./routes/api');

const app = express();
const port = Number(process.env.PORT) || 3000;

const publicDir = path.join(__dirname);

app.use(express.json());

// API before static so /api/* is never treated as a static file
app.use('/api', apiRouter);

app.use(express.static(publicDir));

app.listen(port, () => {
  const base = `http://localhost:${port}`;
  console.log(`Server listening on ${base}`);
  console.log(`API: ${base}/api/health  |  ${base}/api/items`);
});

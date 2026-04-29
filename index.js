const express = require('express');
const path = require('path');

const app = express();
const port = Number(process.env.PORT) || 3000;

const publicDir = path.join(__dirname);

app.use(express.static(publicDir));

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

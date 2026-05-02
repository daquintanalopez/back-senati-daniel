"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = require("./app.js");
const app = (0, app_js_1.createApp)();
const port = Number(process.env.PORT) || 3000;
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});

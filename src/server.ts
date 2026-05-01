import express from "express";
const app = express();

app.get("/test", (req, res) =>{
    res.send("Hola SENATI, buenas noches");
});

export default app;
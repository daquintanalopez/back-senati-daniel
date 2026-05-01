import express from "express";
const app = express();

app.get("/test", (req, res) =>{
    res.send("Hola SENATI, buenas noches");
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log("Express server started");
});
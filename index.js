const express = require('express');
const app = express();

app.get("/test", (req, res) =>{
   res.send("Hola SENATI, buenas noches");
});


app.listen(4000, () => {
    console.log("Express server started");
});
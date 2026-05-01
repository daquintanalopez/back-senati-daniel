import {Router} from "express";
const router = Router();

router.get("/test", (req, res) =>{
    res.send("Hola SENATI, buenas noches");
});

export default router;
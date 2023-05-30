import { Router } from "express";
import { about, gatos } from "../controllers/todolist.controller.js";

const route = Router();

// route.get("/", (req, res) => {
//     res.send("estoy e el home");

// })

route.get("/about", about)

route.get("/gatos", gatos)


export default route;
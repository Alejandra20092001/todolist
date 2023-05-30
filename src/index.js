import  express  from "express";

import siteRoute from "./routes/todolist.route.js";

const app = express();

app.use(siteRoute);


app.use(express.static('./public'));




app.listen(3000);

console.log("escuchando en el puerto 3000");


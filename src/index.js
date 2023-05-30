//se importa express de express
import  express  from "express";

//se importa la variable route (cambiandola por el nombre siteRoute) del archivo todolist.route.js
import siteRoute from "./routes/todolist.route.js";

//se crea una variable llamada app, en la que se invoca express 
const app = express();

//se indica que se use el archivo en donde estan alojadas las rutas
app.use(siteRoute);

//la app usa la carpeta estatica public
app.use(express.static('./public'));

//se pone a escuchar la app en el servidor 3000
app.listen(3000);

console.log("escuchando en el puerto 3000");


//se importa la clase Router de express, es un middleware que permite crear manejadores de rutas
import { Router } from "express";

//se importan las variables de about y gastos, creadas en el archivo todolist.controller.js
import { about, gastos } from "../controllers/todolist.controller.js";


//se crea la variable route, que inicializa la clase Router
const route = Router();

// se dice a la ruta inicial ("/"), que reciba una petiticion
// route.get("/", (req, res) => {
       // de respuesta manda una frase
//     res.send("estoy en el home");
// })

// se indica que a partir de la ruta /about, realice la funcion que se haya indicado en la variable about que esta dentro del controller
route.get("/about", about)

// se indica que a partir de la ruta /gastos, realice la funcion que se haya indicado en la variable gastos que esta dentro del controller
route.get("/gastos", gastos)

//se exporta por defecto la variable route; es decir, exporta a la vez varias constantes. En vez de poner {about, gastos}, se pone directamente route englobando todo
export default route;
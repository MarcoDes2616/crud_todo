const express = require("express");

const cors = require("cors")

const app = express(); 

const PORT = 8000; // puerto de comunicacion

const db = require('./utils/database'); //importar coneccion a BD

const todoRouter = require('./routes/todo.routes'); //importar rutas


//middlewares

app.use(cors());

app.use(express.json()); 


// sincronizacion a bases de datos
db.authenticate()
    .then(() => console.log("Successful Auth"))
    .catch((error) => console.log(error)); 

db.sync()
    .then(() => console.log("base de datos sincronizada"))
    .catch((error) => console.log(error));


// iniciacion de rutas
app.use(todoRouter);



//configuracion de comunicacion (puerto)
app.listen(PORT, () => {
    console.log(`servidor escuchando en puerto ${PORT}`);
})

// Crear un CRUD
// para TODOS
// Crear una tarea
// leer todas las tareas
// actualizar una tarea
// eliminar una tarea
// Tarea : title, description, status (completada o no esta completada)
// vas a usar express, sequelize
// crear un archivo de rutas para manejar las rutas de los todos
// te recomiendo que tus endpoints sean '/api/v1/todo
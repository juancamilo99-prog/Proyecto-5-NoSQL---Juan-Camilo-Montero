//importamos el modulo de express
const express = require('express');
//importamos la conexion de la bd
const {connect} = require('./utils/db');
//importamos el modelo de los libros
const Book = require('./models/Book');

//importamos las rutas!
const booksRoutes = require('./routes/book.routes');

connect();

//definimos al servidor
//definimos el puerto
const PORT = 3000;
//creamos la instancia de express
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false}));
server.use('/', booksRoutes); //ruta del index al iniciar el servicio!

//manejador de rutas no especificas
server.use((req,res, next) =>{
    const error = new Error('Route no found');
    error.status = 404;
    next(error);
})

//manejador de errores
server.use((error, req, res, next)=>{
    return res.status(error.status || 500).json(error.message || 'Unexpected error');
})

server.listen(PORT, ()=>{
    console.log(`Server running in http://localhost:${PORT}`);
});
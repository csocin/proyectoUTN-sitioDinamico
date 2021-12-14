const express = require('express');

//hacer el ruteo: es decir el recorrido que tiene que hacer al recibir una peticion

const routes = express.Router();

const {
    renderHome,
    renderContacto,
    dbAlquileres,
    dbVentas

} = require('../controllers/proyectoControllers');


routes.get("/",renderHome);

routes.get("/contacto",renderContacto);

routes.get("/alquileres",dbAlquileres);

routes.get("/ventas",dbVentas);



module.exports = routes;


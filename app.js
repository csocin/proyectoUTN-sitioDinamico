const express = require('express');
const app = express();
const path = require('path');
const routes = require('./src/routes/proyectoRoutes');

const databaseConnection = require('./config/database');

//para recibir informacion en formato JSON
//app.use(express.json());


//comandos para obtener las vistas y los estaticos desde "views" y "public".  EJS como motor
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));


//rutas
app.use("/home", routes);


databaseConnection.connect();


app.listen(4000,()=>{
    console.log("Server corriendo en puerto 4000")
});
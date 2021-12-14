//Requerimos lo que definimos en database.js 
const databaseConnection = require("../../config/database");


//Callbacks render que iran a routes para responder a las peticiones de los llamados

const renderHome = (req, res) => {

    res.render('/pages/index')
};

const renderContacto = (req, res) => {

    res.render('/pages/form')
};

//funcion query de mysql2, requiere info de la DB para traerla a nuestras paginas

const dbAlquileres = (req,res) =>{

    databaseConnection.query('SELECT * FROM alquileres',(error,data)=>{

        if (error) {
            console.log(error)
        } else {
            res.render('/pages/alquileres',{data}) 
        }
    })

};

const dbVentas = (req,res) =>{

    databaseConnection.query('SELECT * FROM ventas',(error,data)=>{

        if (error) {
            console.log(error)
        } else {
            res.render('/pages/ventas',{data})
        }
    })

};


module.exports = {
    renderHome,
    renderContacto,
    dbAlquileres,
    dbVentas
};


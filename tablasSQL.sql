CREATE TABLE alquileres (
    id INT(10) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    propiedad VARCHAR(200) NOT NULL,
    operacion VARCHAR(200) NOT NULL,
    imagen VARCHAR(200) NOT NULL,
    descripcion TEXT NOT NULL,
    precio INT(9) NOT NULL
    );

CREATE TABLE ventas (
    id INT(10) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    propiedad VARCHAR(200) NOT NULL,
    operacion VARCHAR(200) NOT NULL,
    imagen VARCHAR(200) NOT NULL,
    descripcion TEXT NOT NULL,
    precio INT(9) NOT NULL
    );
    
    
    INSERT INTO alquileres(propiedad,operacion,imagen,descripcion,precio)
    VALUES("departamento","alquiler-temporario","/images/dpto1.png","Alquiler temporario - Barrio Santa Rita",2000),
    ("departamento","alquiler","/images/dpto2.png","Alquiler - Departamento centrico a estrenar",30000),
    ("departamento","alquiler","/images/dpto3.png","Alquiler - Casa en calle Cerro Blanco",50000),
    ("departamento","alquiler","/images/dpto4.png","Alquiler - Los Manantiales",35000);

    INSERT INTO ventas(propiedad,operacion,imagen,descripcion,precio)
    VALUES("departamento","venta","/images/casa1.png","Venta - Departamento La Paz",70000),
    ("cabaña","venta","/images/casa2.png","Venta - CABAÑAS LOS ÁLAMOS - Increible oportunidad!",80000),
    ("casa","venta","/images/casa3.png","Venta - Villa del Lagoo",180000);
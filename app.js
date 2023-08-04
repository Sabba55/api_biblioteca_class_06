const express = require("express");

const { auth } = require("express-oauth2-jwt-bearer");

// Importamos el Router de Libros
const librosRouter = require("./routes/libros");
const errorHandler = require("./middleware/errorHandler");

// Configuracion Middleware con el Servidor de Autorización
const autenticacion = auth({
    audience: 'http://127.0.0.1:3000/api/libros',
    issuerBaseURL: 'https://dev-mbo80dja7bkjncux.us.auth0.com/',
    tokenSigningAlg: 'RS256'
});

const app = express();

app.use(express.json());

//Configuramos el middleware de autenticacion
app.use("/api/libros", autenticacion, librosRouter);

app.use(errorHandler);

app.listen(3000, () => {
    console.log("Servidor iniciado en el puerto 3000");
});


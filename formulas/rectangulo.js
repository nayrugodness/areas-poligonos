const crearJSON = require("../menu/crearJson");

function rectangulo(lado, ancho){

    const calculo = lado * ancho;
    crearJSON(" area rectangulo ", calculo)
    return calculo

}

module.exports = rectangulo;
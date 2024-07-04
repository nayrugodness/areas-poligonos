const crearJSON = require("../menu/crearJson");

function cuadrado(lado) {

    const calculo = lado ** 2;
    crearJSON(" area cuadrado ", calculo)
    return calculo

}

module.exports = cuadrado
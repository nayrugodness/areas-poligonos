const crearJSON = require("../menu/crearJson");

function circulo(radio){

    const calculo = (3.1416 * (radio ** 2));
    crearJSON(" area circulo ", calculo)
    return calculo;

}

module.exports = circulo
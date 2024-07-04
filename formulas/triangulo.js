const crearJSON = require("../menu/crearJson");

function triangulo(base, altura) {

    const calculo = ((base * altura) / 2);
    crearJSON(" area triángulo ", calculo)
    return calculo
}

module.exports = triangulo;
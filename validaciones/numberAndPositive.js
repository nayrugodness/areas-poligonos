const isNumber = require("./isNumber");
const isPositive = require("./isPositive");

function numberAndPositive(dato){

    const puedeCalcular = isNumber(dato) && isPositive(dato)
    return puedeCalcular

}

module.exports = numberAndPositive;
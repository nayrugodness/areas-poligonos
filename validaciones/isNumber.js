function isNumber(dato) {
    if (typeof dato === 'number' && !isNaN(dato)) {
        return true;
    } else {
        return false;
    }
}
module.exports = isNumber;
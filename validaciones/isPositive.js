function isPositive(dato) {
    // Verifica si dato es numérico y positivo
    if (typeof dato === 'number' && dato > 0) {
        return true;
    } else {
        return false;
    }
}

module.exports = isPositive;

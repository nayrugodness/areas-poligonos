async function isPositive(dato) {

    const validacion = dato > 0;
    if (validacion) {
        return true
    } else {
        return false
    }
}

module.exports = isPositive;
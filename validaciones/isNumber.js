
async function isNumber(dato) {

    const validacion = typeof dato
    if (validacion === 'number') {
        return true
    } else {
        return false
    }
}

module.exports = isNumber;
const fs = require('fs');

function crearJSON(texto, numero) {
    // Crear objeto JSON con el nombre "resultado"
    let resultado = {
        resultado: {
            texto: texto,
            numero: numero
        }
    };

    
    let jsonResultado = JSON.stringify(resultado, null, 2); 
    fs.writeFileSync('./resultados/resultado.json', jsonResultado);

    console.log('Archivo JSON creado exitosamente.');
}

module.exports = crearJSON;
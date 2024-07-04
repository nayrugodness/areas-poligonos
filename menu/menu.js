const readline = require('readline');
const triangulo = require('../formulas/triangulo'); 
const numberAndPositive = require('../validaciones/numberAndPositive'); 
const cuadrado = require('../formulas/cuadrado');
const rectangulo = require('../formulas/rectangulo');
const circulo = require('../formulas/circulo');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

function menu() {
    console.log('Seleccione el polígono para calcular el área:');
    console.log('1. Triángulo');
    console.log('2. Cuadrado');
    console.log('3. Rectángulo');
    console.log('4. Círculo');
  
    rl.question('Ingrese el número de su elección: ', (choice) => {
        switch (choice) {
            case '1':
                rl.question('Ingrese la base del triángulo: ', (base) => {
                    base = parseFloat(base); 
                    if (numberAndPositive(base)) {
                        rl.question('Ingrese la altura del triángulo: ', async (altura) => {
                            altura = parseFloat(altura); 
                            if (numberAndPositive(altura)) {
                                const areaTriangulo = triangulo(base, altura);
                                console.log(`El área del triángulo es: ${areaTriangulo}`);
                            } else {
                                console.log('La altura ingresada no es válida.');
                            }
                            rl.close();
                        });
                    } else {
                        console.log('La base ingresada no es válida.');
                        rl.close();
                    }
                });
                break;
            case '2':
                rl.question('Ingrese el lado del cuadrado: ', (lado) => {
                    lado = parseFloat(lado); 
                    if (numberAndPositive(lado)) {
                        console.log(`El área del cuadrado es: ${cuadrado(lado)}`);
                    } else {
                        console.log('El lado ingresado no es válido.');
                    }
                    rl.close();
                });
                break;
            case '3':
                rl.question('Ingrese el largo del rectángulo: ', (largo) => {
                    largo = parseFloat(largo); 
                    rl.question('Ingrese el ancho del rectángulo: ', (ancho) => {
                        ancho = parseFloat(ancho);
                        if (numberAndPositive(largo) && numberAndPositive(ancho)) {
                            console.log(`El área del rectángulo es: ${rectangulo(largo, ancho)}`);
                        } else {
                            console.log('Las dimensiones ingresadas no son válidas.');
                        }
                        rl.close();
                    });
                });
                break;
            case '4':
                rl.question('Ingrese el radio del círculo: ', (radio) => {
                    radio = parseFloat(radio); // Convertir el radio a número
                    if (numberAndPositive(radio)) {
                        console.log(`El área del círculo es: ${circulo(radio)}`);
                    } else {
                        console.log('El radio ingresado no es válido.');
                    }
                    rl.close();
                });
                break;
            default:
                console.log('Opción no válida.');
                rl.close();
                break;
        }
    });
}

menu();

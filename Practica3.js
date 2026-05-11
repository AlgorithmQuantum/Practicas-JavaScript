// Función que cuenta frutas usando ciclo FOR
function contarFrutasConFor(frutas) {
    let cantidadFrutas = {};
    
    for (let i = 0; i < frutas.length; i++) {
        let fruta = frutas[i];
        
        if (cantidadFrutas[fruta]) {
            cantidadFrutas[fruta]++;
        } else {
            cantidadFrutas[fruta] = 1;
        }
    }
    
    return cantidadFrutas;
}

// Función que cuenta frutas usando ciclo WHILE
function contarFrutasConWhile(frutas) {
    let cantidadFrutas = {};
    let i = 0;
    
    while (i < frutas.length) {
        let fruta = frutas[i];
        
        if (cantidadFrutas[fruta]) {
            cantidadFrutas[fruta]++;
        } else {
            cantidadFrutas[fruta] = 1;
        }
        i++;
    }
    
    return cantidadFrutas;
}

// Función para imprimir los resultados
function imprimirResultados(cantidadFrutas, metodo) {
    console.log(`\n=== Resultado usando ciclo ${metodo} ===`);
    for (let fruta in cantidadFrutas) {
        console.log(`${fruta}: ${cantidadFrutas[fruta]} unidades`);
    }
}

// Función principal que permite al usuario elegir el método
function procesarFrutas() {
    // Declarar el arreglo de frutas
    let frutas = ["manzana", "pera", "manzana", "naranja", "pera", "manzana", "uva", "naranja", "manzana"];
    
    console.log("Arreglo de frutas:", frutas);
    console.log("\n¿Qué método deseas usar para contar las frutas?");
    console.log("1. Ciclo FOR");
    console.log("2. Ciclo WHILE");
    
    // Solicitar opción al usuario (en un entorno de navegador usar prompt, en Node.js usar readline)
    let opcion = prompt("Ingresa 1 o 2:"); // Para navegador
    
    // Para Node.js, descomentar la siguiente línea y comentar la de arriba
    // const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout });
    // readline.question("Ingresa 1 o 2: ", (opcion) => { ... });
    
    let resultado;
    
    if (opcion === "1") {
        resultado = contarFrutasConFor(frutas);
        imprimirResultados(resultado, "FOR");
    } else if (opcion === "2") {
        resultado = contarFrutasConWhile(frutas);
        imprimirResultados(resultado, "WHILE");
    } else {
        console.log("Opción no válida. Usando ciclo FOR por defecto.");
        resultado = contarFrutasConFor(frutas);
        imprimirResultados(resultado, "FOR (por defecto)");
    }
    
    return resultado;
}

// Ejecutar el programa
procesarFrutas();
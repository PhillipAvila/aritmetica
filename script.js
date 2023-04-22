var numero = parseInt(prompt("Seleccione qué desea hacer:\n1.- Calcular cuál número es mayor\n2.- Sumar\n3.- Restar\n4.- Multiplicar\n5.- Dividir\n6.- Mostrar los números ingresados\n7.- Salir"))

if (numero === 1) {
    var numero1 = prompt("Ingrese el primer número");
    var numero2 = prompt("Ingrese el segundo número");
    mayor_menor(numero1, numero2);
}

function mayor_menor(numero1, numero2){
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    if (numero1 > numero2) {
        alert(`${numero1} es mayor que ${numero2}`);
    } else if (numero2 > numero1) {
        alert(`${numero2} es mayor que ${numero1}`);
    } else {
        alert(`Ambos tienen el mismo valor`);
    }
} 

if (numero === 2) {
    var numero1 = prompt("Ingrese el primer número");
    var numero2 = prompt("Ingrese el segundo número");
    suma(numero1, numero2);
}

function suma(numero1, numero2) {
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    resultado = numero1 + numero2;
    return alert(`La suma de los números ${numero1} y ${numero2} es: ${resultado}`);
}

if (numero === 3) {
    var numero1 = prompt("Ingrese el primer número");
    var numero2 = prompt("Ingrese el segundo número");
    resta(numero1, numero2);
}

function resta(numero1, numero2) {
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    resultado = numero1 - numero2;
    return alert(`La resta de los números ${numero1} y ${numero2} es: ${resultado}`);
}

if (numero === 4) {
    var numero1 = prompt("Ingrese el primer número");
    var numero2 = prompt("Ingrese el segundo número");
    multiplicar(numero1, numero2);
}

function multiplicar(numero1, numero2) {
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    resultado = numero1 * numero2;
    return alert(`La multiplicación de los números ${numero1} y ${numero2} es: ${resultado}`);
}

if (numero === 5) {
    var numero1 = prompt("Ingrese el primer número");
    var numero2 = prompt("Ingrese el segundo número");
    dividir(numero1, numero2);
}

function dividir(numero1, numero2) {
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    resultado = numero1 / numero2;
    return alert(`La división de los números ${numero1} y ${numero2} es: ${resultado}`);
}

if (numero === 6) {
    var numero1 = prompt("Ingrese el primer número");
    var numero2 = prompt("Ingrese el segundo número");
    mostrar(numero1, numero2);
}

function mostrar(numero1, numero2) {
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    return alert(`El primer número ingresado es ${numero1} y el segundo es ${numero2}`);
}

if (numero === 7) {
    alert("Gracias por participar");
}

if (numero !== 1, 2, 3, 4, 5, 6, 7){
    alert("Elección incorrecta. Adiós!")
}

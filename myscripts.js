function restar (a,b){
    return a - b
}
console.log(restar(3,2));

function clasificación (){
    let nota = +prompt("Dime cuanto has sacado");


switch (true) {
    case nota <= 4:
    console.log("insuficiente")
    break;
    case nota == 5 || nota == 6:
        console.log("Suficiente")
    break
    case nota == 7 || nota == 8:
        console.log("Saliente")
    break
    case nota == 9 || nota == 10:
        console.log("Sobresaliente")
    break
    case nota >= 11:
        console.log("Nota invalida")
    break
}
}

clasificación()


function duplicaNumero(num){
    if (typeof num != "number"){
        return "Debo ser ejecutado con un número";
    }
    return  num*2
}
console.log(duplicaNumero(7))



 function caracterIncial (string){
    if (typeof string != "string"){
        return "Debo ser ejecutado con un string";
    } 
   return string.substring(0,1);

 }

 console.log(caracterIncial("hola"))

 
 function ultimoCaracter (string){
    if (typeof string != "string"){
        return "Debo ser ejecutado con un string";
    } 
   return string.substring(string.length - 1);

 }
console.log(ultimoCaracter("hola"))

function cuentaCaracteres(str) {
    if (typeof str !== 'string') {
        return 'Debo ser ejecutada con un string';
    }
    return str.length;
}

function esPalindromo(cadena) {
    if (typeof cadena !== 'string' || cadena.trim() === '') {
        return 'no es un formato correcto';
    }
    const reversed = cadena.split('').reverse().join('');
    return cadena === reversed;
}

function getPrecioMostrar(precio) {
    if (typeof precio !== 'number') {
        return 'no es un formato correcto';
    }
    return precio.toFixed(2) + ' €';
}

function division(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'no es un formato correcto';
    }
    if (num2 === 0) {
        return 'No se puede dividir por cero';
    }
    return num1 / num2;
}

function filtrarMayoresCinco(numeros) {
    if (!Array.isArray(numeros)) {
        return 'No es un formato correcto';
    }
    return numeros.filter(num => num >= 5);
}

function esPrimo(numero) {
    if (typeof numero !== 'number' || numero <= 1 || !Number.isInteger(numero)) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

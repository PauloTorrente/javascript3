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
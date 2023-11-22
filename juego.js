const input = require('readline-sync');

numero = Math.floor(Math.random() * 100) + 1;

while (true){
    intento = Number(input.question("Ingrese el numero que se ha generado: "));
    if (intento == numero){
        break;
    }
    else{
        if(intento < numero){
            console.log("NUMERO INCORRECTO. El numero a adivinar es mayor que el numero ingresado.");
        }
        if(intento > numero){
            console.log("NUMERO INCORRECTO. El numero a adivinar es menor que el numero ingresado.");
        }
    }
}
console.log("¡Adivinaste el numero, felicitaciones!")
//* Configuración e intercambio
//Pon myNumber en 42. Deja myName con tu nombre. Ahora intercambia myNumber por myName y viceversa.
/*
var myNumber = 42;
var myName = "Mauricio";
myNumber = myName;
myName = myNumber;
console.log(myNumber);
console.log(myName);
*/

//* Imprimir -52 a 1066
// Imprime números enteros de -52 a 1066 usando un bucle FOR.
/*
for (var i = -52; i <= 1066; i++){
    console.log(i);
    
}
*/

//* No te preocupe, sé feliz
// Crea beCheerful(). Dentro de este, la cadena console.log "¡buenos días!" Llámalo 98 veces.
/*
function beCheerful(i){
    while(i<98){
        console.log('¡buenos días!');
        i++;
    }
}
beCheerful(0);
*/

//* Múltiplos de tres, pero no todos
// Usando FOR, imprime múltiplos de 3 de -300 a 0. Omite -3 y -6. 
/*
for (var i = -300; i <= 0; i++){
    if(i % 3 == 0 && i != -6 && i != -3){
        console.log(i);
    }
}
*/

//* Imprimir enteros con While
// Imprime números enteros de 2000 a 5280, utilizando un WHILE.
/*
var num = 2000;
while(num <= 5280){
    console.log(num);
    num++
}
*/

//*Dices que es tu cumpleaños...
//Si 2 números dados representan tu mes y día de nacimiento en cualquier orden, registra "¿Cómo lo supiste?", de lo contrario registra "Un día cualquiera...".
/*
function myBday(i){
    if(i == 18 || i==3){
        console.log("¿Cómo lo supiste?");
    }
    else{
        console.log('Un día cualquiera...'); 
    }
}
myBday(3);
*/

//* Año bisiesto
//Escribe una función que determine si un año determinado es bisiesto. Si un año es divisible por cuatro, es un año bisiesto, a menos que sea divisible por 100. Sin embargo, si es divisible por 400, entonces lo es.
/*
function leapYear(i){
    if(i % 4 == 0 && i % 100 != 0 || i % 400 == 0){
        console.log('Es un año bisiesto');
    }
    else{
        console.log('No un año bisiesto');
        
    }
}
leapYear(1795);
*/

//* Imprimir y contar
// Imprime todos los múltiplos enteros de 5, de 512 a 4096. Después, también registra cuántos había.
/*
var contador = 0;
for(var i = 512; i <= 4096; i++){
    if(i % 5 == 0){
        contador++;
        console.log(i);
    }
}
console.log("Habían " + contador + " múltiplos enteros de 5");
*/

//* Múltiplos de seis
// Imprime múltiplos de 6 hasta 60.000, utilizando un WHILE.
/*
var numerito = 6;
while (numerito <= 60000){
    if(numerito % 6 == 0){
        console.log(numerito);
    }
    numerito++;
}
*/

//* Contando, a la manera del Dojo
// Imprime los números enteros del 1 al 100. Si es divisible por 5, imprime "Codificando" en su lugar. Si es por 10, también imprime "Dojo".
/*
for(var i = 1; i <= 100; i++){
    if(i%5==0){
        console.log('Codificando');
        if(i%10==0){
            console.log('Dojo');
        }
    }
    else{
        console.log(i);
    }
}
*/

//* ¿Qué sabes?
// Tu función recibirá un parámetro de entrada incoming. Por favor, console.log este valor.
/*
function myFunction (incoming){
    console.log(incoming);
}
myFunction("Hola");
*/

//* Guau, es enorme...
// Agrega números enteros impares de -300,000 a 300,000, y console.log la suma final. ¿Existe un atajo?
/*
var sum = 0;
for (var i = -300000; i <= 300000; i+=3){
    sum += i;
    //console.log(i);
}
console.log('La suma final es ' + sum);
*/

//* Cuenta regresiva cada cuatro
// Registra números positivos a partir de 2016, contando hacia atrás cada cuatro números (excluye 0), sin un bucle FOR.
/*
var cuentaAtras = 2016;
while(cuentaAtras >= 0){
    if(cuentaAtras % 4 == 0 && cuentaAtras != 0){
        console.log(cuentaAtras);
    }
    cuentaAtras --;
}
*/

//* Cuenta regresiva flexible
/* Basado en el anterior ejercicio: “Cuenta regresiva cada cuatro”, dado lowNum, highNum, mult, print múltiplos de mult
desde highNum hasta lowNum, usando un FOR. Para (2,9,3), imprime 9 6 3 (en líneas sucesivas).*/
/*
function funcioncita(lowNum, highNum, mult){
    for (var i = highNum; i >= lowNum; i--){
        if (highNum % mult == 0){
            console.log(highNum);
        }
        highNum --;
    }
}
funcioncita(2, 9, 3);
*/


//* La cuenta regresiva final
/* Esto se basa en "Cuenta regresiva flexible". Los nombres de los parámetros no son tan útiles, pero el problema es esencialmente idéntico;
¡no te dejes engañar! Dados 4 parámetros (param1, param2, param3, param4), imprime los múltiplos de param1, comenzando en param2 y extendiéndose
hasta param3. Una excepción: si un múltiplo es igual a param4, omítelo (no lo imprimas). 
Haz esto usando un WHILE. Dado (3,5,17,9), imprime 6,12,15 (que son todos los múltiplos de 3 entre 5 y 17, y excluyendo el valor 9).*/
/*
function funcioncita2(param1, param2, param3, param4){
    while(param2 <= param3){
        if(param2 % param1 == 0 && param2 != param4){
            console.log(param2);
        }
        param2 ++;
    }
}
funcioncita2(3, 5, 17, 9);
*/
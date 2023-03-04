//* Quitar espacios en blanco
/* Crea una función que, dada una cadena, devuelva todo el contenido de esa cadena, pero sin espacios en blanco.
Si se da la cadena "Pl ayTha tF u nkyM usi c", devuelve "PlayThatFunkyMusic".*/
function noBlanks(string){
    return console.log(string.replace(/ /g,''))
}
noBlanks("Pl ayTha tF u nkyM usi c");
console.log('--------------------------------');

//* Obtener dígitos
/* Crea una función de JavaScript que, dada una cadena, devuelva el número entero formado por los dígitos de la cadena.
Dado "0s1a3y5w7h9a2t4? 6! 8? 0", la función debería devolver el número 01357924680.*/
function noLetters(str){
    return console.log(str.replace(/\D/g, '',));
}
noLetters("0s1a3y5w7h9a2t4? 6! 8? 0");
console.log('--------------------------------');

//* Acrónimos
/* Crea una función que, dada una cadena, devuelva el acrónimo de la cadena (solo las primeras letras, en mayúscula).
Dado "no hay almuerzo gratis. Debes pagar por tu comida", devuelve "NHAG-DPPTC".
Dado "¡En vivo desde Nueva York, es sábado por la noche!", devuelve "ENDNYESPLN".*/
function acronymify(input){
    var result = input.match(/\b([a-zA-Z])/g).join('').toUpperCase();
    console.log(result);
}
acronymify("no hay almuerzo gratis. Debes pagar por tu comida");
acronymify("¡En vivo desde Nueva York, es sábado por la noche!");
console.log('--------------------------------');

//* Contar no espacios
/* Acepta una cadena y devuelve el número de caracteres sin espacio que encuentre en una cadena.
Por ejemplo, dado, "Amor, me estás volviendo loca", devuelve 29 (no 35).*/
function charCount(string2){
    let count = 0;
    for(let i = 0; i < string2.length; i++){
        count++;
    }
    console.log(count);
}
charCount("Amor, me estás volviendo loca");
console.log('--------------------------------');

//* Quitar cadenas más cortas
/* Dada una matriz de cadenas y un valor (longitud), elimina las cadenas más cortas que la longitud de la matriz.*/
function deleteItShort(str){
    let resultado = str.filter(oracion => oracion.length > str.length)
    console.log(resultado);
}
deleteItShort(["Mercury", "Gemini", "Apollo", "Juancholo", "Skylab B", "ISS"])



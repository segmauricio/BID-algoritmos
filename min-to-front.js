//* Min al comienzo
/* Dada una matriz de valores comparables, mueve el elemento más bajo al comienzo de la matriz, desplazando hacia atrás los elementos
que estaban antes. De lo contrario, no cambies el orden de la matriz. Dado [4,2,1,3,5], cámbialo a [1,4,2,3,5] y devuélvelo.
Como siempre, haz esto sin usar funciones integradas.*/
let arr = [4, 2, 1, 3, 5]
var smallest = arr[0];
var index = 0;

for (var i = 1; i < arr.length; i++){
    if (arr[i] <smallest) {
        smallest = arr[i];
        index = i;
    }
}
for (var x = index; x > 0; x--){
    var temp = arr[x];
    arr[x] = arr[x-1];
    arr[x-1] = temp;
}
console.log(arr);

//* Min al comienzo
/* Dada una matriz de valores comparables, mueve el elemento más bajo al comienzo de la matriz, desplazando hacia atrás los elementos
que estaban antes. De lo contrario, no cambies el orden de la matriz. Dado [4,2,1,3,5], cámbialo a [1,4,2,3,5] y devuélvelo.
Como siempre, haz esto sin usar funciones integradas.*/

let arr = [4,2,1,3,5]
var smallest = arr[0];

for(var i=1; i<arr.length; i++){
	if(arr[i] < smallest){
		smallest = arr[i];
	}
}
arr.forEach(function(item, i) {
    if(item == smallest){
        arr.splice(i, 1);
        arr.unshift(item);
    }
})

// Opcion 2
// arr.unshift(arr.splice(arr.findIndex(item => item == smallest), 1)[0])

console.log(arr);


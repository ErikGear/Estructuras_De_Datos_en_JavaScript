/**
 * REDUCE: lo que hace es una operación sobre todos los elementos y regresa un valor númerico
 */
const numbers = [1,2,3,4,5,6];

//de forma estructurada
function sumNumbers(collection) {
    let sum = 0;

    for (const numero of collection) {
        sum += numero;
    }

    return sum;
}

console.log(sumNumbers(numbers));

//REDUCE
//es una función inmutable
//recorre todos los elementos de un arreglo y aplica un procedimiento de una función de tipo callback
//REDUCE recibe dos párametros, el primero es una función
// y el otro es opcional, el cual es el valor incial apartir del cual inicia la sumatoria
function sumNumbers2(collection){
    return collection.reduce((suma, item)=> suma += item, 0);
}
console.log(sumNumbers2(numbers));
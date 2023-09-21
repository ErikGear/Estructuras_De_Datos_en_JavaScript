//los arreglos son estructuras de datos lineales
//En JS son dinamicos en cuanto a longitud y tipo de datos que pueden alamacenar 



//los arreglos se pasan por referencia
let array = [1, 2, "pato", true];

function showArray(array) {
   for (const item of array) {
    console.log(item);
   }
}

function showArray2(array) {
    for (const item in array) {
        console.log(array[item]);
    }
}


showArray(array);
showArray2(array);


//método push para agregar un elemento al final del arreglo
array.push("perro");
showArray2(array);

//método unshift para agregar un elemento al incio del arreglo
array.unshift("elefante");
showArray2(array);

//método POP, elimna y retorna el ultimo elemento del arreglo
let lastItem = array.pop();
console.log(array);
console.log(lastItem);

//método shift, elimina y retorna el primer elemento de un arreglo
let firstItem = array.shift();
console.log(firstItem);
console.log(array);

//atributo length, devuelve la logitud del arreglo
console.log(array.length);

//método slice, devuelve parte de una cade o arreglo 
//debemos indicar una posición inicila y una posición final - 1
let nuevoArreglo = array.slice(1, 3);
console.log(nuevoArreglo);

//método splice, sirve para agregar elementos y/o borrar elementos de un arreglo, apartir de cierta posoción en el mismo y determinar si los elementos se recorren o eliminan
// *splice modifica el arreglo orginal
let verduras = ["cebolla", "perejil", "tomate", "calabaza", "brocoli"];
// * El segundo párametro indica si se recorren (0) los elementos para insertar los nuevos, si se elimnan indicamos un (1).
verduras.splice(2, 0, "pepino", "limon");
console.log(verduras);



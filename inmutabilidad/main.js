const numbers = [1,2,3,4,5];
const numbers2 = [1,2,3,4,5];

//metodo mutable, esta modificando al arreglo original
function mulMutable(collection, num){
    for (let i = 0; i <collection.length; i++) {
        collection[i] *= num
    }
    return collection;
}

const newArray = mulMutable(numbers, 2);
console.log(newArray);

//metodo inmutable, no modifica el arreglo, solo realiza una copia sin cambiar al arreglo orginal
function mulInmutable(collection, num){
    const newNumbers = [];

    for (const item of collection) {
        newNumbers.push(item * num);
    }

    return newNumbers;
}


const newArray2 = mulInmutable(numbers2,5);
console.log(newArray2);
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


//Inmutabilidad en Objetos
class Beer {
    constructor(name, price){
        this._name = name;
        this._price = price;
    }

    set name(name) {
        this._name = name;
    }
    get name(){
        return this._name;
    }

    set price(price){
        this._price = price;
    }
    get name(){
        return this._price;
    }
}

//modifica el objeto original
function toUpperMutable(beer){
    beer.name = beer.name.toUpperCase();
    return beer;
}

//no modifica el objeto original
//realiza una copia del objeto
function toUpperImutable(beer){
    // de esta forma estamos creando una copia del objeto y asi no modificamos el objeto original
   const newBeer = {...beer}; //operador spread
   newBeer.name = newBeer.name.toUpperCase();
   return newBeer;
}

const beer = new Beer("delirium", 6);
const newBeer = toUpperMutable(beer);
console.log(newBeer);
console.log(beer);

console.log(toUpperImutable(beer));
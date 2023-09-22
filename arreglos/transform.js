const numbers = [1, 2, 3, 4, 5];

function sumNumber(collection, num){
    const newCollection = [];
    for (const itwm of collection) {
        newCollection.push(item + num);
    }
    return newCollection;
}

//console.log(sumNumber(numbers));

//usando la función map
//map trnasforma los elementos y retorna una nuevo colleción
function sumNumber2(colection, num){
    return colection.map((item)=> item + num);
}

console.log(sumNumber2(numbers, 10));
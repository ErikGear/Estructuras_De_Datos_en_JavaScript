const names = ["Ana", "Alejandro", "Francisco", "Héctor", "Javier", "Jesús", "Sergio", "Víctor", "Armando"];

//modo estructurado 
function searhFirstLetter(collection, letter){
    const newCollection = [];


    for (const word of collection) {
        if (word[0].toUpperCase() === letter.toUpperCase()) {
            newCollection.push(word);
        }
    }

    return newCollection;
}
//console.log(searhFirstLetter(names, "a"));


//progrmación fucnional
//fucniones ya existentes de javascript
function searhFirstLetter2(collection, letter){
    const newCollection = collection.filter((word)=>
    word[0].toUpperCase() === letter.toUpperCase()
    );

    return newCollection;
}

console.log(searhFirstLetter2(names, "a"));
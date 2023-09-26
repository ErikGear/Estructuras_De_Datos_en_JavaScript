/*
Pilas
es una estructura de datos lineal usada para almacenar datos, con el protocolo LIFO (last-in, first out)--> ultimo en
entrar, primero en  salir. lo cual significa que al insertar(push), se agregan al tope de la estructura y un elemento
se saca(pop), del mismo tope de la estructura.

el ultimo insertado se le llama tope(top), y elemento totalmente opuesto se le llama base.


*/

class Pila{
    //estableciendo el principio de ocultación de los atributos
    #data = [];

    //metodo PUSH agregaelementos

    push(item){
        this.#data.push(item);
    }

    //Elimina el ultimo elemento de la pila
    // y al mismo tiempo retorna dicho elemento
    pop(){
      try {
        if (this.#data.length === 0) {
          return this.#data.pop();
        } else {
          throw "Error, no hay elmentos en la Pila";
        }
      } catch (e) {
        console.log(e);
      }
        
    }

    //indica si la pila contiene elementos
    isEmpty(){
        return this.#data.length === 0;
    }

    // muestra el elemento ubicado en el tope
    peek(){
      if (this.#data !== 0) {
        let ultimo = this.#data.length;
        return this.#data[ultimo - 1];
      } else {
        return -1;
      }
    }

    toString(){
        let longitud = this.#data.length-1;
        for (let i = longitud; i >= 0 ; i--) {
            console.log(`Item: ${this.#data[i]}`);
        }
    }
}

const pila  = new Pila();

pila.push(100);
pila.push(500);
pila.push(600);
pila.push(800);
pila.push(900);

pila.toString();

console.log(`Peek: ${pila.peek()}`);
console.log(`Pop: ${pila.pop()}`);
console.log(`Vacia?: ${pila.isEmpty()}`);

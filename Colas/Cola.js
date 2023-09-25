"use strict";
/*
Una cola es una estructura de datos lineal que almacena datos manipulados con el protocolo fifo
 (First-in, First Out). esto significa que los elementos son insertados al final (enqueue), de la
 estructura, eliminando elementos que se encuentran en la cabeza de la estructura (dequeue) desencolar

 la estructura cola tiene las siguientes operaciones:
 el constructor Queue()
 el metodo is_empty() averigua si la cola esta vacia
 metodo length() --> regresa el numero de elementos en la cola
 metodo enqueue() --> recibe un elemento y lo agrega al final de la cola
 metodo dequeue() --> elimina el elemento al principio de la cola y lo regresa
*/

class Queue {
  #data = [];

  //métodos

  isEmpty() {
    return this.#data.length === 0;
  }

  length() {
    return this.#data.length;
  }

  //encolar elementos
  enqueue(item) {
    this.#data.push(item);
  }

  //desencolar elementos
  dequeue() {
    try {
      if (this.#data.length === 0) {
        throw "Error, no existen elementos en la COLA";
      } else {
        return this.#data.shift();
      }
    } catch (e) {
      console.log(`${e}`);
    }
  }

  //muestra el item en el frente de la cola
  frontValue() {
    try {
      if (this.#data.length === 0) {
        throw "Error, no existen elementos en Cola";
      } else {
        console.log(`Frente: ${this.#data[0]}`);
      }
    } catch (error) {
      console.log(`${e}`);
    }
  }

  toString() {
    for (const item of this.#data) {
      console.log(`Item queue: ${item}`);
    }
  }
}

const queue = new Queue();

queue.enqueue(9);
queue.enqueue(8);
queue.enqueue(7);
queue.enqueue(6);
queue.enqueue(5);
queue.enqueue(4);
queue.enqueue(3);

//mostrando elementos encolados
queue.toString();

//mostrando el elemento al incio de la cola
console.log(`${queue.frontValue()}`);

//desencolado un elemento
console.log(`Elemento eliminado: ${queue.dequeue()}`);



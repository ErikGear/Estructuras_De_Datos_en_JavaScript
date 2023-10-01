class NodoDoble {
  constructor(data) {
    this._data = data;
    this._next = null;
    this._previous = null;
  }

  set setData(newData) {
    this._data = newData;
  }
  get getData() {
    return this._data;
  }

  set setNext(newNext) {
    this._next = newNext;
  }
  get getNext() {
    return this._next;
  }

  set setPrevious(newPrevious) {
    this._previous = newPrevious;
  }
  get getPrevious() {
    return this._previous;
  }
}

class ListaDoble {
  constructor() {
    this.head = null;
    this.tail = null;

    this.size = 0;
  }

  get getSize() {
    return this.size;
  }

  get isEmpty() {
    return this.size === 0;
  }

  insertarNodo(nodo){
    const nuevoNodo = new NodoDoble(nodo);
    if (this.head === null) {
      this.head = nuevoNodo;
      this.tail = nuevoNodo;
    } else {
      this.tail._next = nuevoNodo;
      nuevoNodo._previous = this.tail;
      this.tail = nuevoNodo;
    }

    this.size++;
  }

  recorrerLista(){
    let tmp = this.head;

    while (tmp !== null) {
      console.log(`${tmp._data}`);
      tmp = tmp._next;
    }
  }

  clear(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }



}

const listaDoble = new ListaDoble();
listaDoble.insertarNodo(10);
listaDoble.insertarNodo(25);
listaDoble.insertarNodo(12);
listaDoble.insertarNodo(1);
listaDoble.insertarNodo(89);

//recorriendo lista
listaDoble.recorrerLista();

console.log(`Longitud: ${listaDoble.getSize}`);


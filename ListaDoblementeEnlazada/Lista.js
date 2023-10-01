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

    this.head.setNext = this.tail;
    this.tail.setPrevious = this.head;

    this.size = 0;
  }

  get getSize() {
    return this.size;
  }

  get isEmpty() {
    return this.size === 0;
  }

  insertarNodo(nodo){
    const nuevoNodo = new Node(nodo);
    if (this.head === null) {
      this.head = nuevoNodo;
      this.tail = nuevoNodo;
    } else {
      this.tail._next = nuevoNodo;
      nuevoNodo = this.tail;
      this.tail = nuevoNodo;
    }

    this.size++;
  }

  clear(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }



}

const listaDoble = new ListaDoble();
listaDoble.insertNode(10);
listaDoble.insertNode(25);
listaDoble.insertNode(12);
listaDoble.insertNode(1);
listaDoble.insertNode(89);

//listaDoble.recorridoTransversal();
console.log(`Longitud: ${listaDoble.getSize}`);
listaDoble.recorridoTransversalInverso();

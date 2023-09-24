class NodoDoble {
  constructor(data, next, previous) {
    this._data = data;
    this._next = next;
    this._previous = previous;
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
    this.head = new NodoDoble(null, null, null);
    this.tail = new NodoDoble(null, null, null);

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

  insertNode(data) {
    if (this.size === 0) {
      const nuevoNodo = new NodoDoble(data, this.tail, this.head);
      this.head.setNext = nuevoNodo;
      this.tail.setPrevious = nuevoNodo;
    } else {
      const nuevoNodo = new NodoDoble(data, this.tail, this.tail.previous);
      this.tail.getPrevious.setNext = nuevoNodo;
      this.tail.setPrevious = nuevoNodo;
    }
    this.size++;
  }

  recorridoTransversal() {
    let tmp = this.head;
    while (tmp.getNext !== null) {
      tmp = tmp.getNext;
      console.log(`Nodo: ${tmp.getData}`);
    }
  }

  recorridoTransversalInverso() {
    let tmp = this.tail;
    while (tmp.getPrevious !== null) {
      tmp = tmp.getPrevious;
      console.log(`Nodo: ${tmp.getData}`);
    }
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

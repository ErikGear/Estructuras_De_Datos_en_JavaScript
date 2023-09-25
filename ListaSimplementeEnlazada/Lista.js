class Nodo {
  constructor(data) {
    this._data = data;
    this._next = null;
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
}

/*
lista enlazada simple:
una lista es una estructura de datos que contiene una secuencia de elementos de cierto tipo, las listas no son arreglos,
ya que las listas no tienen un tamaño fijo, mientras que un arreglo si; esta caracteristica las hace flexibles y muy atractivas para
diferentes opciones de desarrollo.

para mantener esta flexibilidad de crecimiento es necesario implementar una lista enlazada la cual permite instancear
elementos en memoria de forma no secuencial y recalco en memoria, de forma logica si lo deben de ser.


lista enlazada:
una lista enlaza es una coleccion de objetos, llamados nodos, el cual cada uno de ellos contiene un campo interno que
apunta al siguiente elemento, lo cual permitira realizar un recorrido transversal por la estructura.
*/

class ListaSimplementeEnlazada {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //métodos
  get getSize() {
    return this.size;
  }

  get isEmpty() {
    return this.size === 0;
  }

  recorrerLista(){
    let tmp = this.head;

    while(tmp !== null){
      console.log(`Nodo: ${tmp.getData}`);
      tmp = tmp.getNext;
    }
  }

  ultimoNodo(){
    if (this.head === null) {
      return null;
    }
    let ultimo = this.head;
    let control = this.head;
    
    while(control !== null){
      ultimo = control;
      control = ultimo.getNext;
    }
    return ultimo;
  }

  insertarNodo(data){
    if (this.size === 0) {
      this.head = new Nodo(data);
    } else {
      const ultimo = this.ultimoNodo();
      ultimo.setNext = new Nodo(data);
    }
    this.size++;
  }

  
}

const lista = new ListaSimplementeEnlazada();
lista.insertarNodo(10);
lista.insertarNodo(20);
lista.insertarNodo(25);

lista.recorrerLista();
console.log(`Longitud: ${lista.getSize}`);

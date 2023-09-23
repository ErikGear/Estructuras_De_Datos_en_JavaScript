/**
 *  Clase Autoreferenciada
 * Una clase autoreferenciada contiene un atributo de instancia que hace referencia a otro objeto del mismo tipo de clase, por ejemplo, en la clase NODO el parametro "NEXT" del constructor recibe una referencia al sigueinte nodo enlazado del mismo tipo "Nodo"
 */

class Nodo {
    constructor(data){
        this._data = data;
        this._next = null; //el atributo next hace referencia a un objeto de clase Nodo, es decir un objeto de la misma clase que se esta declarando aquí, es por ello que se emplea el termino de clase auto referenciada.
        //* El atributo _next es un enlace, vincula a un objeto de tipo nodo con otro objeto del mismo tipo

        //* Por lo tanto un NODO es un objeto autoreferenciado, el cual permite crear estructuras de datos útiles como listas, colas, pilas y árboles.
    }

    set setData(data){
        this._data = data;
    }

    get getData(){
        return this._data;
    }

    get getNext(){
        return this._next;
    }

    set setNext(next){ 
        this._next = next;
    }

}

//creando un primer nodo
const head = new Nodo(10);

head.setNext = new Nodo(15);
head.getNext.setNext = new Nodo(20);
head.getNext.getNext.setNext = new Nodo(25);

//recorriendo los nodos
let tmp = head;
while(tmp.getNext !== null){
    console.log(`Nodo: ${tmp.getData}`);

    tmp = tmp.getNext;
    
}
console.log(`Nodo: ${tmp.getData}`);


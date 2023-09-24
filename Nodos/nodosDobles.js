class NodoDoble {
    constructor(data){
        this._data = data;
        this._next = null;
        this._prev = null;
    }

    set setNext(next){
        this._next = next;
    }
    get getNet(){
        return this._next;
    }

    set setPrev(prev){
        this._prev = prev;
    }
    get getPrev(){
        return this._prev;
    }

    set setData(data){
        this._data = data;
    }
    get getData(){
        return this._data;
    }
}




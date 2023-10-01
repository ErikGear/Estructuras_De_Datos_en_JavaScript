//Árbol Binario
//un árbol binario es aquel que se encuentra vacio 
// o que cuenta con 0 0 1 nodo hijo, maximo dos nodos hijos, los cuales se conocen como hijo izquierdo e hijo derecho
class TreeNode {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insertarNodo(nodo){
        const node = new TreeNode(nodo);

        if (this.root === null) {
            this.root = node;
            return;
        }

        let tmp = this.root;

        while (true) {
            if (nodo === tmp.data) {
                break;
            }

            if (nodo < tmp.data) {
                if (tmp.left === null) {
                    tmp.left = node;
                    break;
                }
                tmp = tmp.left;
            } else {
                if (tmp.right === null) {
                    tmp.right = node;
                    break;
                }
                tmp = tmp.right;
            }
        }
    }

}

const arbolBinario = new BinarySearchTree();
arbolBinario.insertarNodo(10);
arbolBinario.insertarNodo(2);
arbolBinario.insertarNodo(15);
arbolBinario.insertarNodo(6);
arbolBinario.insertarNodo(8);
arbolBinario.insertarNodo(4);


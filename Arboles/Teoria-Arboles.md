# Arboles
**Un arbol es una estructura de datos que consiste en un conjunto de nodos y aristas, en una relacion jerarquica.**

La organización entre los elementos en un arbol es similar a un arbol genealogico común, donde existen relaciones del tipo: 

- padre, hijo, hermano, etc. Los datos son almacenados en nodos y pares de nodos que estan ligados entres si por una arista que reprensenta la relacion entre 2 nodos, elemento base es conocido como raiz (root).

**Definición formal de arbol:** se puede definir como un conjunto de nodos que esta vacio o que tiene un nodo llamado raiz, que esta conectado por aristas a 0 o mas SubArboles, para formar un estructura jerarquica cada subarbol es en si mismo, por definicion un arbol.

## **Terminología**
1. **Nodo:** cada elemento que almacena información en un arbol, esta información normalmente es compuesta: objetos, clases o un ADT especifico.

1. **Nodo raíz:** es el nodo en el primer nivel, solo un elemento puede ser raiz.

2. **Nodo padre:** es aquel que tiene almenos un nodo hijo.

3. **nodo hijo:** son aquellos nodos que estan unidos a un nodo de nivel previo

4. **Nodo hermano:** son 2 nodos que se encuentran en el mismo nivel y estan conectados al nodo padre.

5. **Nodo hoja:** son todos aquellos que no tienen hijos, pero si tienen un padre.

6. **Nodos interiores:** son aquellos nodos que no son son raiz y que tienen almenos un hijo.

7. **Subarbol:** es aquel arbol generado apartir de un nodo que no sea la raiz.

8. **Nivel (profundidad):** es el numero de ancestros que tiene un arbol apartir del nodo raiz.

9.  **Grado de un arbol:** es el numero de mayor de hijos que puede tener un nodo en un arbol.

10. **Peso de un arbol:** es el numero de nodos que tiene el arbol (subarbol)  en todos sus niveles.

11. **Arbol Binario:** es aquel arbol que esta vacio o cuenta con un subarbol con 0 - 1 o maximo 2 nodos hijo, los cuales se conocen como hijo izquierdo e hijo derecho

Para implementar un arbol binario en programacion se requiere la definición de un nodo que contenga un dato, una referencia
al hijo izquierdo y una refrencia al hijo derecho.
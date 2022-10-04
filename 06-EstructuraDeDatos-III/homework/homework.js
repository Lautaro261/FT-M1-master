"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto value existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
};

//-------------------------------------------------------------------------------------------------------

BinarySearchTree.prototype.size= function(){
  if(!this.right && !this.left){
    return 1;
  }
  if(!this.right){
    return 1 + this.left.size();
  }
  if(!this.left){
    return 1 + this.right.size();
  }
  return + 1 + this.left.size() + this.right.size();
};

//--------------------------------------------------------------------------------------------------------

BinarySearchTree.prototype.insert = function(value){
  if(value < this.value){
    if(this.left === null){
      this.left = new BinarySearchTree (value);
    }else{
      this.left.insert(value);
    }
  }else{
    if(value > this.value){
      if(this.right === null){
        this.right =new BinarySearchTree (value);
      }else{
        this.right.insert(value);
      }
    }
  }
};

//--------------------------------------------------------------------------------------------------------

BinarySearchTree.prototype.contains = function(value){
  if(value === this.value){
    return true;
  }else{
    if(value > this.value){
      // derecha
      if(!this.right){
        return false;
      }else{
        //recursion 
        return this.right.contains(value);
      };
    }else{
      if(!this.left){
        return false;
      }else{
        return this.left.contains(value);
      }; 
    }
  }
};




//--------------------------------------------------------------------------------------------------------

BinarySearchTree.prototype.depthFirstForEach = function(cb,order){
  if(order === "in-order" || !order){
    // izquierda nodo derecha  
       this.left && this.left.depthFirstForEach(cb, order);  
      cb(this.value);
      this.right && this.right.depthFirstForEach(cb, order);
    }else{
      if(order === "pre-order"){
        //nodo izquierda derecha 
        cb(this.value);                                                 //recorre nodo
        this.left && this.left.depthFirstForEach(cb, order);           //recore izquierda 
        this.right && this.right.depthFirstForEach(cb, order);         //recorre derecha
      }else{
        //izquierda derecha nodo
        this.left && this.left.depthFirstForEach(cb, order);
        this.right && this.right.depthFirstForEach(cb, order);
         cb(this.value);
      }
    }
};

//--------------------------------------------------------------------------------------------------------


BinarySearchTree.prototype.breadthFirstForEach = function(cb,array){
  if(!array){
  var array = [];
};
  cb(this.value);
  //guardar los hijos en el arreglo
  this.left && array.push(this.left);
  this.right && array.push(this.right);
  //sacar el pirmer valor del arrya
  array.length && array.shift().breadthFirstForEach(cb, array);
};



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};

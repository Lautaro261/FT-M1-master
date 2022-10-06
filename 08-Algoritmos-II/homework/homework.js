'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1){
    return array;
  }
  var pivot = array[0];
  var right = [];
  var left = [];
  for(var i=1; i<array.length; i++){
    if(array[i]< pivot){
      left.push(array[i]);
    }else{
      right.push(array[i]);
    }
  };
  return quickSort(left).concat(pivot).concat(quickSort(right));

}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};

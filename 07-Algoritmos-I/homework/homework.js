'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var primo = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61];
  var resultado = [1];
  var p = 0;
  //num = 5
  
    while (num > 1){      
  if(num % primo[p] === 0){      // 5 % 2 === 0 si                    // 
    resultado.push(primo[p]);     //
    num = num / primo[p];          // 
  }else{
    if(num % primo[p+1] === 0){
      resultado.push(primo[p+1]);
      num = num / primo[p+1];
    }else{
      p++ ;
    };
  };
    };
  return resultado;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var aux = 0;
  for(var x = 0; x < array.length; x++){
    for(var i = 0; i < array.length-1; i++){
      if(array[i+1] < array[i]){
        aux = array[i];
        array[i] = array [i+1];
        array[i+1] = aux;
      };
    };
  };
  return array;
};


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(var i =1; i<array.length; i++){
    var elemento = array[i];
    var j = i-1;
    while(j>=0 && array[j]>elemento ){
      array[j+1] = array [j];
      j--;
    }
    array[j+1] = elemento; 
  };
  return array;

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  
  for(var i=0; i< array.length; i++){
    var j = i+1;
    var contenedor = array[i];
    while(j <= array.length-1){
      while(array[i] < array[j]){
      j= j + 1;
      };
      if(j<array.length){
      contenedor = array[j];
      var aux = array[i];
      array[i] = contenedor;
      array[j] = aux;
      j=j+1
      }
    };    
  };
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};

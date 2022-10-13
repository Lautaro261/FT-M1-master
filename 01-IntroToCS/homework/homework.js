'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let arr = num.split("")
  arr.reverse();
  console.log(arr);
 var acumulador = 0
  for(let i = 0; i < arr.length; i++ ){
    acumulador = acumulador + arr[i] * 2 ** i
  }
    return acumulador;
}
function DecimalABinario(num) {
  // tu codigo aca
  var array = []
  while (num !== 0) {
     array.push(num % 2)
     num = parseInt(num/2)
   }
 array = array.reverse()
 var string = ""
 for (let i=0; i<array.length ; i++){
     string = string + array[i];
    }
  return string

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
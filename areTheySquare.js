/**
 * This function determines if every number in an array is a square number
 * @param {int array} arr 
 * @returns boolean, undefined
 */
var isSquare = function(arr){
    return arr.length ? arr.every(num => Math.sqrt(num) % 1 == 0) : undefined
  }
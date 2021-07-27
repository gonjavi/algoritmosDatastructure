// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
// mi solución
/* function reverseInt(n) {
  let number = n.toString();
  if ((Math.sign(n)) === -1) {    
    return parseInt('-' + number.split('').reverse().join(''))
  } else {
    return  parseInt(number.split('').reverse().join(''));
  }
} */

//solution 1
function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('');
  return parseInt(reversed) * Math.sign(n);
}
module.exports = reverseInt;

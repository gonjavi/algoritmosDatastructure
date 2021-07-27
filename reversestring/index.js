
// solution 1
/* function reverse(str) {
  const arr = str.split('');
  arr.reverse();
  return arr.join('');
} */

/* function reverse(str) {
  return arr.split('').reverse().join('');
}
 */

/* function reverse(str) {
  return str
    .split('')
    .reverse()
    .join('');
} */

// solution 2
function reverse(str) {
  let reversed = '';

  for (const character of str) {
    reversed = character + reversed;
  }
  return reversed;
} 


/* // solution 3
function reverse(str) {
  return str.split('').reduce((reversed, character) => {
    return character + reversed;
  }, '');
}  */

// solution 3
/* function reverse(str) {
  return str.split('').reduce((reversed, character) => character + reversed,'');
}  */

module.exports = reverse;

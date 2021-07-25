
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
/* Crear un string vacio llamado reversed
    crear un foreach caracter en el string
        tome el caracter y añadalo al comienzo de reversed
    
    retornar el valor reversado
  */
function reverse(str) {
  let reversed = '';

  for (const character of str) {
    reversed = character + reversed;
    debugger;
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

reverse('asdf');

module.exports = reverse;

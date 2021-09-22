// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// to fins the largest element into the array and push it to the end
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++ ) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j+1]) {
        const lesser = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  // return sorted array
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++ ) {
    let indexOfMin = i;
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      let lesser =  arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  // [ 'a', 'b', 'c', 'd'];
  const center = Math.floor(arr.length / 2); // would be c
  const left = arr.slice(0, center);  // a, b
  const right = arr.slice(center);  // c, d

  return merge(mergeSort(left), mergeSort(right));
}

// ordena y une dos arreglos
function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  // agregar lo que queda al final del array - concat 
  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };





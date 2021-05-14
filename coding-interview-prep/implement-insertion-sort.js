function insertionSort(array) {
  // Only change code below this line
  
  let length = array.length;
  function swap(array,index0,index1){
    let temp = array[index0];
    array[index0] = array[index1];
    array[index1] = temp;
  }

  for(let i = 0; i < length; i++){
    for(let j = i + 1; j > 0; j--) {
      if(array[j] < array[j - 1]) {
        swap(array, j - 1, j);
      }
    }
  }

  return array;
  // Only change code above this line
}

insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
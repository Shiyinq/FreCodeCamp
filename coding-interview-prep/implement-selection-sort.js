function selectionSort(array) {
  // Only change code below this line
  let first = 0;
  let two = 0;
  let length = array.length;

  function swap(array,index0,index1){
    let temp = array[index0];
    array[index0] = array[index1];
    array[index1] = temp;
  }

  for(let i= 0; i < length; i++){
    if(array[two] > array[i]) two = i;

    if(i === length - 1){
      swap(array, first, two);
      first++;
      two = first;
      i = two;
    }
  }

  return array;
  // Only change code above this line
}


selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
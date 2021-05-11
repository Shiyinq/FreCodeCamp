function bubbleSort(arr) {
  // Only change code below this line
  function swap(arr, index0, index1){
    let temp = arr[index0];
    arr[index0] = arr[index1];
    arr[index1] = temp;
  }
  
  for(let i = 0; i < arr.length - 1; i++){
    for(let j = 0; j < arr.length - 1; j++){
      if(arr[j] > arr[j + 1]){
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
  // Only change code above this line
}
bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
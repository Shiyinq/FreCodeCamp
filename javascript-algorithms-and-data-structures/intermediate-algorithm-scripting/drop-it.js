function dropElements(arr, func) {
  let arr2 = [...arr];

  for(let i = 0; i < arr.length; i++){
    if(func(arr[i])) {
      break;
    }
    arr2.shift();
  }
  
  return arr2;
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1; }));
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));
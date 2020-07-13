function smallestCommons(arr) {
  arr.sort((a, b) => a -b);
  let range = [];

  for(let i = arr[0]; i <= arr[1]; i++){
    range.push(i);
  }
  
  function func2(a, b) {
      while (b !== 0) {
          a = [b, b = a % b][0];
      }
      return a;
  }

  return range.reduce((a, b) => (a * b) / func2(a, b));
}


console.log(smallestCommons([1, 5]));

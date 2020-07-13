function steamrollArray(arr) {
  if (!Array.isArray(arr)) {
    return [arr];
  }

  let goOut = [];

  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < steamrollArray(arr[i]).length; j++){
      goOut.push(steamrollArray(arr[i])[j]);
    }
  }

  return goOut;
}


let arr = [1, [2], [3, [ [4] ] ] ];

console.log(steamrollArray(arr));

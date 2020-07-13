function sumAll(arr) {

  let order = arr[0] > arr[1] ? arr.sort((a,b) => a-b) : arr;
  let arrToSum = [];

  for(let i = order[0]; i <= order[1]; i++) {
    arrToSum.push(i);
  }

  return arrToSum.reduce((sum,num) => {
    return sum + num;
  },0)

  // return result;
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));

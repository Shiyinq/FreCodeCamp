// 4 + 3 = 7  1 + 3 = 4
// 2 + 5 = 7  2 + 5 = 7
// 4 + 7 = 11

function pairwise(arr, arg) {

  if(arr.lentgth == 0) return 0;

  let elUsed = [];
  let result = 0;

  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(i < j) {  
        if(arr[i] + arr[j] == arg && !elUsed.includes(i) && !elUsed.includes(j)) {
            // console.log(
            // `Result ${arr[i]}(${i}) + ${arr[j]}(${j}) = ${arr[i] + arr[j]}`
            // );
            elUsed.push(i, j);
            result += i + j;
        }
      }
    }
  }

  return result;
}

pairwise([1, 4, 2, 3, 0, 5], 7);
pairwise([0, 0, 0, 0, 1, 1], 1);
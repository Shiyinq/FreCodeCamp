/** Berlaku untuk bilangan positive aja
 function largestOfFour(arr) {
  let num = 0;
  let max = [];
  arr.forEach((a,i) => {
    arr[i].forEach((b, j) => {
      let check = arr[i][j];
      if(check > num) {
        num = check;
      }
    })

    max.push(num);
    num = 0;

  })
  
   return max;
}
*/

 function largestOfFour(arr) {
  let num = 0;
  let max = [];

  arr.forEach(a => {
    num = Math.max(...a);
    max.push(num);
    num = 0;
  })

  return max;
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);

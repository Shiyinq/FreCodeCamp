function sumFibs(num) {
  let a = 0;
  let b = 1;
  let fib = [];
  
  for(let i=0; i < num; i++) {

    if(b > num) {
      break;
    }else {
      if((b % 2) === 1) { 
        fib.push(b);
      }

      let sum = a + b; a = b; b = sum;
    }

  }

  return fib.reduce((acum, sum) => acum + sum);
}

console.log(sumFibs(10));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(4));
console.log(sumFibs(75024));
console.log(sumFibs(75025));

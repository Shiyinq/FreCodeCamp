function faktor(num) {
  let faktor = [];
  let akar = Math.floor(Math.sqrt(num));

  for(let i = 1; i <= akar; i++){

    if(num % i === 0) {
      faktor.push(i);
      
      if (num / i !== i){
        faktor.push(num / i);
      }
    }

  }

  return faktor.sort((a,b) =>  a- b);
}

// console.log(faktor(10));

function sumPrimes(num) {
  let primes = [];
  let sum = 0;

  for(let i = 1; i <= num; i++){
    let f = faktor(i);

    if(f.length == 2) {
      primes.push(i);
      sum += i;
    }
  }

  return sum;
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));

function factorialize(num) {
  let i = 1;
  let n = 0;

  do{
    n == 0 ? n += i : n *=i;
    i++;
  }while(i <= num);

  console.log(n);

  return n;
}

factorialize(5);

function repeatStringNumTimes(str, num) {
  let repeat = [];

  let i = 0;
  while(i < num) {
    repeat.push(str);
    i++
  }

  return repeat.join('');
}

repeatStringNumTimes("abc", 3);

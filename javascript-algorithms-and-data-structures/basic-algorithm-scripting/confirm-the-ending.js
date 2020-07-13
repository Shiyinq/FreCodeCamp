function confirmEnding(str, target) {
  let lenStr = str.length;
  let lenTarget = target.length;
  let result;
  
  let i = 0;
  let check = [];

  for(let j = lenStr - 1; j >= 0 ; j--){

    if(i < lenTarget) check.push(str[j]);

    i++;
  }

  check = check.reverse().join('');
  result = check === target ? true : false;

  return result;
}

confirmEnding("Bastian", "n");

function reverseString(str) {
  let myAStr = str.split('');
  let reverse = '';
  
  for(let i = myAStr.length - 1; i >= 0; i--) {
    reverse += myAStr[i];
  }
  
  return reverse;
}

reverseString("hello");

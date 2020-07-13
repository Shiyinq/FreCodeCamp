function fearNotLetter(str) {
  let alfabet = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 
    's', 't', 'u', 'v', 'w', 'x', 
    'y', 'z'
  ];

  let range = str.split('').map(a => alfabet.indexOf(a));
  
  for(let i = range[0]; i <= range[range.length - 1]; i++) {
    if(!range.includes(i)) {
      return alfabet[i];
    }
  }

  return undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));

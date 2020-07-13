function rot13(str) {
  str = str.toUpperCase().split(' ');

  let a = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
  let b = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  let decode = [];

  for(let i = 0; i < str.length; i++) {
    let word = '';

    for(let j = 0; j < str[i].length; j++) {
      let char = str[i][j];

      if(a.includes(char)) {
        let iA = a.indexOf(char);
        word += b[iA];
      }else if(b.includes(char)) {
        let iB = b.indexOf(char);
        word += a[iB];
      }else {
        word += char;
      } 
    }

    decode.push(word);
    word = '';
  }

  return decode.join(' ');
}

console.log(rot13("SERR YBIR?"));
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
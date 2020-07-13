function translatePigLatin(str) {
  var vocal = ['a', 'i', 'u', 'e', 'o'];
  var countVocal = 0;
  var str2 = str;

  if(vocal.includes(str.charAt(0))) {
      countVocal++;
      str2 = str + 'way';
  }else {
    for(let i = 0; i < str.length; i++) {
      if(!vocal.includes(str[i])) {
        str2 = str2.substr(1) + str[i];
      }else if (vocal.includes(str[i])) {
        countVocal++;
        str2 += 'ay';
        break;
      }
    }
  }

  return countVocal > 0 ? str2 : str2 + 'ay';
}

console.log(translatePigLatin("consonant")); // onsonantcay
console.log(translatePigLatin("algorithm")); // algorithmway
console.log(translatePigLatin("glove")); // oveglay
console.log(translatePigLatin("schwartz")); // artzschway
console.log(translatePigLatin("eight")); // eightway
console.log(translatePigLatin("rhythm")); // rhythmay
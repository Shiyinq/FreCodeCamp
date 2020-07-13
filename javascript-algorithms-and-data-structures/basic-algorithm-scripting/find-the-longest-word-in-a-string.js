function findLongestWordLength(str) {
  let len = 0;
  let strArray = str.split(' ');

  strArray.forEach(w => w.length >= len ? len = w.length : len = len);

  return len;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

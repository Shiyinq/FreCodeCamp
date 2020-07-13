function myReplace(str, before, after) {
  let upperCase = before.charAt(0) == before.charAt(0).toUpperCase();
  let regexSearch = new RegExp(before,"ig");

  if(upperCase) {
    after = after.charAt(0).toUpperCase() + after.substring(1);
  }else {
    after = after.toLowerCase();
  }

  return str.replace(regexSearch, after);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
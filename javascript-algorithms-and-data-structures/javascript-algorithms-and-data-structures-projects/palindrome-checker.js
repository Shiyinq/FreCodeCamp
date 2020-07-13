function palindrome(str) {
  str = str.replace(/([\W\_])/g, '').toLowerCase();
  let first = str.split('');
  let second = str.split('').reverse();

  return first.every((v, i) => v == second[i]);
}


console.log(palindrome("eye"));
console.log(palindrome("race car"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("not a palindrome"));
console.log(palindrome("almostomla"));
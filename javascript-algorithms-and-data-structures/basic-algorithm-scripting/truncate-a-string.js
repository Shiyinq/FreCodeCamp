function truncateString(str, num) {
  let strLen = str.length;
  let check = num > strLen ? strLen : num;
  
  let truncate = '';

  for(let i = 0; i < check; i++){
    truncate += str[i];
  }

  strLen != check ? truncate += '...' : truncate;


  return truncate;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

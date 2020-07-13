function mutation(arr) {
  let str1 = arr[0].toLowerCase(); str1 = str1.split('');
  let str2 = arr[1].toLowerCase();
  let str2Len = str2.length;

  let srtMatch = 0;

  for(let i=0; i < str2Len; i++){
    if(str1.includes(str2[i])) {
      srtMatch++;
    }
  }
  
  // console.log(srtMatch == str2Len);

  return srtMatch === str2Len;
}

mutation(["hello", "hey"]);
mutation(["hello", "Hello"]);
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])
mutation(["Mary", "Army"]);
mutation(["Alien", "line"]);

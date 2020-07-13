function uniteUnique(...arr) {
  let items = [...arr];
  let myArr = [];

  for(let i=0; i < items.length; i++){
    for(let j=0; j < items[i].length; j++){
      if(!myArr.includes(items[i][j])) {
        myArr.push(items[i][j]);
      }
    }  
  }

  return myArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

function titleCase(str) {
  let lower = str.toLowerCase().split(' ');

  let word = '';
  let titleCase = [];

  for(let i = 0; i <lower.length; i++){

    for(let j = 0; j < lower[i].length; j++) {
      if(j == 0){
        word += lower[i][j].toUpperCase();
      }else {
        word += lower[i][j];
      }
    }

    titleCase.push(word);
    word = '';

  }

  return titleCase.join(' ');
}

titleCase("I'm a little tea pot");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
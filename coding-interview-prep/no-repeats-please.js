// original code, trouble in swap
// failed in test 4,5,6 & 10
function permAlone(str) {

  let first = [...str];
  let perm = [];


  for(let j = 0; j < str.length; j++){

    if(first[j] == str[j]) {
      let el = str.split('');
      el.splice(j,1);
      let temp = [...el];

      perm.push(str[j] + el.join(''));

      for(let k = 0; k < el.length - 1; k++) {
        el[k] = el[k + 1];
        el[k + 1] = temp[k];
        temp = [...el];
        perm.push(str[j] + el.join(''));
      }

    }

  }


  let unique = [];
  let lastChar = null;
  for(let i= 0; i < perm.length; i++){
    for(let c = 0; c < perm[i].length; c++){
      lastChar = perm[i][c];
      if(lastChar == perm[i][c + 1]) {
        unique.push(perm[i]);
      }
    }
  }

  let noRepeats = 0;
  for(let u = 0; u < perm.length; u++) {
    if(!unique.includes(perm[u])) {
      noRepeats++;
    }
  }

  return noRepeats;
}

permAlone('abcdefa');



// code after googling
function permAlone(str) {

  let arr = [...str];
  let perm = [];
  let tmp;

  function swap(index1, index2) {
    tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }
  function generate(int) {
    if (int === 1) {
      perm.push(arr.join(""));
    } else {
      for (var i = 0; i != int; ++i) {
        generate(int - 1);
        swap(int % 2 ? 0 : i, int - 1);
      }
    }

  }
  generate(arr.length);

  let unique = [];
  let lastChar = null;
  for(let i= 0; i < perm.length; i++){
    for(let c = 0; c < perm[i].length; c++){
      lastChar = perm[i][c];
      if(lastChar == perm[i][c + 1]) {
        unique.push(perm[i]);
      }
    }
  }

  let noRepeats = 0;
  for(let u = 0; u < perm.length; u++) {
    if(!unique.includes(perm[u])) {
      noRepeats++;
    }
  }

  return noRepeats;
}

permAlone('abcdefa');
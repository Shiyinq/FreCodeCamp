
function symDif(...args) {
  let data = [...args];
  let sd = [];

  while(data.length !=0) {

    let temp = [];

    if(data.length == 1) {
      
      temp.push(...data[0]);

    }else {
       for(let i = 0; i < data[0].length; i++) {

          if(!data[1].includes(data[0][i])) {
            temp.push(data[0][i]);
          }

        }

        for(let j = 0; j < data[1].length; j++) {

          if(!data[0].includes(data[1][j])) {
            temp.push(data[1][j]);
          }

        }
    }

    sd.push(temp);
    data.splice(0,2);
    temp = [];

  }
  
  return sd;
}

function sym(...args) {
  
  let result = symDif(...args);
  let finalResult = null;

  if(result.length == 1) {
    finalResult = result[0];
  }else {
    finalResult = sym(...result);
  }

  return [...new Set(finalResult)].sort();

}

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
function getIndexToIns(arr, num) {
  let addAray = arr; addAray.push(num);
  let sort = arr.sort((a,b) => a - b);
  let indexNum = sort.indexOf(num);
  
  // console.log(indexNum);

  return indexNum;
}

getIndexToIns([10, 20, 30, 40, 50], 35);
getIndexToIns([10, 20, 30, 40, 50], 30)
getIndexToIns([40, 60], 50);
getIndexToIns([3, 10, 5], 3);
getIndexToIns([5, 3, 20, 3], 5);
getIndexToIns([2, 20, 10], 19);
getIndexToIns([2, 5, 10], 15);
getIndexToIns([], 1);
function chunkArrayInGroups(arr, size) {
  let arrLen = arr.length;
  let chunky = [];

  for(let i = 0; i <= Math.ceil(arrLen/size); i++) {
    if(arr.length > 0) chunky.push(arr.splice(0,size));
    
  }

  // console.log(chunky);

  return chunky;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);

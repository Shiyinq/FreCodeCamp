function diffArray(arr1, arr2) {
  var flatArr = arr1.concat(arr2);
  var newArr = [];

  flatArr.forEach(a => {
    if(!arr1.includes(a) || !arr2.includes(a)){
      newArr.push(a)
    }
  });
  
  return newArr;
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
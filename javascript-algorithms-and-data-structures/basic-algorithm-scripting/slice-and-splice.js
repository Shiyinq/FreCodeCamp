function frankenSplice(arr1, arr2, n) {
  let newArray = arr1.slice(0, arr1.length);
  let newArray2 = arr2.slice(0, arr2.length);

  newArray.splice(0,0, newArray2.splice(0,n));
  newArray.splice(newArray.length,0, newArray2.splice(0,n));
  
  return newArray.flat();
}

frankenSplice([1, 2, 3], [4, 5], 1);
frankenSplice([1, 2], ["a", "b"], 1);
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
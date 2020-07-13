function addTogether(a, b) {
  if(typeof a === 'number') {
    if(!b) {
      return function(b) {
        return typeof b === 'number' ? a + b : undefined;
      };
    }else {
      return typeof b === 'number' ? a + b : undefined;
    }
  }
  return;
}

console.log(addTogether(2,3));

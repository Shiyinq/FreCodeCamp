function bouncer(arr) {
  let notFalsy = [];
  
  for(let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if(Boolean(item)) notFalsy.push(item);
  }

  return notFalsy;
}

bouncer([7, "ate", "", false, 9]);
bouncer(["a", "b", "c"]);
bouncer([false, null, 0, NaN, undefined, ""]);
bouncer([null, NaN, 1, 2, undefined]);
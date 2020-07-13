function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  let sKeys = Object.keys(source);

  collection.forEach((item, i) => {
   let iKeys = Object.keys(item);

   let c = []

    iKeys.forEach(k => {
      if(sKeys.includes(k)){
        c.push(true);
      }
    })

    if(c.length == sKeys.length) {
      for(let sItem in source) {
        if(item.hasOwnProperty(sItem)) {
          if(item[sItem] == source[sItem]) {
            console.log(item[sItem]);
            if(!arr.includes(item)) {
              arr.push(item);
            }
          }else {
            console.log(item[sItem]);
            arr = [];
            break;
          }
        }
      }
    }
    c = [];
  });

  // Only change code above this line
  return arr;
}

// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}));

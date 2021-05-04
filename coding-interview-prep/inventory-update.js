function updateInventory(arr1, arr2) {

    // separate the current item from inventory
    let currentItem = [];

    for(let i = 0; i < arr1.length; i++){
        currentItem.push(arr1[i][1]);    
    }

    // update stock or add new item + stock
    for(let j = 0; j < arr2.length; j++){

        let thisItem = arr2[j][1];

        if(currentItem.includes(thisItem)) {
            
            let newStock = arr2[j][0];
            let indexItemExist = currentItem.indexOf(thisItem);

            arr1[indexItemExist][0] += newStock;

        }else {
            arr1.push(arr2[j]);
            currentItem.push(arr2[j][1]);
        }
    }

    // sort array by alphabetical
    let newArr1 = [];
    for(let k = 0; k < arr1.length; k++) {
        let exchange = arr1[k][1] +';'+ arr1[k][0];

        newArr1.push(exchange);
    }
    newArr1.sort();
    
    // change array has been sorted to original format
    for(let l = 0; l < newArr1.length; l++){
        let extract = newArr1[l].split(';');

        extract = [Number(extract[1]), extract[0]];
        newArr1[l] = extract;
    }

    return newArr1;
    
}

// example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

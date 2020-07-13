function denom() {
  return [
    { name: "ONE HUNDRED", val: 100.0 },
    { name: "TWENTY", val: 20.0 },
    { name: "TEN", val: 10.0 },
    { name: "FIVE", val: 5.0 },
    { name: "ONE", val: 1.0 },
    { name: "QUARTER", val: 0.25 },
    { name: "DIME", val: 0.1 },
    { name: "NICKEL", val: 0.05 },
    { name: "PENNY", val: 0.01 }
  ];
}

function howMuchMoney(moneys) {
  let money = {total: 0};
  for(let i = moneys.length - 1; i >= 0; i--){
    money.total += moneys[i][1];
    money[moneys[i][0]] = moneys[i][1];
  }
  return money;
}

function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let obj = {status: '', change: []};
  let money = howMuchMoney(cid);

  if(money.total === change) {
    obj.status = 'CLOSED';
    obj.change = cid;
    return obj;
  }else if(money.total < change) {
    obj.status = 'INSUFFICIENT_FUNDS';
    return obj;
  }

  let changeArr = [];

  for(let i = 0; i < denom().length; i++) {
    let val = 0;
    while(money[denom()[i].name] && change >= denom()[i].val) {
      change -= denom()[i].val;
      money[denom()[i].name] -= denom()[i].val;
      val += denom()[i].val;

      change = Math.round(change * 100) / 100;
    }

    if (val > 0) {
      changeArr.push([denom()[i].name, val]);
    }
  }

  if (changeArr.length < 1 || change > 0) {
    obj.status = "INSUFFICIENT_FUNDS";
    return obj;
  }

  obj.status = "OPEN";
  obj.change = changeArr;

  return obj;
}


console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

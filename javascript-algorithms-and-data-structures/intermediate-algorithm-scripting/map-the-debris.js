function orbitalPeriod(arr) {
  let GM = 398600.4418;
  let earthRadius = 6367.4447;
  let TAU = 2 * Math.PI;

  return arr.map(({name, avgAlt}) => {
    let res =  Math.round(TAU * Math.sqrt(Math.pow(avgAlt + earthRadius, 3)/GM));
    return {
      name,
      orbitalPeriod : res
    }
  });
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
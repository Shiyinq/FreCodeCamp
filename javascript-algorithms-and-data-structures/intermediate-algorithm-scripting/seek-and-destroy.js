function destroyer(...arr) {
  let listDestroy = arr.slice(1, arr.length);

  return arr[0].filter(n => !listDestroy.includes(n));

}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));
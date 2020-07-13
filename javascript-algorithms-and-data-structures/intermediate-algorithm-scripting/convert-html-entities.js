function convertHTML(str) {
  let arr = str.split('');
  let c = ['&', '<', '>', '"', '\''];
  let r = ['&amp;', '&lt;', '&gt;', '&quot;', '&apos;'];

  c.forEach((v, i) => {
    if(arr.includes(c[i])) {
      let regex = new RegExp(c[i], 'g');
      let match = str.match(regex);

      match.forEach(m => {
        let iArr = arr.indexOf(c[i]);
        arr.splice(iArr, 1, r[i]);
      });

    }
  });

  return arr.join('');
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));
console.log(convertHTML("abc"));
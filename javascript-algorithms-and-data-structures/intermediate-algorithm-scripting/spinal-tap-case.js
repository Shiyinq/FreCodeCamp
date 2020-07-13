function spinalCase(str) {
  str = str.replace(/([a-z](?=[A-Z]))/g, '$1 ');
  return str.toLowerCase().split(/\ |\_/).join('-');
}

console.log(spinalCase('AllThe-small Things'));

function pairElement(str) {
  let i = 0;
  let pair = [];
  let dna = str.split('');
  let search = {A: "T", T: "A", G: "C", C: "G"};

  while(i < dna.length) {
    pair.push([dna[i], search[dna[i]]])
    i++;
  }

  return pair;
}

console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));
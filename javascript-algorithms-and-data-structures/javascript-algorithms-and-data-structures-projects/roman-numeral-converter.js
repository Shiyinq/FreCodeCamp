function brk(num){
  let brk;
  let s = num.split('');
  if(num.length == 1) {
    return [s[0]];
  }else if(num.length == 2) {
    return [s[0] + '0', s[1]];
  }else if(num.length === 3) {
    return [s[0] + '00', s[1] + '0', s[2]];
  }else if(num.length === 4) {
    let thousand = [];
    for(let i = 0; i< Number(s[0]); i++) {
      thousand.push('1000');
    }
    return [...thousand , s[1] + '00', s[2] + '0', s[3] + ''];
  }
}

function convertToRoman(num) {
  num = num.toString();
  num = brk(num);
  
  let basic = {
      '1': 'I', 
      '2': 'II', 
      '3': 'III', 
      '4': 'IV', 
      '5': 'V', 
      '6': 'VI', 
      '7': 'VII', 
      '8': 'VIII', 
      '9': 'IX', 
      '10': 'X',
      '20': 'XX',
      '30': 'XXX',
      '40': 'XL',
      '50': 'L',
      '60': 'LX',
      '70': 'LXX',
      '80': 'LXXX',
      '90': 'XC',
      '100': 'C',
      '200': 'CC',
      '300': 'CCC',
      '400': 'CD',
      '500': 'D',
      '600': 'DC',
      '700': 'DCC',
      '800': 'DCCC',
      '900': 'CM',
      '1000': 'M'
  }

  let roman = '';

  for(let i = 0; i < num.length; i++) {
    if(basic[num[i]] != undefined) {
      roman += basic[num[i]];
    }
  }

 return roman;
}


console.log(convertToRoman(500));
console.log(convertToRoman(9999));

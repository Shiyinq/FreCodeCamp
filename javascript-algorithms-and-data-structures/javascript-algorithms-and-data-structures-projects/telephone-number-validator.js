function telephoneCheck(str) {
  let regex = /(^[\d]{10}$)|(^[0-9]{3}(\s|-)[0-9]{3}(\s|-)[0-9]{4})|(^[(\d)]{5}(\s|-*)[0-9]{3}(\s|-)[0-9]{4})|(^[1]{1}(\s|-*)[0-9]{3}(\s|-)[0-9]{3}(\s|-)[0-9]{4})|(^[1]{1}(\s|-*)[(\d)]{5}(\s|-*)[0-9]{3}(\s|-*)[0-9]{4})/g;
  let check = regex.test(str);
  
  return check;
}

console.log(telephoneCheck("555-555-5555"));

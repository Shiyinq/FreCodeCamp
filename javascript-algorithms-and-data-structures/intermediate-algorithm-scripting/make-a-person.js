var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(' ')[0];
  }

  this.getLastName = function() {
    return fullName.split(' ')[1];
  }

  this.getFullName = function() {
    return fullName;
  };


  this.setFirstName = function(setFirstName) {
    let name = fullName.split(' ');
    name.splice(0,1 , setFirstName);

    fullName = name.join(' ');
  }
  
  this.setLastName = function(setLastName) {
    let name = fullName.split(' ');
    name.splice(1,1 , setLastName);
    
    fullName = name.join(' ');
  }

  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast;
  }

};

var bob = new Person('Bob Ross');
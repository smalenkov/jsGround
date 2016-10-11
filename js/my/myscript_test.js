function sayHi(person) {
  
  var message = makeMessage(person);
  alert( message );

  // ----- вспомогательные функции -----

  function getHello(age) {
    return age >= 18 ? 'Здравствуйте' : 'Привет';
  }

  function makeMessage(person) {
    return getHello(person.age) + ', ' + person.name;
  }  
}

sayHi({
  name: 'Петька',
  age: 17
}); // привет, Петька

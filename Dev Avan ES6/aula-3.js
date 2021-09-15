//DIO- Desenvolvimento Avançado com JS ES6 
//Enhanced Object Literals

//como era:
var prop1 = 'Digital Innovation One';

var obj = {
 prop1: prop1
}
console.log(obj);
//como ficou:

var prop2 = 'Digital Innovation One';

var obj = {
 prop2
}
console.log(obj);

//com método
function method() {
 console.log('method called');
}
var obj = {
 method
};
obj.method();

//outra forma de fazer o mesmo acima

var obj1 = {
 sum: function sum (a, b) {
  return a + b;
 }
};
console.log(obj1.sum(1 , 5));

// é possivel omitir a palavra function e encurtar tambem com o ES6 (short hand)

var obj3 = {
 sum(a, b) {
  return a + b;
 }
}
console.log(obj3.sum(5, 7));

//como era:

var propName = 'test';
var obj = {}; // precisa declarar o obj antes p/ funcionar
obj[propName] = 'prop value';
console.log(obj); //return { test: 'prop value' }

//como ficou:
var propName = 'teste';

var obj = {
 [propName + ' _concatenado']: 'prop value'
};
console.log(obj); 
// return: { 'teste _concatenado': 'prop value' }


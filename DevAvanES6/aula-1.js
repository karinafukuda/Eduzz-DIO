//DIO- Desenvolvimento Avançado com JS ES6 
//Aprenda o que é e como trabalhar com Arrow Functions

//Como era a estrutura de uma função convencional
function log(value){
 console.log(value);
}
log('test');

//Como era a estrutura de uma função anônima
var log1 = function(value) {
 console.log(value);
}
log1('teste1');

var sum = function ( a , b) {
  return a + b;
}
console.log(sum(5 , 6 ));

//Arrow Functions ES6
// => obrigatoriamente tem a 'flecha' e são funções anônimas
// function com retorno direto, não precisa das chaves
var sumES6 = (a , b) => a + b;
console.log(sumES6(1, 9));

// se sua function tiver statement , que é definir alguma variável ou condicional, então precisa das chaves
//É possível retornar objetos literais

var createObj = () => ({ test: 123});
console.log(createObj());

//função construtora antes do ES6
function Car () {
  this.foo = `bar`;
}
console.log(new Car());
//function não pode ser invocada antes sem se preocupar com a ordem- no ES6

var obj = {
  showContext : function showContext () {
    console.log(this);
  },
  log: function log(value) {
    console.log(value);
  }
};
obj.showContext();
//retorna: { test: 123 }

//função construtora
function Car() {
  this.foo = 'bar'
}
console.log(new Car());
//retorna :  Car { foo: 'bar' }


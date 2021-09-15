//DIO- Desenvolvimento Avançado com JS ES6 
//Conheça Rest e Spread Operator ...
//Rest Operator pega todos os parâmetros e transforma em array 
//Spread Operator pega os itens e tranforma em parâmentros, porém funciona além só de listas, com:
// string, arrays, literals objects e objetos iteraveis

//como era:
function sum(a, b){
 var value = 0;

 for(var i = 0; i < arguments.length; i++){
  value += arguments[i];
 }
 return value;
} // Retorno 20
console.log(sum(5, 5, 5, 2, 3));

//como ficou rest operator ...

function sum1(...args) {
  return args.reduce(( acc, value) => acc + value, 0)
} // Retorno 20
console.log(sum1(5, 5, 5, 2, 3));

// com arrow functions é inexistente os arguments  pois precisa definir argumentos. Usar rest operator.


const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const sum3 = ( ...rest) => {
  return multiply.apply(undefined, rest);// fica verboso
}; //retorno 750

//acima com spred operator ...

const sum4 = (...rest) => {
  return multiply(...rest);
}; //retorno 750

console.log(sum4(5, 5, 5, 2, 3));

//spread operator - quebra os item e repassa para outro lugar

//string

const str = 'Digital Innovation One';
function logArgs( ...args) {
  console.log(args);
};
logArgs(...str);
//Retorno =[ 'D','i','g','i','t','a','l' ... quebrou os itens e criou uma lista]

//array
const arr = [1, 2, 3, 4];
const arr2 = [ 5, 6, 7];
logArgs(...arr, ...arr2); 

//objeto literal, somente para criar um novo obj

const obj = {
  test: 123
};

const obj2 = {
  ...obj,
  test2: 'hello'
};

console.log(obj2);

//node aula-4.js


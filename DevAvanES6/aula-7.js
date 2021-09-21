//Generators
//São funções com pausa e despausa

function* hello () {
 console.log('Hello');
 yield 1; // 1 = value
 console.log('From');
 const value = yield 2;
 console.log(value);
}

const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next('Outside"')); //incluiu valor de fora para dentro da função

//node aula-7.js
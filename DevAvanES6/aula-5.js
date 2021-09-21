//node aula-5.js   Destrcturing Assignment
//Como usar Destructuring em ReactJS

//Como era
var arr =['Apple', 'Banana', "Orange", ['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

//Com Destructuring

var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']];

console.log(tomato2);

//com Obj

var obj = {
 name: 'Karina'
};
var { name : name2 } = obj; // O obj anterior não altera 

console.log(name2);


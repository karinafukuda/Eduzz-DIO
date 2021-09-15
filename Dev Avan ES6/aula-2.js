//DIO- Desenvolvimento Avançado com JS ES6 
//Default Function Arguments

//como era:
function multiply ( a, b) {
 b = typeof b === 'undefiined' ? 1 : b; //verificação
 return a * b;
}
console.log(multiply(5, 0));

//como ficou:
function multiplicar ( a , b = 1 ) {
 return a * b;
}
console.log(multiplicar( 5 , 0 ));

//lazy evaluation
function randomNumber(){
 return Math.random()*10;
}

function multiplicar1 ( a , b = randomNumber() ) {
 return a * b;
}
console.log(multiplicar1( 5 ));


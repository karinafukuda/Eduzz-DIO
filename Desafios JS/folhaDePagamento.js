let numero = parseInt(gets(25));
let horasTrabalhadas = parseInt(gets(100));
let valorHora = parseFloat(gets(5.50));
let salario = parseFloat(horasTrabalhadas * valorHora).toFixed(2); 

console.log("NUMBER = " + " " + numero);
console.log("SALARY = U$ " + " " + salario);
let total = 0;
let i = 0;
let valor;

while (i<6){
  valor = parseFloat(gets());

 if (valor > 0) {
   total = total + 1;
 }
   i = i + 1;
}

console.log(total + " valores positivos");
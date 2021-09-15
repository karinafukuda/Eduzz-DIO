let bill = parseInt(gets());
var vLeft = bill,
    v100 = 0,
    v50 = 0,
    v20 = 0,
    v10 = 0,
    v5 = 0,
    v2 = 0,
    v1 = 0;
    
while (vLeft !== 0) {
    if (bill / 100 >= 1) { 
      v100 = parseInt(vLeft/100); vLeft = vLeft - v100 * 100;}
    if (vLeft / 50 >= 1) { 
      v50 = parseInt(vLeft/50); vLeft = vLeft - v50 * 50;}
    if (vLeft / 20 >= 1) { 
      v20 = parseInt(vLeft/20); vLeft = vLeft - v20 * 20;}
    if (vLeft / 10 >= 1) { 
      v10 = parseInt(vLeft/10); vLeft = vLeft - v10 * 10;}
    if (vLeft / 5 >= 1) { 
      v5 = parseInt(vLeft/5); vLeft = vLeft - v5 * 5;}
    if (vLeft / 2 >= 1) { 
      v2 = parseInt(vLeft/2); vLeft = vLeft - v2 * 2;}
    if (vLeft / 1 >= 1) { 
      v1 = parseInt(vLeft/1); vLeft = vLeft - v1 * 1;}
}

console.log(bill)
console.log(`${v100} nota(s) de R$ 100,00`)
console.log(`${v50} nota(s) de R$ 50,00`)
console.log(`${v20} nota(s) de R$ 20,00`)
console.log(`${v10} nota(s) de R$ 10,00`)
console.log(`${v5} nota(s) de R$ 5,00`)
console.log(`${v2} nota(s) de R$ 2,00`)
console.log(`${v1} nota(s) de R$ 1,00`)
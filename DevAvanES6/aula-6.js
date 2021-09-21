//Symbols e Iterators
//Metadados - em classes privadas , por ex

const uniqueId = Symbol ['Hello'];

Symbol.iterator;
Symbol.split;
Symbol.toStringTag;

// const arr = [ 1, 2, 3, 4];

// const it = arr[Symbol.iterator]();

// while (true){
//  let { value , done } = it.next();
//  console.log(value);
//  if(done){
//   break;
//  }
// }

// O mesmo acima com ES6
const arr1 = [ 11, 22, 33, 44];

for (let value of arr1){
 console.log(value);
}

//função iteradora no obj

const obj = {
 values: [5, 6, 7, 8],
 [Symbol.iterator]() {
  let i = 0;

  return {
   next: () => {
    i++;

    return {
     value: this.values[ i - 1],
     done: i > this.values.length
    };
   }
  };
 }
};

const it = obj[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

//node aula-6.js
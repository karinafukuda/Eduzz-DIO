console.log('frase teste');
//tipagem 
function soma(a: number , b: number){
 return a + b;
}
console.log(soma(1 , 5));

//types : para fazer junções , merges das interfaces 
// interfaces: para definir contratos de estrutura de dados e classe 

interface IAnimal {
 nome: string;
 tipo: 'terrestre' | 'aquatico';
 domestico: boolean;
 executarRugido: (alturaEmDecibeis: number)=> void;
}

interface IFelino extends IAnimal {
 visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
 porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino;

 const animal: IDomestico ={
  domestico: true,
  nome: 'cachorro',
  porte: 'medio',
  tipo: 'terrestre',
  executarRugido: (alturaEmDecibeis: number) => (`${alturaEmDecibeis}dB`)
 }
 // console.log(animal);

 const input = document.getElementById('input') as HTMLInputElement;
 input.addEventListener('input', (event) => {
  const i = event.currentTarget as HTMLInputElement;
  console.log(i.value);
 });

 //Generic Types
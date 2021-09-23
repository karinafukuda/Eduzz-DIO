import $ from 'jquery';

$.fn.extend({
 novaFuncao() {
  console.log('chamou a funcao');
 }
});

$('body').novaFuncao();

//Omit

interface IPessoa {
 nome: string;
 idade: number;
 nacionalidade: string;
}

interface Brasileiro extends Omit<IPessoa, 'nacionalidade'>{

}

const brasileiro: Brasileiro = {
 nome: 'Karina',
 idade: 32
} 

console.log(brasileiro);



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

 //Generic Types <T> 

function adicionaApendiceALista <T>( array: any[], value: T){
 return array.map( item => item + value);
}

adicionaApendiceALista([1, 2, 3], 4);

//Condicionais com parâmetros

interface IUsuario {
 id: string;
 email: string;
}

interface IAdmin extends IUsuario {
 cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario | IAdmin){
 if ('cargo' in usuario){
  return console.log('Admin');
 }else{
  return console.log('User');
 }
}

// Caractere ? (Opcional)

interface IUser {
 id: string;
 email: string;
 cargo ?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
}

function redirecionar(usuario: IUser){
 if (usuario.cargo){
  //redirecionar(usuario.cargo)
 }else{
  //não redirecionar
 }
}

//Readonly e Private

interface IAnimalDomestico {
 nome: string;
 idade: number;
 parqueFavorito ?: string;
}

type PetSomenteLeitura = {
 readonly [ K in keyof IAnimalDomestico]: IAnimalDomestico[K];
 // +readonly [ K in keyof IAnimalDomestico]-?: IAnimalDomestico[K]; removendo a opção adicional
}

// class MeuPet implements IAnimalDomestico {
//  idade;
//  nome;

//  constructor(nome, idade)
//  {
//   this.nome = nome;
//   this.idade = idade;
//  }
// }
// const meuPet = new MeuPet ( 'Canelinha', 3);



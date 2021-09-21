let order = [];
let clickedOrder = [];
let score = 0;
// 0 = verde | 1 = vermelho | 2 = amarelo | 3 = azul

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

//cria ordem aleatória 
let shuffleOrder = () => {
 let colorOrder = Math.floor(Math.random() * 4);
 order[order.length] = colorOrder;
 clickedOrder= [];

 for ( let i in order){
  let elementColor = createColorElement(order[i]);
  lightColor(elementColor, Number(i) + 1);
 }
}

//acende a próxima cor
let lightColor = (element, number) => {
 number = number * 500;
 setTimeout(() =>{
  element.classList.add('selected');
 }, number - 250);
 setTimeout(() =>{
  element.classList.remove('selected');
 })
}

//checa se os botões clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
 for ( let i in clickedOrder ){
  if (clickedOrder[i] != order[i]){
   gameOver();
   break;
  }
 }
 if (clickedOrder.length == order.length){
  alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo nível`);
  nextLevel();
 
 }
}

//clique do usuário

let click = (color) => {
 clickedOrder[clickedOrder.length]= color;
 createColorElement(color).classList.add('selected');

 setTimeout(() => {
  createColorElement(color).classList.remove('selected');
  checkOrder();
 }, 250)
}

//função que retorna a cor

let createColorElement = (color) => {
 if (color == 0){
  return green;
 }else if ( color == 1){
  return red;
 }else if ( color == 2){
  return yellow;
 }else if( color == 3){
  return blue;
 }
}

// próximo nível

let nextLevel = () => {
 score++;
 shuffleOrder();
}

//perder o jogo 

let gameOver = () => {
 alert(`Pontuação: ${score}! \n Você perdeu o jogo!\n Clique em OK para iniciar um novo jogo`);
 order =[];
 clickedOrder = [];

 playGame();
}

//início do jogo
let playGame = () => {
 alert('BEM-VINDE ao Genesis! Iniciando novo jogo ... ')
 score = 0;

 nextLevel();
}

green.addEventListener('click', click(0));
red.addEventListener('click', click(1));
yellow.addEventListener('click', click(2));
blue.addEventListener('click', click(3));

//eventos de click das cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//início do jogo
playGame();
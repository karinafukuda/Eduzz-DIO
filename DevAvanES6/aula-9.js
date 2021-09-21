//Fetch 

// fetch('http://localhost:5050/data.json')
//  .then(responseStream => {
//   if (responseStream.status === 200){
//    return responseStream.json();
//   } else {
//    throw new Error ('Request error');
//   }
//  })
//  .then(data => {
//   console.log(data);
//  })
//  .catch(err => {
//   console.log('Erro: ', err);
//  });

 // A partir do ES7 - Async Await
// É possivel construir promises de uma maneira bem simples
const simpleFunc = async () => {
 throw new Error ('OPS!');
 return 12345;
};
simpleFunc().then(data => {
 console.log(data);
})
 .catch( err => {
  console.log(err);
 });
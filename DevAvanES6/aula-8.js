//Promises e Fetch

//como era - callbacks

function doSomething(callback){
 setTimeout(function(){
 //faz algo
 callback('First Data');
 }, 1000);
}

function doOtherSomething(callback){
 setTimeout(function(){
 //faz algo
 callback('Second Data');
 }, 1000);
}

//tratar erros e invocar as 2 functions

function doAll(){
 try{
  doSomething(function(data) {
   var processedData = data.split('');
   try{
     doOtherThing(function(data2) {
      var processedData2 = data2.split('');
      try{
       setTimeout(function(){
        console.log(processedData, processedData2);
       }, 1000)
      }catch (err){
       //handle error
      }
     });
   }catch(err){
    //handle error
   }
  });
 }catch(err){
  //handle error
 }
}
doAll();

//como ficou com promises ES6

//3 estados : Pending (executando) / Fulfilled / Rejected
const doSomethingPromise = new Promise((resolve, reject) =>{

 setTimeout(function(){
  //faz algo
  resolve('First Data');
  }, 1000);
 });

 const doOtherThingPromise = new Promise((resolve, reject) =>{
  setTimeout(function(){
   //faz algo
   resolve('Second Data');
   }, 1000);
  });

  doSomethingPromise
  .then(data => doOtherThingPromise)
  .then(data2 => console.log(data2))
  .catch();


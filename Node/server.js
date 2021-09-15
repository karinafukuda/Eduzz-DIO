const http = require("http");
const host = "http://localhost";
const port = 3000;
const stats = require("./pcRamUsage");

http.createServer((require, response) => {
 let url = require.url;

 if (url === "/stats"){
  response.end(JSON.stringify(stats, null , 2));
 }else{
  response.end("<h1> Seja bem-vinda! </h1>");
 }
}).listen(port, () => console.log(`Server is running in ${host}: ${port}`));
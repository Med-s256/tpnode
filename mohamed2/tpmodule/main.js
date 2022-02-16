const bj= require('./bonjour');
const url = require('url');
const http = require('http');
const b = bj.bonjour;
const resultat = bj.resultat;
http.createServer((req,res)=>{
const q = url.parse(req.url, true).query;
const nom = q.nom;
const num1 = q.num1;
const num2 = q.num2;
const num3 = q.num3;
// console.log(b(nom));
//console.log(resultat(num1,num2,num3));
res.end(b(nom) +" "+ resultat(Number(num1), Number(num2), Number(num3)));
//res.send(nom);
}).listen(8080);
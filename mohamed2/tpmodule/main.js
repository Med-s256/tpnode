const bj= require('./bonjour');
const url = require('url');
const http = require('http');
// const b = bj.bonjour;
// const resultat = bj.resultat;
http.createServer((req,res)=>{
const q = url.parse(req.url, true).query;
const nom = q.nom;
console.log(bj.bonjour(nom));
console.log(bj.resultat(20));
res.end(bj.bonjour(nom));
//res.send(nom);
}).listen(8080);
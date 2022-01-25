const os = require('os');
x = 0;
const fcal=function calMem(x) {
const n = os.totalmem();


  console.log('la memoire', n);


const free_kb = os.freemem()/1024;
const free_mb = free_kb/1024;
const free_gb = free_mb/1024;


if (free_gb < x ) {
    console.log(" memoire insuff ")
}
}

module.exports.cal= fcal;
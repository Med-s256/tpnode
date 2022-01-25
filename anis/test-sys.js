const os = require('os');
const c=require('./PS-cercle.js');
const p=require('./PS-cercle.js');
const k=require('./PS-triangle.js');
const k1=require('./PS-triangle');
const R=require('./PS-rectangle');
const R1=require('./PS-rectangle');
const n = os.totalmem();
const fmem = os.freemem();
const fmem_MO = fmem/1024;
const fmem_GO = (fmem_MO/1024)/1024;
console.log('total memory', n);
console.log('free memory', fmem_GO);
if (fmem_GO < 2) {
   console.log('erreur de mémoire insuffisante'); 
}

c.Pcercle(5);
p.Scercle(2);
k.Pcarre(6,2);
k1.Scarre(6,3);
R.Prectangle(1,2,3);
R1.Srectangle(2,3);
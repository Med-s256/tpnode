const os = require('os');
const n = os.totalmem();
const fmem = os.freemem();
const fmem_MO = fmem/1024;
const fmem_GO = (fmem_MO/1024)/1024;
console.log('total memory', n);
console.log('free memory', fmem_GO);
if (fmem_GO < 0.2) {
   console.log('erreur de mémoire insuffisante'); 
}

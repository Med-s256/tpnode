const os = require('os');
const n = os.totalmem();

var num = 0;
 const testFM =  function test_free_memory(num) {
    console.log('entrer memoire minimale'); 
    const fmem = os.freemem();
    fmem_GO = ((fmem/1024)/1024)/1024;
    if(fmem_GO<num){
        console.log('erreur de memoire');
        
    }
    else{
        console.log('pas de probleme memoire');
    }
}
module.exports.cal=  testFM ;

const prompt = require('prompt-sync');
const rec = require('./formes.js');

// prompt.start();
const k = Number(prompt("entrer votre choix" ));
if(k==1){
    const calcule_tr = rec.tr(4,5,4,6);
}
else{
const calcul_sq = rec.cal(4);
const calcul_rec = rec.cal_rec(3,9);
const calcule_cer = rec.cer(4);
}
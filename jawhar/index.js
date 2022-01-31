const mem = require('./memoire.js');
const b = require ('./bienvenu.js');
const c = require('./carre.js')
const re = require('./rectangle.js')
const cer = require ('./cercle.js')
const tr = require ('./triangle.js')


 const cal = mem.cal(4);
 const nom =b.nom;
const bien = b.testML('nom');
const bien1 = b.testML1(nom);

// carre perimetre et surface 
const ca = c.car(2);
const ca2 = c.carSu(5);

// rectangle perimetre et surface
const rP = re.rec(5,6);
const rS = re.reS(5,7)

// cercle perimetre et surface 
 const cP = cer.CerP(5);
 const cS = cer.ceS(3);

 // triangle perimetre et surface
const tP = tr.tr(2,5,4);
const ts = tr.tS(5,9);
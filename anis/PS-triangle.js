//Périmetre de carre
const k= function perimetre_carre (long,larg)

{
  
  cal=(long+larg)*2;
  console.log("Périmetre de carre", cal);
}

module.exports.Pcarre=k;

// surface de carre
const k1=function surface_carre (long,larg)
{
  cal=long*larg;
  console.log("surface de carre",cal);
}
module.exports.Scarre=k1;
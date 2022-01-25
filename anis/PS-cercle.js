//Périmetre de cercle
const P= function perimetre_cercle (rayon)

{
  
  cal=Math.PI*rayon;
  console.log("Périmetre de cercle", cal);
}
module.exports.Pcercle=P;

// surface
const S=function surface_cercle (rayon)
{
  cal1=rayon*rayon*Math.PI;
  console.log("surface de cercle",cal1);
}
module.exports.Scercle=S;







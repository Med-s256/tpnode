//Périmetre de rectangle
const R= function perimetre_rectangle (a1,a2,a3)

{
  
  cal=a1+a2+a3;
  console.log("Périmetre de rectangle", cal);
}

module.exports.Prectangle=R;

// surface de rectangle
const R1=function surface_rectangle (a1,h)
{
  cal=(a1*h)/2;
  console.log("surface de rectangle",cal);
}
module.exports.Srectangle=R1;
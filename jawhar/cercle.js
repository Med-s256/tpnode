const CerF = function perimetre (r) {
     P = 0 ;
    const pi = 3.14 ;
    P = r * pi * 2;
    console.log("perimetre cercle ",P)
}

const cerS =function surface (r) {
     S =0; 
    const pi = 3.14;
    S = r * r * pi;
    console.log("surface cercle ",S)
}

module.exports.CerP = CerF;
module.exports.ceS = cerS;
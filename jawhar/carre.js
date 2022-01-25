const carP = function perimetre (l) {
     P = 0;
    P = l * 4 ;
    console.log("perimetre carre  ",P)
}
const carS = function surface (l) {
     S =0;
    S = l *l ;
    console.log("surface carre ",S)
}

module.exports.car = carP;
module.exports.carSu = carS;
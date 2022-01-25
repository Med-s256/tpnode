const recF = function perimetre (long,larg) {
     P = 0 ;
    P = 2 * (larg + long)
    console.log("perimetre du rectangle : ", P)
}
const recS = function surface (long, larg) {
     s =0;
    s = long * larg ;
    console.log("surface du rectangle: ",S)
}

module.exports.rec = recF;
module.exports.reS = recS;
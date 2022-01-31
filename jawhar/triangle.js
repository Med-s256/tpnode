const trF = function perimetre (l1,l2,l3) {
     p = 0;
    P = l1 + l2 + l3;
    console.log("perimetre triangle ",P)
}
const trS = function surface (b,h) {
     S =0;
    S = (b * h)/2;
    console.log("surface du triangle: ", S)
}

module.exports.tr= trF;
module.exports.tS = trS;
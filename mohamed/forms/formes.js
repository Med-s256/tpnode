
const sur_per_sq = function calcul_square(val) {
    const sur = val * val;
    const per= val * 4;
    console.log("la surface d'un carré  est ", sur);
    console.log("le perimetre d'un carré est ", per);
}
module.exports.cal = sur_per_sq;

const sur_per_rec = function calcule_rectangle(lar, long){
    const sur= (lar * long) ;
    const per= (lar + long) *2 ;
    console.log("la surface d'un rectangle  est ", sur);
    console.log("le perimetre d'un rectangle est ", per);
}
module.exports.cal_rec = sur_per_rec;


const sur_per_cercle = function cal_cer(ray){
    const per = 2 * 3.14 * ray;
    const sur=  3.14 * ray * ray;
    console.log("la surface d'une cercle  est ", sur);
    console.log("le perimetre d'une cercle est ", per);
}
module.exports.cer = sur_per_cercle;

const triangle = function cal_tr(baseL, haut, l , m){
    const per = baseL + l + m ;
    const sur = baseL * haut /2 ;
    console.log("la surface d'un triangle  est ", sur);
    console.log("le perimetre d'un triangle est ", per);
}
module.exports.tr = triangle;
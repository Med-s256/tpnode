
const c= function carre(long,larg){
    const pr_c=(long+larg)*2;
    const sr_c=long*larg;
    console.log("******CARRE*********");
    console.log("perimetre est:", pr_c);
    console.log("surface est:", sr_c);
}
const t= function triangle(c1,c2,c3,h){
    const pr_t=c1+c2+c3;
    const sr_t=(c1*h)/2;
    console.log("******TRIANGLE*********");
    console.log("perimetre est:", pr_t);
    console.log("surface est:", sr_t);
}
const cr= function cercle(r){
    const pr_cr=r*2*3.14;
    const sr_cr=r*r*3.14;
    console.log("******CERCLE*********");
    console.log("perimetre est:", pr_cr);
    console.log("surface est:", sr_cr);
}
module.exports.p_s_c=c;
module.exports.p_s_t=t;
module.exports.p_s_cr=cr;
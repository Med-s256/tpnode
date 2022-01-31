const nom ='jawhar' ;
const hello =  function hi (nom) {
    console.log("bienvenu ", nom);
}
const hello1 =  function hi (nom) {
    console.log("bienvenu Mlle ", nom);
}

module.exports.testML = hello;
module.exports.testML1 = hello1;
module.exports.nom = nom;

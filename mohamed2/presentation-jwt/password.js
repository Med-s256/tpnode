//Hacher et vérifier les mots de passe avec Bcrypt
//Installation de bibliotheque  bcryptjs
//npm install bcryptjs
const bcrypt = require('bcrypt');
//choisir le salt
const saltRounds = 12
//Ceci hache le mot de passe 'Pa$$w0rd'en utilisant bcrypt et stocke le résultat dans la passwordHash variable.
const mypass = '123';
const passwordHash = bcrypt.hashSync(mypass, saltRounds);
console.log('this is the hash possword' + passwordHash);
        //store passwordHash in password database
//verifier un mot de passe hashé
const verified = bcrypt.compareSync(mypass, passwordHash);
        //return true or false
//autre methode de hashage
const salt = bcrypt.genSaltSync(saltRounds);
const passwordHash1 = bcrypt.hashSync(mypass, salt);
console.log('this is the salt ' + salt);
console.log(passwordHash1);
        // Store hash in your password DB.
   

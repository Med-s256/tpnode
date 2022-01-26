const express = require('express');
const fs = require('fs');
const app = express();

// This should be on the env file
port = 3000;

// MIDDLEWARE
app.use(express.json());

//Getting all data
const getUserData = () => {
  const jsonData = fs.readFileSync('data.json');
  return JSON.parse(jsonData);
};

// Save data to the json file
const saveUserData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync('data.json', stringifyData);
};

const shortTodayDate = () => {
  var today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  return (today = mm + '/' + dd + '/' + yyyy);
};
const getHour = () => {
  const today = new Date();
  const time = today.getHours() + ":" + today.getMinutes() + " PM";
  return time
};

app.get('/', (req, res) => {
  res.send(getUserData());
});

app.post('/', (req, res) => {
  const existUsers = getUserData()
  const userObject = {
    username : 'Foulen',
    date : shortTodayDate(),
    heure : getHour(),
  }
  existUsers.push(userObject)
  saveUserData(existUsers)

  res.send({success: true, msg: 'User data added successfully'})

});



app.listen(port, () => {
  console.log(`Your server is alive on : http://localhost.${port}`);
});

// TODO : TP EXPORTATION DE MODULE

// const prompt = require('prompt-sync')({ sigint: true });
// const {
//   perimetreCercle,
//   perimetreTriangle,
//   perimtreRectangle,
//   surfaceCercle,
//   surfaceTriangle,
//   surfRectangle,
// } = require('./calculator');

// console.log('<--PERIMETRE-->');
// console.log('[1] - Cercle');
// console.log('[2] - Triangle');
// console.log('[3] - Rectangle');

// console.log('<---SURFACE--->');
// console.log('[4] - Cercle');
// console.log('[5] - Triangle');
// console.log('[6] - Rectancle');
// console.log('[0] - Exit le programme');

// const num = prompt('Entrer Votre choix : ');
// const choix = Number(num);
// switch (choix) {
//   case 1:
//     const diametre = prompt('Entrez le diametre du cercle : ');
//     perimetreCercle(Number(diametre));
//   case 2:
//     const coteA = prompt('Entrez la cote A du votre triangle : ');
//     const coteB = prompt('Entrez la cote B du votre triangle : ');
//     const coteC = prompt('Entrez la cote C du votre triangle : ');
//     perimetreTriangle(Number(coteA), Number(coteB), Number(coteC));
//   case 3:
//     const largeur1 = prompt('Entrez le 1er largeur de votre rectangle : ');
//     const longueurA = prompt('Entrez le 1er longueur de votre rectangle : ');
//     const largeur2 = prompt('Entrez le 2eme largeur de votre rectangle : ');
//     const longueurB = prompt('Entrez le 2eme longueur de votre rectangle : ');
//     perimtreRectangle(
//       Number(largeur1),
//       Number(longueurA),
//       Number(largeur2),
//       Number(longueurB)
//     );
//   case 4:
//     const rayon = prompt('Entrez le rayon de votre cercle : ');
//     surfaceCercle(Number(rayon));
//   case 5:
//     const hauteurBase = prompt("Entrez l'hauteur de cote de base : ");
//     const base = prompt('Entrez cote base de votre triangle : ');
//     surfaceTriangle(Number(hauteurBase), Number(base));
//   case 6:
//     const hauteur = prompt("Entrez l'hauteur de votre rectangle : ");
//     const largeur = prompt('Entrez le largeur de votre rectangle : ');
//     surfRectangle(Number(hauteur), Number(largeur));

//     break;

//   default:
//     break;
// }

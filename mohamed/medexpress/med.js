const express = require('express');
const fs = require('fs');
//import ('../../tpexpress');
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    const data = fs.readFileSync("data.json");
    const list = JSON.parse(data);
    res.send(list);
})
app.post('/:nom', (req, res) => {
    var dateF = new Date();
    var auj = dateF.getDate() + '/' + (dateF.getMonth() + 1) + '/' + dateF.getFullYear();
    //console.log(auj);
    //const username = "med skib" ;
    //const date = auj;
    var h = dateF.getHours() + ':' + dateF.getMinutes();
    const data = fs.readFileSync("data.json");
    const list = JSON.parse(data);
    list.push({ username: req.params.nom, date: auj, heure: h });
    saveUserData(list);
    res.send(list);

})
const saveUserData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync('data.json', stringifyData)
}
// var dateF = new Date();

// var auj= dateF.getDate() + '/' + (dateF.getMonth()+1) +'/' + dateF.getFullYear();
// var heure = dateF.getHours() + ':' + dateF.getMinutes() ;
// console.log(heure);
//     console.log(auj);
app.listen(3000, () => {
    console.log('Server runs on port 3000')
})

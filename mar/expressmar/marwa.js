const express = require('express')

const fs = require('fs')
const app = express()
//this line is required to parse the request body
app.use(express.json())
/* Create - POST method */

//ajouter nom date et l'heure
/*
app.post('/add', (req, res) => {
    //get the existing user data
    const jsonData = fs.readFileSync('data.json')
    const users = JSON.parse(jsonData)
    users.push (req.body)
    //save the new user data
    saveUserData(users)

    res.send({ success: true, msg: 'User data added successfully' })
})
*/
/* lorsque on ajoute le nom le sys ajoute l heure  et le date automatiquement */

app.post('/add/:nom', (req, res) => {
    //get the existing user data
    const d = new Date();
   
    const jsonData = fs.readFileSync('data.json')
    const users = JSON.parse(jsonData)
    
    const DateJ = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    const hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    let usert = { username: req.params.nom, date: DateJ, heure: hours };
    
    users.push(usert)
   
    //save the new user data
    saveUserData(users)

    res.send({ success: true, msg: 'User data added successfully' })
})

/* Read - GET method */
app.get('/', (req, res) => {
    const jsonData = fs.readFileSync('data.json')
    users = JSON.parse(jsonData)
    res.send(users)
   
})

const saveUserData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync('data.json', stringifyData)
}



/* util functions ends */
//configure the server port
app.listen(4001, () => {
    console.log('Server runs on port 4001')
})
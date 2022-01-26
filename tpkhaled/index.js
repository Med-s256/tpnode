const express = require('express')

const fs = require('fs')
const app = express()

app.use(express.json())
/* Create - POST method */

app.post('/name/add', (req, res) => {
    //get the existing user data
    const existUsers = getUserData()

    //get the new user data from post request
    const userData = req.body

    //append the user data
    existUsers.push(userData)
    //save the new user data
    saveUserData(existUsers);
    res.send({ success: true, msg: 'User data added successfully' })
})

/* util functions */
//read the user data from json file
const saveUserData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync('data.json', stringifyData)
}

const getUserData = () => {
    const jsonData = fs.readFileSync('data.json')
    return users = JSON.parse(jsonData)
 }
/* util functions ends */
//configure the server port
app.listen(3000, () => {
    console.log('Server runs on port 3000')
})
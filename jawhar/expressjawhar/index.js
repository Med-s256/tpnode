const express = require('express')

const fs = require('fs')
const app = express()
//this line is required to parse the request body
app.use(express.json())
/* Create - POST method */

app.post('/user/add', (req, res) => {
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
/* Read - GET method */
app.get('/user/list', (req, res) => {
    const jsonData = fs.readFileSync('users.json')
    const users = JSON.parse(jsonData)
    res.send(users)
})
// Get a single user by name getUserbyName
// const xt = true;
// const yt = 1;
// console.log(xt===yt);

app.get('/user/:name', (req, res) => {
    const userParams = req.params.name;
    const jsonData = fs.readFileSync('users.json')
    const users = JSON.parse(jsonData)
    const userDetails = users.filter(user=>user.username === userParams )
    res.send(userDetails)
})


/* Update - Patch method */
app.patch('/user/update/:username', (req, res) => {
    //get the username from url
    const username = req.params.username
    //get the update data
    const userData = req.body
    //get the existing user data
    const existUsers = getUserData()
    //filter the userdata
    // 
    const updateUser = existUsers.filter(user => user.username !== username)

    //push the updated data
    updateUser.push(userData)
    //finally save it
    saveUserData(updateUser)
    res.send({ success: true, msg: 'User data updated successfully' })
})
/* Delete - Delete method */
app.delete('/user/delete/:name', (req, res) => {
    const username = req.params.name
    //get the existing userdata
    const existUsers = getUserData()
    //filter the userdata to remove it
    const filterUser = existUsers.filter(user => user.username !== username)
    //save the filtered data
    saveUserData(filterUser)
    res.send({ success: true, msg: 'User removed successfully' })

})
/* util functions */
//read the user data from json file
const saveUserData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync('users.json', stringifyData)
}
//get the user data from json file
const x = 0;
// const getUserData = () => {
// }
/* util functions ends */
//configure the server port
app.listen(3000, () => {
    console.log('Server runs on port 3000')
})
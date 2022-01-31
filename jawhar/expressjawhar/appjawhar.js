const { time } = require('console');
const express = require('express');
const fs = require ('fs')
const app = express();
 app.use (express.json())

app.post ('/data/ajout', (req,res)=>{
 const today = new Date();
   // const user = req.body;
let userD = {
    "username":"jawhar",
"date":today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
"heure":today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
}
    const existusers = fs.readFileSync('data.json');
    const users = JSON.parse(existusers);

  users.push(userD);

saveUserData(users);
 //   const userData = JSON.stringify(users);
 //   fs.writeFileSync('./data.json', userData)
    
res.send({status : true, msg: "ajout effectue avec succes"})
})

const saveUserData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync('data.json', stringifyData)
}
app.listen(3000, ()=>{
    console.log("server ruuning on 3000");
}
)
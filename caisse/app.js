const express = require('express')
const app = express()
const routercaisse = require('./caisseRoute')
const connectDB = require('./db')
//configuration et parametres de application
require('dotenv').config()

app.use(express.json())

port = process.env.PORT || 3000

app.use('/api/v1/', routercaisse)

const start = async() => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Your server is alive on : http://localhost:${port}`))
    }catch(error){
        console.log(error);
    }
}


start()
const a = require('mongoose')

// declaration nouveau variable connectDB
const connectDB = (url) => {
    return a.connect(url)
}


module.exports = connectDB
const mongoose = require('mongoose');

function connectDb(){
    mongoose.connect('mongodb://localhost:27017/AgroTech', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    const connection = mongoose.connection

    
    connection.on('connected', () => {
        console.log('Database connected')
    })
    
    connection.on('error', () => {
        console.log('Database connection failed')
    })
}

connectDb()
module.export = mongoose
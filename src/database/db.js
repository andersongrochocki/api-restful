const mongoose = require("mongoose")

// == Conforme explicação do Thiago, no meu caso corrigi de outra forma e não deu erro
//mongoose.set('useNewUrlParser', true)
//mongoose.set('useUnifiedTopology', true)

function connect() {
    // mongoose.set('useNewUrlParser', true)
    // mongoose.set('useUnifiedTopology', true)

    mongoose.connect('mongodb://127.0.0.1:27017/api-restful')
    
    
    const db = mongoose.connection
    
    db.once('open', () => {
        console.log('MongoDB database connected!')
    })
    
    db.on('error', console.error.bind(console, 'Connection error: '))
}

module.exports = {
    connect  
}  



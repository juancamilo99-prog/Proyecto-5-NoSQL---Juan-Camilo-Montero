//nos conectamos a nuestra base de datos
const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');

const urlDB = 'mongodb://user:root@localhost:27017/library-books?authSource=admin' //url de la database local

const connect = async() => {
    try{
        //le pàsamos la url
        await mongoose.connect(urlDB)
        console.log(`Connected with database succesfully`)
    }catch(error){
        console.log("Error to connect with database")
    }
}

module.exports = { connect ,};
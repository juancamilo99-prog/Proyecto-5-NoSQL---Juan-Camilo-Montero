const mongoose = require('mongoose');

//empezamos a crear el esquema de los personajes
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, require: true},
    author: { type: String, require: true},
    genre: { type: String, require:true},
    pages: { type: Number},
    read: { type: Boolean, require: true},
},
{
    timestamp: true,
}); 


//creamos y exportamos el modelo books
const Book = mongoose.model('Book', bookSchema);
module.exports = Book;

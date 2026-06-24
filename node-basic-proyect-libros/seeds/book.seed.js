const mongoose = require('mongoose');

//importamos el modelo Book
const Book = require('../models/Book');

// le pasamos los valores

const books = [
    {
    title: "Harry Potter y la piedra filosofal",
    author: "J.K. Rowling",
    genre: "Fantasía",
    pages: 223,
    read: true,
  },
  {
    title: "El Señor de los Anillos: La Comunidad del Anillo",
    author: "J.R.R. Tolkien",
    genre: "Fantasía",
    pages: 423,
    read: true,
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    genre: "Ciencia ficción",
    pages: 688,
    read: false,
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Distopía",
    pages: 328,
    read: true,
  },
  {
    title: "Orgullo y prejuicio",
    author: "Jane Austen",
    genre: "Romance",
    pages: 432,
    read: false,
  },
  {
    title: "Los juegos del hambre",
    author: "Suzanne Collins",
    genre: "Distopía",
    pages: 374,
    read: true,
  },
  {
    title: "El nombre del viento",
    author: "Patrick Rothfuss",
    genre: "Fantasía",
    pages: 872,
    read: false,
  },
  {
    title: "La sombra del viento",
    author: "Carlos Ruiz Zafón",
    genre: "Misterio",
    pages: 576,
    read: true,
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "Historia",
    pages: 496,
    read: false,
  },
  {
    title: "El alquimista",
    author: "Paulo Coelho",
    genre: "Ficción",
    pages: 208,
    read: true,
  }
];

//dirigimos el documento
const booksDocuments = books.map(books => new Book(books));

//conectamos a la base de datos
mongoose
.connect('mongodb://user:root@localhost:27017/library-books?authSource=admin')
.then(async () => {
    //obtenemos todos los libros de la bd
    const Allbooks = await Book.find();

    if(Allbooks.length){
        await Book.collection.drop();
    }
})
.catch((error) => console.log(`Error deleting data: ${error}`))
.then(async()=>{
    await Book.insertMany(booksDocuments)
    console.log('Datos ingresados correctamente!')
})
.catch((error) => console.log(`Error creating data: ${error}`))
.finally(() => mongoose.disconnect());
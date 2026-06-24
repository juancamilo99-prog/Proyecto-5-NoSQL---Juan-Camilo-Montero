const express = require('express');
const Book = require('../models/Book');
const router = express.Router();


//metodo get

router.get('/', async(req, res,next) => {
    try{
        const books = await Book.find();
        return res.status(200).json(books)
    }catch(error){
        return next(error)
    }
});

//buscar por su id
router.get('/books/:id', async(req, res) =>{
    const id = req.params.id;
    try{
        const book = await Book.findById(id);
        if(book){
            return res.status(200).json(book);
        }else{
            return res.status(404).json('Not book found by this id');
        }
    }catch(error){
        return res.status(500).json(error)
    }
})
//buscar por el titulo

router.get('/books/title/:title', async(req, res) =>{
    const {title} = req.params;
    try{
        const bookBytitle = await Book.find({title:title});
        if(bookBytitle){
            return res.status(200).json(bookBytitle);
        }else {
            return res.status(404).json("Book not found by this title")
        }
    }catch(error){
        return res.status(500).json(error);
    }
})

//buscar segun su genero

router.get('/books/genre/:genre', async(req, res) =>{
    const {genre} = req.params;
    try{
        const bookByGenre = await Book.find({genre:genre});
        if(bookByGenre){
            return res.status(200).json(bookByGenre);
        }else{
            return res.status(404).json("Genre not found")
        }
    }catch(error){
        return res.status(500).json(error);
    }
})

//buscar las que no se hayan leido!
router.get('/books/read/:read', async(req, res) =>{
    const {read} = req.params;
    try{
        const readBooks = await Book.find({read:read});
        if(readBooks){
            return res.status(200).json(readBooks);
        }else{
            return res.status(404).json("Books not found");
        }
    }catch(error){
        return res.status(500).json(error);
    }
})


//metodo POST

router.post('/create', async(req,res, next) =>{
    try{
        //instanciamos los parametros del libro
        const newBooks = new Book({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            pages: req.body.pages,
            read: req.body.read
        });

        //creamos el nuevo libro y lo guardamos en newBooks
        const createNewBook = await newBooks.save();
        return res.status(200).json(createNewBook);
    }catch(error){
        next(error);
    }
})

//metodo PUT

router.put('/edit/:id', async(req, res, next) => {
    try{
        const {id} = req.params;
        //instanciamos el nuevo libro con la informacion del body
        const bookModify = new Book(req.body);
        bookModify._id = id;
        const bookUpdate = await Book.findByIdAndUpdate(id, bookModify);
        return res.status(200).json(bookUpdate)
    }catch(error){
        return next(error);
    }
})

//metodo deleted
router.delete('/:id', async(req,res,next) =>{
    try{
        const {id} = req.params;
        await Book.findByIdAndDelete(id);
        return res.status(200).json('Book deleted!');
    }catch(error){
        next(error);
    }
})

module.exports = router;

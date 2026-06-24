# 📚 Book Library API

API REST desarrollada con **Node.js**, **Express**, **MongoDB** y **Mongoose** para la gestión de una biblioteca de libros.

## 🚀 Tecnologías utilizadas

* Node.js
* Express
* MongoDB
* Mongoose
* Postman
* Docker

---

## 🐳 Docker

MongoDB se ejecuta dentro de un contenedor Docker.

#### Resultado

![GET ALL](./proyect-4-nosql/inicio_docker.png)

---

## 📖 Modelo de datos

```json
{
  "title": "Harry Potter y la piedra filosofal",
  "author": "J.K. Rowling",
  "genre": "Fantasía",
  "pages": 223,
  "read": true
}
```

---

## 🔗 Endpoints

### Obtener todos los libros

```http
GET /books
```

#### Resultado

![GET ALL](./proyect-4-nosql/get_postman.png)

---

### Obtener un libro por title

```http
GET /books/title/:title
```

#### Resultado

![GET ALL](./proyect-4-nosql/get_title_postman.png)

---

### Obtener un libro por ID

```http
GET /books/:id
```

#### Resultado

![GET BY ID](./proyect-4-nosql/get_id_postman.png)

---

### Obtener un libro por genero

```http
GET /books/genre/:genre
```

#### Resultado

![GET ALL](./proyect-4-nosql/get_genre_postman.png)

---

### Obtener un libro por read

```http
GET /books/read/:read
```

#### Resultado

![GET ALL](./proyect-4-nosql/get_read_postman.png)

---

### Crear un libro

```http
POST /books
```

#### Body

```json
{
  "title": "Dune",
  "author": "Frank Herbert",
  "genre": "Ciencia ficción",
  "pages": 688,
  "read": false
}
```

#### Resultado

![POST](./proyect-4-nosql/post_create_postman.png)

#### Resultado en la BD
![POST](./proyect-4-nosql/post_create_bd.png)

---

### Actualizar un libro

```http
PUT /books/:id
```

#### Resultado

![PUT](./proyect-4-nosql/put_edit_postman.png)

#### Resultado en la BD
![PUT](./proyect-4-nosql/put_edit_db.png)

---

### Eliminar un libro

```http
DELETE /books/:id
```

#### Resultado

![DELETE](./proyect-4-nosql/delete_book_postman.png)

---

## 🗄️ Base de datos

La aplicación utiliza MongoDB como base de datos NoSQL y Mongoose como ODM para la gestión de los modelos.

### Conexion a BD

![GET ALL](./proyect-4-nosql/connect_with_db.png)

### Insercion de datos a la BD

![GET ALL](./proyect-4-nosql/insertar_datos.png)

### Base de datos 

![GET ALL](./proyect-4-nosql/datos_bd.png)

---


## 👨‍💻 Autor

Proyecto desarrollado como práctica de API REST utilizando Node.js, Express y MongoDB.
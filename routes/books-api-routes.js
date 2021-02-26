const db = require('../models');

module.exports = (app) => {
  app.get('/api/books', (req, res) => {
    db.books.findAll({
      include: [db.Post],
    }).then((dbbooks) => res.json(dbbooks));
  });

  app.get('/api/books/:id', (req, res) => {
    db.books.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Post],
    }).then((dbbooks) => res.json(dbbooks));
  });

  app.post('/api/books', (req, res) => {
    db.books.create(req.body).then((dbbooks) => res.json(dbbooks));
  });

  app.delete('/api/books/:id', (req, res) => {
    db.books.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbbooks) => res.json(dbbooks));
  });

  //Function for creating books:
  function creatingBooks(title, author, genre) {
  return Books.create({
    Title: title,
    Author: author,
    Genre: genre,
    });
  }

  //Inside of books table:
  books.sync({ force: true }).then(function () {
  creatingBooks("Jimmy's Blues and Other Poems", "James Baldwin", "Poetry");
  creatingBooks("White Noise", "Don Delillo", "Fiction");
  creatingBooks("Milk and Honey", "Rupi Kaur", "Poetry");
  creatingBooks("Harry Potter and the Cursed Child", "J.K. Rowling", "Fantasy");
  });
}
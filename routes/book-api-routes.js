const db = require('../models');

module.exports = (app) => {
  app.get('/api/books', (req, res) => {
    db.Book.findAll({
      include: [db.Post],
    }).then((dbBook) => res.json(dbBook));
  });

  app.get('/api/books/:id', (req, res) => {
    db.Book.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Post],
    }).then((dbBook) => res.json(dbBook));
  });

  app.post('/api/books', (req, res) => {
    db.Book.create(req.body).then((dbBook) => res.json(dbBook));
  });

  app.delete('/api/books/:id', (req, res) => {
    db.Book.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbBook) => res.json(dbBook));
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
};
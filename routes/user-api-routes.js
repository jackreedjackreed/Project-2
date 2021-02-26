const db = require('../models');

module.exports = (app) => {
  app.get('/api/users', (req, res) => {
    db.User.findAll({
      include: [db.Post],
    }).then((dbUser) => res.json(dbUser));
  });

  app.get('/api/users/:id', (req, res) => {
    db.User.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Post],
    }).then((dbUser) => res.json(dbUser));
  });

  app.post('/api/users', (req, res) => {
    db.User.create(req.body).then((dbUser) => res.json(dbUser));
  });

  app.delete('/api/users/:id', (req, res) => {
    db.User.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbUser) => res.json(dbUser));
  });


//Function for creating users:
function creatingUsers(firstName, lastName, favoriteBook) {
    return Books.create({
      firstName: firstName,
      lastName: lastName,
      favoriteBook: favoriteBook,
    });
  }

//Inside of users table:
users.sync({ force: true }).then(function () {
  creatingUsers("Jim", "Carrey", "The Mask");
  creatingUsers("Meryl", "Streep", "The Devil Wears Prada");
  creatingUsers("Sponge", "Bob", "How to Make The Perfect Krabby Patty");
  creatingUsers("Jack", "Nicholson", "How to Get Away with Murder");
});
};
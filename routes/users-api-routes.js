const db = require('../models');

module.exports = (app) => {
app.get('/api/users', (req, res) => {
    db.users.findAll({
      include: [db.Post],
    }).then((dbusers) => res.json(dbusers));
  });

  app.get('/api/users/:id', (req, res) => {
    db.users.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Post],
    }).then((dbusers) => res.json(dbusers));
  });

  app.post('/api/users', (req, res) => {
    db.users.create(req.body).then((dbusers) => res.json(dbusers));
  });

  app.delete('/api/users/:id', (req, res) => {
    db.users.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbusers) => res.json(dbusers));
  });
}

//Function for creating users:
function creatingUsers(firstName, lastName, favoriteBook) {
  return users.create({
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
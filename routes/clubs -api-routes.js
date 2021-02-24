const db = require('../models');

module.exports = (app) => {
 //Function for creating clubs
 function creatingClubs(clubName, clubPassword) {
    return clubs.create({
      clubName: clubName,
      clubPassword: clubPassword,
    });
  }
  
  //Inside of clubs table:
  clubs.sync({ force: true }).then(function () {
    creatingClubs("Brick by Brick", "password1");
    creatingClubs("Social Norms", "password2");
  });

  app.get('/api/clubs', (req, res) => {
    db.clubs.findAll({
      include: [db.Post],
    }).then((dbclubs) => res.json(dbclubs));
  });

  app.get('/api/clubs/:id', (req, res) => {
    db.clubs.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Post],
    }).then((dbclubs) => res.json(dbclubs));
  });

  app.post('/api/clubs', (req, res) => {
    db.clubs.create(req.body).then((dbclubs) => res.json(dbclubs));
  });

  app.delete('/api/clubs/:id', (req, res) => {
    db.clubs.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbclubs) => res.json(dbclubs));
  });

}
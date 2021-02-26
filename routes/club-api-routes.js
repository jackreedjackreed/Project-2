const db = require('../models');

module.exports = (app) => {
  app.get('/api/clubs', (req, res) => {
    db.Club.findAll({
      include: [db.Post],
    }).then((dbClub) => res.json(dbClub));
  });

  app.get('/api/clubs/:id', (req, res) => {
    db.Club.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Post],
    }).then((dbClub) => res.json(dbClub));
  });

  app.post('/api/clubs', (req, res) => {
    db.Club.create(req.body).then((dbClub) => res.json(dbClub));
  });

  app.delete('/api/clubs/:id', (req, res) => {
    db.Club.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbClub) => res.json(dbClub));
  });


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
};
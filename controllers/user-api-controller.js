const db = require('../models');
module.exports = (app) => {
  
  app.get('/reference', async (req, res) => {
    try{
      // Get A Noun
    const randomNoun = await  db.noun.findAll({
          order: db.Sequelize.literal('rand()'),
          limit: 1
     })
     // Get an Adjective
     const randomAdjective = await db.adjective.findAll({
         order: db.Sequelize.literal('rand()'),
         limit: 1
     })
     const result = {noun: randomNoun[0].noun, adjective: randomAdjective[0].adjective};
     // Send to the view
     res.render('reference', {result});
    }catch(err){  
      //console.log(err);
    }
  });

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
    db.User.create(req.body).then((dbUser) => {
    //console.log(dbUser)
    res.json(dbUser.dataValues)});
  });

  app.delete('/api/users/:id', (req, res) => {
    db.User.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbUser) => res.json(dbUser));
  });
};

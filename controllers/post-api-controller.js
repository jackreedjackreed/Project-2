// Dependencies

// Requiring our models
const db = require('../models');

// Routes
module.exports = (app) => {
  app.get('/posts', (req, res) => {
    db.Post.findAll({
      include: [db.User]
    }).then((dbPost) => {
      console.log(dbPost)
      res.render("posts", {posts: dbPost})
      
      
    });
  });

  // Get route for retrieving a single post
  app.get('/api/posts/:id', (req, res) => {
    db.Post.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.User],
    }).then((dbPost) => res.json(dbPost));
  });

  // POST route for saving a new post
  app.post('/api/posts', (req, res) => {
    //console.log(req.body)
    
    db.Post.create(req.body).then((dbPost) => res.json(dbPost));
     
  });

  // DELETE route for deleting posts
  app.delete('/api/posts/:id', (req, res) => {
    db.Post.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbPost) => res.json(dbPost));
  });

  // PUT route for updating posts
  app.put('/api/posts', (req, res) => {
    db.Post.update(req.body, {
      where: {
        id: req.body.id,
      },
    }).then((dbPost) => res.json(dbPost));
  });
};

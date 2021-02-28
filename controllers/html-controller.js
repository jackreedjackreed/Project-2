// Dependencies
const path = require('path');

// Routes
module.exports = (app) => {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/assets/home.html'))
  );

  app.get('/home', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/assets/home.html'))
);

  // posts route loads posts.html
  app.get('/posts', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/assets/posts.html'))
  );

  app.get('/users', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/assets/users.html'))
  );

  app.get('/single-user', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/assets/single-user.html'))
  );

  app.get('/new-post', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/assets/new-post.html'))
  );

  // users route loads user-manager.html
  app.get('/clubs', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/assets/clubs.html'))
  );

   // loads user card
   app.get('/user-card', (req, res) =>
   res.sendFile(path.join(__dirname, '../views/partials/user-card.html'))
 );
};



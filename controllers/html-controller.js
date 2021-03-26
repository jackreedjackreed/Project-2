// Dependencies
const path = require('path');

// Routes- request handlers
module.exports = (app) => {
  // Each of the below routes just handles the HTML page that the user gets sent to.
  app.get('/', (req, res) =>
    // res.sendFile(path.join(__dirname, '../public/assets/home.html'))
    res.render("home", {})
  );

  app.get('/home', (req, res) =>
    // res.sendFile(path.join(__dirname, '../public/assets/home.html'))
   res.render("home", {}) 
);

  app.get('/posts', (req, res) =>
    res.render(posts)
  );

  app.get('/reference', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/assets/reference.html'))
    //res.render("reference", {})
  );

  app.get('/single-user', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/assets/single-user.html'))
  );

  app.get('/single-post', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/assets/single-post.html'))
  );

  app.get('/new-post', (req, res) =>
    // res.sendFile(path.join(__dirname, '../public/assets/new-post.html'))
    res.render("new-post", {})
  );

  app.get('/users', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/assets/users.html'))
  );

  app.get('/clubs', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/assets/clubs.html'))
  );
};
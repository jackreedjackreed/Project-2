// Dependencies
const path = require('path');

// Routes
module.exports = (app) => {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/home.html'))
  );

  app.get('/clubss', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/clubs.html'))
  );

  app.get('/post', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/post.html'))
  );

  app.get('/users', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/users.html'))
  );
};

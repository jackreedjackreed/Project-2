// Dependencies
const path = require('path');

// Routes
module.exports = (app) => {
  // index route loads view.html
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/blog.html'))
  );

  // cms route loads cms.html
  app.get('/cms', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/cms.html'))
  );

  // blog route loads blog.html
  app.get('/blog', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/blog.html'))
  );

  // authors route loads author-manager.html
  app.get('/authors', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/author-manager.html'))
  );
};

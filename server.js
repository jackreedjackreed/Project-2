const path = require("path");
const express = require('express');

const htmlRouter = require('./controllers/html-controller.js');
const userRouter = require('./controllers/user-api-controller.js');
const apiRouter = require('./controllers/post-api-controller.js');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8092;

// Requiring our models for syncing
const db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));

//Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Invoke routes
htmlRouter(app);
userRouter(app);
apiRouter(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});

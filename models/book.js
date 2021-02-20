//Table for books
var books = sequelize.define(
  "books",
  {
    Title: {
      type: Sequelize.STRING,
    },
    Author: {
      type: Sequelize.STRING,
    },
    Genre: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeBooks: true,
  }
);

//Function for creating books:
function creatingBooks(title, author, genre) {
  return Books.create({
    Title: title,
    Author: author,
    Genre: genre,
  });
}

//Inside of books table:
books.sync({ force: true }).then(function () {
  creatingBooks("Jimmy's Blues and Other Poems", "James Baldwin", "Poetry");
  creatingBooks("White Noise", "Don Delillo", "Fiction");
  creatingBooks("Milk and Honey", "Rupi Kaur", "Poetry");
  creatingBooks("Harry Potter and the Cursed Child", "J.K. Rowling", "Fantasy");
});

//Table for clubs
var clubs = sequelize.define(
  "clubs",
  {
    clubName: {
      type: Sequelize.STRING,
    },
    clubPassword: {
      type: Sequelize.STRING,
    },
  },
  { freezeBooks: true }
);

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

//Table for a user
var users = sequelize.define(
  "users",
  {
    firstName: {
      type: Sequelize.STRING,
    },
    lastName: {
      type: Sequelize.STRING,
    },
    favoriteBook: {
      type: Sequelize.STRING,
    },
  },
  {
    freezeBooks: true,
  }
);

//Function for creating users:
function creatingUsers(firstName, lastName, favoriteBook) {
    return Books.create({
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
module.exports = (sequelize, DataTypes) => {
var books = sequelize.define(
    "books",
    {
      Title: {
        type: DataTypes.STRING,
      },
      Author: {
        type: DataTypes.STRING,
      },
      Genre: {
        type: DataTypes.STRING,
      },
    },
    {
      freezeBooks: true,
    }
  );
  
  //Table for clubs
  var clubs = sequelize.define(
    "clubs",
    {
      clubName: {
        type: DataTypes.STRING,
      },
      clubPassword: {
        type: DataTypes.STRING,
      },
    },
    { freezeBooks: true }
  );
  
 
  //Table for a user
  var users = sequelize.define(
    "users",
    {
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      favoriteBook: {
        type: DataTypes.STRING,
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

}
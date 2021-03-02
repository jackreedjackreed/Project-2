module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {

    // profileImage:{
    //   type: DataTypes.IMAGE,
    //   allowNull: true
    // },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    favoriteBook: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len:[1],
      },
      defaultValue: 'Personal',
    },
  });
  return User;

};

//Inside of users table:
users.sync({ force: true }).then(function () {
  creatingUsers("Sarah", "Dayan", "The Secret Life of Plants", "New York");
  creatingUsers("Jeremy", "Lane", "The Mamba Mentality: How I Play", "Deleware");
  creatingUsers("Carolyn", "David", "How America’s Political Parties Change (and How They Don’t)", "California");
  creatingUsers("Chad", "Blake", "The Alchemist", "New York");
  creatingUsers("Kathy", "Henderson", "The Hobbit", "Vermont");
  creatingUsers("Artie", "James", "The Innovator’s Dilemma", "Texas");
});
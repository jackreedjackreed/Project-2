module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {

    profileImage:{
      type: DataTypes.IMAGE,
      allowNull: true
    },
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
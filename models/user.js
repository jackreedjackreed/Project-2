module.exports = (sequelize, DataTypes) => {
  //Table for users
  var Users = sequelize.define(
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
      nameOfAuthor: {
        type: DataTypes.STRING,
      },
      club: {
        type: DataTypes.INTEGER
        //FIND WHERE ID =....
      }
    },
    {
      freezeUsers: true,
      timestamps: false
    }
  );
  Users.associate = (models) => {
    Users.hasMany(models.Post, {
      onDelete: "cascade",
    });
  };

  return Users;
};

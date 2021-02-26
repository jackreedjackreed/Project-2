const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)

module.exports = (sequelize, DataTypes) => {
  //Table for books
  var Books = sequelize.define(
    "books",
    {
      title: {
        type: DataTypes.STRING,
      },
      author: {
        type: DataTypes.STRING,
      },
      genre: {
        type: DataTypes.STRING,
      },
    },
    {
      freezeBooks: true,
      timestamps: false
    }
  );
 
  return Books;
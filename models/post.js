const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)


module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1],
    },
  });

  Post.associate = (models) => {
    Post.belongsTo(models.users, {
      foreignKey: {
        allowNull: false,
      },
    });
  // console.log({models})
  };

  return Post;
};
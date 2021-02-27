
//Table for clubs
module.exports = (sequelize, DataTypes) => {
  var Clubs = sequelize.define(
    "clubs",
    {
      clubName: {
        type: DataTypes.STRING,
      },
      clubPassword: {
        type: DataTypes.STRING,
      },
    },
    { freezeClubs: true ,
    timestamps: false}
  );

  return Clubs;
};

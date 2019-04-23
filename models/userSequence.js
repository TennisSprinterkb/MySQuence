module.exports = function(sequelize, DataTypes) {
  var Sequence = sequelize.define("Sequence", {
    sequenceName:
    { type: DataTypes.STRING,
      allowNull: false,
    },
    poseIds:{
      type: DataTypes.STRING,
      allowNull: false,
    }, 
  });
  Sequence.associate = function (models) {
    Sequence.belongsTo(models.User);
  };
  return Sequence;
 };
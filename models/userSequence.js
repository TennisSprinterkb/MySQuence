module.exports = function(sequelize, DataTypes) {
    var Sequence = sequelize.define("Sequence", {
       userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sequenceName:
      { type: DataTypes.STRING,
        allowNull: false,
      },
      poseIds:{
        type: DataTypes.STRING,
        allowNull: false,
      },
    },{
        classMethods: {
            associate: function(models){
                Sequence.hasOne(models.User)

            }

        }  
    });
    return Sequence;
   };
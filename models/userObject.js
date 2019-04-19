module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
       userName:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      emailAddress:
      { type: DataTypes.STRING,
        allowNull: false,
      },
      passwordHash:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      isTeacher:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      certificationNumber:{
        type: DataTypes.STRING,
        allowNull: true,
      },
    },{
        classMethods: {
            associate: function(models){
                User.hasMany(models.Sequence)

            }

        }  
    });
    return User;
   };
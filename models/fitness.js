module.exports = function(sequelize, DataTypes) {
    var Fitness = sequelize.define("Fitness", {
        fitnessId: {

            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true,

        },
        exercise:
       {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      weight130:
      {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      weight155:
      {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      weight180:
      {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      weight205:
      {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      calories:
      {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
    });
  
    // Post.associate = function(models) {
    //         // We're saying that a Post should belong to the User
    //   Post.belongsTo(models.User, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };
  
    return Fitness;
};
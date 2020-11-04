module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // Giving the User input a name of type STRING and weight and calories in INTEGER
      name: DataTypes.STRING,
      weight: DataTypes.INTEGER,
      calories: DataTypes.INTEGER
    });
  
    // User.associate = function(models) {
    //   // Associating User with Posts
    //   User.hasMany(models.Post, {
    //     onDelete: "cascade"
    //   });
    // };
  
    return User;
  };
  
module.exports = function(sequelize, DataTypes) {
    var Workout = sequelize.define("Workout", {
      // Giving the Author model a name of type STRING
      name: DataTypes.STRING,
      weight130: DataTypes.INTEGER,
      weight155: DataTypes.INTEGER,
      weight180: DataTypes.INTEGER,
      weight205: DataTypes.INTEGER,
    });
  
    return Workout;
  };
  
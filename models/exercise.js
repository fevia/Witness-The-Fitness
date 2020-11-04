module.exports = function(sequelize, DataTypes) {
    var Exercise = sequelize.define("Exercise", {
      // Giving the Author model a name of type STRING
    exercise: DataTypes.STRING,
    "130lb":DataTypes.INTEGER,
    "155lb":DataTypes.INTEGER,
    "180lb":DataTypes.INTEGER,
    "205lb":DataTypes.INTEGER,
    calories:DataTypes.DECIMAL
});
  
    return Exercise;
  };
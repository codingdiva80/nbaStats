module.exports = function(sequelize, DataTypes) {
  var Players = sequelize.define("Players", {
    // Giving the player model a name of type STRING
    pid: DataTypes.INTEGER,
    player_name: DataTypes.STRING,
    age: DataTypes.STRING,
    birthCountry: DataTypes.STRING,
    birthDate: DataTypes.STRING,
    height: DataTypes.STRING,
    position: DataTypes.STRING,
    weight: DataTypes.STRING
  }, {
    freezeTableName: true
  });

  // Players.associate = function(models) {
  //   // Associating Author with Posts
  //   // When an Author is deleted, also delete any associated Posts
  //   Players.hasMany(models.Stats, {
  //      foreignKey: 'pid'
  //      // targetKey: 'pid'
  //   });
  // };

  return Players;
};

module.exports = function(sequelize, DataTypes) {
  var Stats = sequelize.define("Stats", {
    // Giving the player model a name of type STRING
    date: DataTypes.INTEGER,
    time: DataTypes.STRING,
    city: DataTypes.STRING,
    pid: DataTypes.INTEGER,
    points: DataTypes.INTEGER,
    assists: DataTypes.INTEGER,
    rebounds: DataTypes.INTEGER,
    steals: DataTypes.INTEGER,
    blocks: DataTypes.INTEGER,
    turnovers: DataTypes.INTEGER
  }, {
    freezeTableName: true
  });
  // Stats.associate = function(models){
  //   Stats.belongsTo(models.Players, {
  //     foreignKey: 'pid'
  //     // targetKey: 'pid'
  //   });
  // }

  return Stats;
};

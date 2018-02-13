module.exports = function(sequelize, DataTypes) {

	var User = sequelize.define("account", {
  email: DataTypes.STRING,
  password: DataTypes.STRING
  }, {
	  timestamps: false
	});

  return User;
};

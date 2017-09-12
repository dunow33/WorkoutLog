module.exports = function(sequelize, DataTypes) {
	return sequelize.define('log', {
		name: DataTypes.STRING,
		weight: DataTypes.INTEGER,
		age: DataTypes.INTEGER,
	});
};
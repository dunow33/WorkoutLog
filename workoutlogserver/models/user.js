module.exports = function(sequelize, DataTypes){
	return sequelize.define('user', {
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			currentWeight: DataTypes.STRING,
			targetWeight: DataTypes.STRING,
			sex: DataTypes.STRING,
			username: DataTypes.STRING,
			passwordhash: DataTypes.STRING,
			age: DataTypes.INTEGER
		});
};
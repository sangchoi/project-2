'use strict';
module.exports = (sequelize, DataTypes) => {
  const profile = sequelize.define('profile', {
    birthYear: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    language: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  profile.associate = function(models) {
    // associations can be defined here
    models.profile.belongsTo(models.user);
  };
  return profile;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const usersFriends = sequelize.define('usersFriends', {
    userId: DataTypes.INTEGER,
    friendId: DataTypes.INTEGER
  }, {});
  usersFriends.associate = function(models) {
    // associations can be defined here
  };
  return usersFriends;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const friend = sequelize.define('friend', {
    name: DataTypes.STRING
  }, {});
  friend.associate = function(models) {
    // associations can be defined here
    models.friend.belongsToMany(models.user, {through: "usersFriends"});
  };
  return friend;
};
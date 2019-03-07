'use strict';
module.exports = (sequelize, DataTypes) => {
  const destination = sequelize.define('destination', {
    name: DataTypes.STRING
  }, {});
  destination.associate = function(models) {
    // associations can be defined here
    models.destination.belongsToMany(models.user, {through: "usersDestinations"});
  };
  return destination;
};
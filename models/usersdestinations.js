'use strict';
module.exports = (sequelize, DataTypes) => {
  const usersDestinations = sequelize.define('usersDestinations', {
    userId: DataTypes.INTEGER,
    destinationId: DataTypes.INTEGER
  }, {});
  usersDestinations.associate = function(models) {
    // associations can be defined here
  };
  return usersDestinations;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const clientList = sequelize.define('clientList', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    selected: DataTypes.BOOLEAN
  }, {});
  clientList.associate = function(models) {
    // associations can be defined here
  };
  return clientList;
};
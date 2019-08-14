'use strict';
module.exports = (sequelize, DataTypes) => {
  const Templates = sequelize.define('Templates', {
    name: DataTypes.STRING,
    body: DataTypes.STRING
  }, {});
  Templates.associate = function(models) {
    // associations can be defined here
  };
  return Templates;
};
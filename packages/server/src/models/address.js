"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    static associate(models) {
      Address.belongsTo(models.User, { foreignKey: "id_user" });
    }
  }
  Address.init(
    {
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      province: DataTypes.STRING,
      postal_code: DataTypes.STRING,
      id_user: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Address",
    }
  );
  return Address;
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product_Description extends Model {
    static associate(models) {}
  }
  Product_Description.init(
    {
      purpose: DataTypes.STRING,
      packaging: DataTypes.STRING,
      class: DataTypes.STRING,
      how_to_save: DataTypes.STRING,
      how_to_use: DataTypes.STRING,
      caution: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product_Description",
    }
  );
  return Product_Description;
};

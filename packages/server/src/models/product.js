"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsToMany(models.Category, {
        through: models.Product_Category,
        foreignKey: "id_product",
      });
      // Product.hasOne(models.Product_Description, {
      //   foreignKey: "id_product_description",
      // });
      Product.hasMany(models.Product_Img, {
        foreignKey: "id_product",
      });
    }
  }
  Product.init(
    {
      code: DataTypes.STRING,
      name: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      id_product_description: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};

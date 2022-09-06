const { Product, Category } = require("../models");

class productController {
  static async addProduct(req, res) {
    try {
      const { name } = req.body;

      const newProduct = await Product.create({
        name,
      });
      return res.status(200).json({
        message: "new Product has been created",
        result: newProduct,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.toString(),
      });
    }
  }

  static async getAllProduct(req, res) {
    try {
      let findProduct = await Product.findAll({
        include: [Category],
      });
      res.status(200).json({ status: "success", result: findProduct });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.toString(),
      });
    }
  }

  static async getProductById(req, res) {
    try {
      const { id } = req.params;

      const findProduct = await Product.findAll({
        where: {
          id,
        },
      });
      return res.status(200).json({
        message: "Get Product",
        result: findProduct,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: err.toString(),
      });
    }
  }

  static async deleteProduct(req, res) {
    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ status: "success", data: "deleted" });
  }
}

module.exports = productController;

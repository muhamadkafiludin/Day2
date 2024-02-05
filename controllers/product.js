const Products = require("../models/product");
module.exports = {
  productCreate: async (req, res, next) => {
    try {
      let newProduct = new Products({...req.body});
      await newProduct.save();
      return res.status(200).json({ message: "Produk berhasil ditambahkan" });
    } catch (err) {
      return next(err);
    }
  },
      // GET ALL product

  getAllProduct: async (req, res, next) => {
    try {
      const product = await Products.find({});
      return res.status(200).json(product);
    } catch (err) {
      next(err);
    }
  },

  //UPDATE or EDIT Product
  //Note Update all field
  updateProductById: async (req, res, next) => {
    try {
      const findProductAndUpdate = await Products.findByIdAndUpdate(
        req.params.productId,
        { ...req.body}
      );
      return res.status(200).json(findProductAndUpdate);
    } catch (err) {
      next(err)
    }
  },

  //Update by name
  // Note : Update specific field

  updateByname: async (req,res, next) => {
    try {
      const findProductByName = await Products.findByIdAndUpdate(
        {name: req.body.name},
        { ...req.body}
      );
      return res.status(200).json(findProductByName);
    } catch (err) {
      next(err)
    }
  },

  getProductById: async (req, res, next) => {
    try {
      const getProductById =await Products.findById(req, params.ProductsId, { ...req.body});
      return res.status(200).json(getProductById);
    } catch (err) {
      next(err);
    }
  },

  deletProductByid: async (req,res,next) => {
    try {
      const deletProductByid = await Products.findByIdAndDelete(
        req.params.productId
      );
      return res.status(200).json("delete product success");
    } catch (err) {
      next(err);
    }
  },
};



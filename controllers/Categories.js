const Category = require("../models/category")
module.exports = {
    categorytCreate: async (req, res, next) => {
        try {
            let newCategory = new Category({
                ...req.body
            });
            await newCategory.save();
            return res
                .status(200)
                .json({message: "Kategori berhasil di tambahkan"});

        } catch (err) {
            return next(err);
        }
    },


    getAllCategory: async (req, res, next) => {
        try {
            const category = await Category.find({});
            return res
                .status(200)
                .json(category)
        } catch (err) {
            next(err);
        }
    },
};
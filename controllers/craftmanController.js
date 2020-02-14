const Craftman = require('../models/craftsmanModel');
const Products = require('../models/productModel');
exports.craftmanGet = async(req, res) => {
    const allCraftman = await Craftman.find();
    res.render('craftsman/allCraftsman', { allCraftman });
}

exports.craftmanDetailGet = async(req, res) => {
    const { craftmanID } = req.params;
    const detailCraftman = await Craftman.findById(craftmanID);
    const products = await Products.find({ craftsman: craftmanID });
    res.render('craftsman/detailCraftman', { detailCraftman, products });
}
const Product = require('../models/productModel');

exports.productsGet = async(req, res) => {
    const products = await Product.find().populate('craftsman', 'name');
    res.render('products/products', { products });
}

exports.productDetailGet = async(req, res) => {
    const { id } = req.params;
    const productDetail = await Product.findById(id).populate('craftsman', 'name region');
    //console.log(productDetail)
    res.render('products/productDetail', productDetail);
}
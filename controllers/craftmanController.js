const Craftman = require('../models/craftsmanModel');

exports.craftmanGet = async(req, res) => {
    const allCraftman = await Craftman.find();
    res.render('craftsman/allCraftsman', { allCraftman });
}
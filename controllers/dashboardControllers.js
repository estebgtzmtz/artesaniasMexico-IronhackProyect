const Craftsman = require('../models/craftsmanModel');
const Product = require('../models/productModel');

exports.dashboardGet = async(req, res) => {
    const options = ['Oaxaca', 'Chiapas', 'Tabasco', 'Michoacan', 'Guerrero', 'Yucatan'];
    const craftman = await Craftsman.find().
    populate('Product', 'name description');
    res.render('dashboard/dashboard', { options, craftman });
};

exports.dashboardPost = async(req, res) => {
    const { name, region, about } = req.body;
    const newCraftman = {
        name,
        region,
        about
    }
    await Craftsman.create(newCraftman);
    res.redirect('/dashboard');
};

exports.dashboardDelete = async(req, res) => {
    const { id } = req.params;
    await Craftsman.findByIdAndDelete(id);
    res.redirect('/dashboard');
}

exports.detailGet = async(req, res) => {
    const { id } = req.params;
    const category = ['Textiles', 'Ceramica', 'Joyeria', 'Pinturas'];
    const craftman = await Craftsman.findById(id);
    res.render('dashboard/detail', { craftman, category });
}

exports.createProductPost = async(req, res) => {
    const { name, price, quantity, description, category } = req.body;
    const { craftmanID } = req.params;
    console.log(craftmanID)
    const product = {
        name,
        price,
        quantity,
        description,
        category,
        craftsman: craftmanID
    }
    const newProduct = await Product.create(product);
    res.redirect(`/dashboard/detail/${craftmanID}`);
}
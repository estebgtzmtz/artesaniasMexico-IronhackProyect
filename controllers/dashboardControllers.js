const Craftsman = require('../models/craftsmanModel');
const Product = require('../models/productModel');

exports.dashboardGet = async(req, res) => {
    const options = ['Oaxaca', 'Chiapas', 'Tabasco', 'Michoacan', 'Guerrero', 'Yucatan'];
    const craftman = await Craftsman.find();
    res.render('dashboard/dashboard', { options, craftman });
};

exports.dashboardPost = async(req, res) => {
    const { name, region, about, address, latitude, longitude } = req.body;
    const { secure_url: img } = req.file

    const newCraftman = {
        name,
        region,
        about,
        img,
        location: {
            address,
            coordinates: [longitude, latitude]
        }
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
    const product = await Product.find({ craftsman: id });
    res.render('dashboard/detail', { craftman, category, product });
}

exports.createProductPost = async(req, res) => {
    const { name, price, quantity, description, category } = req.body;
    const { craftmanID } = req.params;
    const { secure_url: img } = req.file
    const product = {
        name,
        price,
        quantity,
        description,
        category,
        img,
        craftsman: craftmanID
    }
    const newProduct = await Product.create(product);
    await Craftsman.findByIdAndUpdate(craftmanID, { $push: { product: newProduct._id } }, { new: true });
    res.redirect(`/dashboard/detail/${craftmanID}`);
}

exports.deleteProductGet = async(req, res) => {
    const { productID } = req.params;
    console.log(productID);
    await Product.findByIdAndDelete(productID);
    res.redirect('/dashboard');
}
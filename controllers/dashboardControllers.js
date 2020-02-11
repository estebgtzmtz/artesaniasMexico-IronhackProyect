const Craftsman = require('../models/craftsmanModel');

exports.dashboardGet = async(req, res) => {
    const options = ['Oaxaca', 'Chiapas', 'Tabasco', 'Michoacan', 'Guerrero', 'Yucatan'];
    const craftman = await Craftsman.find({ active: true });
    res.render('dashboard/dashboard', { options, craftman });
};

exports.dashboardPost = async(req, res) => {
    const { name, region } = req.body;
    const newCraftman = {
        name,
        region
    }
    await Craftsman.create(newCraftman);
    res.redirect('/dashboard');
};

exports.dashboardDelete = async(req, res) => {
    const { id } = req.params;
    await Craftsman.findByIdAndDelete(id);
    res.redirect('/dashboard');
}
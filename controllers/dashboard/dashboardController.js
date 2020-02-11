const Crafstman = require('../../models/craftsmanModel');

exports.dashboardGet = (req, res) => {
    const options = ['Oaxaca', 'Chiapas', 'Tabasco', 'Michoacan', 'Guerrero', 'Yucatan'];
    res.render('dashboard/dashboard', { options });
}

exports.dashboardPost = async(req, res) => {
    const { name, region } = req.body;
    const newCraftman = {
        name,
        region
    }
    const craftman = await Crafstman.create({ newCraftman });
    res.redirect('/dashboard');
}
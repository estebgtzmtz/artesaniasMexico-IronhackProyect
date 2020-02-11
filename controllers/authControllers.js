const User = require('../models/userModel');

exports.signupGet = (req, res) => res.render('auth/signup');

exports.signupPost = async(req, res) => {
    const { username, email, password } = req.body;
    const user = await User.register({ username, email }, password);
    const userOnDB = await User.findOne({ email });
    if (userOnDB !== null) {
        res.render('auth/login');
    }
    res.redirect('/login');
}

exports.loginGet = (req, res) => res.render('auth/login');

exports.logout = (req, res) => {
    req.logout();
    res.redirect("/login");
};
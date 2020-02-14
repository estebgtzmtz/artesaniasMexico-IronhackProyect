exports.isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect("/");
    }
};

exports.catchError = fn => (req, res, next) => fn(req, res, next).catch(next);

exports.isAdmin = (req, res, next) => {
    if (req.isAuthenticated() && req.user.role === 'ADMIN') {
        next();
    } else {
        res.redirect('/profile');
    }
};
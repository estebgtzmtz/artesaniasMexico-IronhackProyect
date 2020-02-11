exports.checkRole = role => (req, res, next) => {
    if (req.isAuthenticated() && req.user.role === role) {
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
        res.redirect('/login');
    }
};
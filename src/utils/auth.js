function isAuth(req, res, next) {
    if (req.user) {
        next();
    }else{
        res.redirect("/")
    }
}

function isNoAuth(req, res, next) {
    if (req.user) {
        res.redirect("/dashboard")
    }else{
        next();
    }
}

module.exports = {
    isAuth,
    isNoAuth
}
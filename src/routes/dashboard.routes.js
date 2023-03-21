const { Router } = require('express');
const router = Router();
const {isAuth} = require('../utils/auth')
router.get('/', isAuth, (req, res) => {
    res.render('dashboard');
});

router.get("/perfil", isAuth, (req, res) => {
    res.render("perfil")
})

router.get("/servidores", isAuth, (req, res) => {
    res.render("servidores")
})

router.get("/salir", isAuth, (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
})

module.exports = router;
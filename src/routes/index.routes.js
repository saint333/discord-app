const { Router } = require('express');
const { isNoAuth, isAuth } = require('../utils/auth');
const router = Router();

router.get("/",isNoAuth, (req, res) =>{
    res.render('home')
})

module.exports = router;
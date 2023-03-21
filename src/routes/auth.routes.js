const { Router } = require('express');
const router = Router();
const passport = require("passport");
const { isNoAuth } = require('../utils/auth');

router.get("/login",isNoAuth, passport.authenticate("discord"))

router.get("/redict", passport.authenticate("discord", {
    successRedirect: "/dashboard",
    failureRedirect: "/"
}))

module.exports = router;
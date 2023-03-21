const express = require('express');
const path = require("path");
const session = require("express-session");
const passport = require("passport")
const MongoStore = require("connect-mongo");
const { MONGODB_URI, SECRET } = require('./config');

require("./auth/discordauth")

const app = express();

// settings
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(session({
    secret: SECRET,
    saveUninitialized: false,
    resave: false,
    store: MongoStore.create({
        mongoUrl : MONGODB_URI
    }),
    cookie: {
        maxAge: 86400000
    }
}))
app.use(passport.initialize())
app.use(passport.session())

// global variables
app.use((req, res, next) => {
    app.locals.user = req.user
    next()
})

// Routes 
app.use("/", require("./routes/index.routes"));
app.use("/auth", require("./routes/auth.routes"));
app.use("/dashboard", require("./routes/dashboard.routes"));


module.exports = app;
const {connect, set} = require('mongoose');
set("strictQuery", false)

const {MONGODB_URI} = require("./config")

connect(MONGODB_URI)
    .then(() => console.log("Connect"))
    .catch(err => console.log("Error: " + err))
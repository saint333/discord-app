const app = require('./app')

require("./db")

const {PORT} = require("./config")

app.listen(PORT, function () {
 console.log('Server is running in the port ' + this.address().port)
})
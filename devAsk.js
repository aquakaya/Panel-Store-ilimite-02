const express = require('express');
const app = express();
__path = process.cwd()
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;
   code = require('./commande_panel');
require('events').EventEmitter.defaultMaxListeners = 500;
app.use('/commande_panel',async (req, res, next) => {
res.sendFile(__path + '/commander_panels.html')
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, () => {
    console.log(`
Don't Forget To Give Star

 Server running on http://localhost:` + PORT)
})

module.exports = app
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    http = require('http').Server(app)
    init = require('../backend/init/init'),
    config = require('./config/config'),
    db = require('../backend/database/database')

    /*
        enviar correos
        taraes programadas npm cron
        request
        compress
    */
//init.createUser()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use("/api", require('../backend/routes/index'))

http.listen(config.port, () => {
    console.log(`Server is running in port ${config.port}`);
});
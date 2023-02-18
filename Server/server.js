const express = require('express');
const db = require('./database/database')

const app = express();
const port = process.env.PORT || 5000;

var cors = require('cors');
app.use(cors());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.listen(port, () => { console.log(`Listening on port ${port}`) });

const messagesRoute = require('./routes/messages')

app.use('/messages', messagesRoute)
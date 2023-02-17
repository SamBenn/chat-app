const express = require('express');

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

app.get("/test", (req, res) => {
    console.log("request");
    res.send({message: "this is a test", status: 200});
});

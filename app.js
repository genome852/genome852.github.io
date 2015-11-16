var express = require('express');
var app = express();

app.use(express.static(__dirname));

var port = 3000;
console.log("Express server running on " + port);
app.listen(port);

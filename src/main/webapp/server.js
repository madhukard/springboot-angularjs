var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.listen(process.env.PORT || 8080);

console.log('listening on port ' + (process.env.PORT || 8080));
const express = require('express');
const app = express();

app.get('/', function(req, res) {
	res.end('chat iniciado');
});

app.listen(3000, function() {
	console.log('Server started in port 3000');
});
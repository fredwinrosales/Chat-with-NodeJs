const http = require('http');
const express = require('express');
const app = express();
const morgan = require('morgan');

const server = http.createServer(app);

//Configuración del servidor
app.set('port', 3000);
app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

//Inicialización del servidor
server.listen(app.get('port'), function() {
	console.log('Server started in port 3000');
});

//Lógica del socket
require('./sockets')(server);
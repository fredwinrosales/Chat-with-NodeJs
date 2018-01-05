$(function() {
	//Socket iniciado
	var socket = io();
	
	//Variables
	var message = $('#chat-message');
	var chat = $('#chat');

	$('#message-box').submit(function(e) {
		e.preventDefault();
		socket.emit('client-message', message.val());
	});

	socket.on('client-message', function(data) {
		console.log(data);
	});
});


// Comando para establecer la conexion
var socket = io();
var label = $('#lblNuevoTicket');

socket.on("connect", function() {
    console.log('Conectado');
});

socket.on('estadoActual', function( data ) {
    console.log(data);
    label.text(data.actual);
});

socket.on("disconnect", function() {
    console.log('Desconectado');
});

$('button').on('click', function(){

    socket.emit('siguienteTicket', null , function(ticket) {
        
        label.text(ticket);

    })

});
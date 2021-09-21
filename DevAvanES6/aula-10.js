//EventEmitter - exclusivo do Node

const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('User logged', data =>{
 console.log(data);
});

emitter.emit('User loggeed', { user: 'Karina Fukuda'});
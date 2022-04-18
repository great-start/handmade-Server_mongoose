const EventEmitter = require('events');

const event = new EventEmitter();

const callback = (message, message2) => {
    console.log(`Event on! Hello: ${message}`);
    console.log(`Age - ${message2}`);
};

event.on('Log', callback);

const message = process.env.MESSAGE || '';

event.removeAllListeners();
event.removeListener('Log', callback);

event.emit('Log', message, 39);


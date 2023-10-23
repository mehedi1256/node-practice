var event = require('events');
var eventEmitter = new event.EventEmitter();

//Create an event handler:
var myEventHnadler = function() {
    console.log('Hi! Mehedi Hassan Shovo');
}

//Assign the eventhandler to an event:
/**
 * @param(eventName, callbackfunctionName)
 */
eventEmitter.on('mehedi', myEventHnadler);

//Fire the scream event

eventEmitter.emit('mehedi');
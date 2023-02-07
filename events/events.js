const events = require('events'); //built-in module to handle events

let eventEmitter = new events.EventEmitter(); //all event proporties and methods are an instance of this obj

//create an event handler
function myEventHandler(){
    console.log("I'm handling this like a champ!");
}

//Assign the event handler to the event
eventEmitter.on('my-event', myEventHandler);

//we can 'fire' the event with
eventEmitter.emit('my-event');

//run w/ node events.js
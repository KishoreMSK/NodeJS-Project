const eventEmitter = require('events');

const myEmitter = new eventEmitter()

myEmitter.on('response',() => {
    console.log('data received');
})

myEmitter.on('response', (name,id) => {
    console.log(`Received data with name: ${name} and id: ${id}`);
})

myEmitter.emit('response','Kishore',15)
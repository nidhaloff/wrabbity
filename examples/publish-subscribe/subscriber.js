
var wrabbity = require('../../wrabbity');

async function subscribeSimulator() {

    let r = new wrabbity(rabbitMqServer='amqp://localhost');
    await r.ready;

    const callback = (msg) => {
        console.log(`received this event: ${msg.content.toString()}`);
    }
    r.eventSubscriber(subscriberName="tester", 
    routingKey="test", 
    _eventListener=callback);
}

subscribeSimulator();



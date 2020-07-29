
var wrabbity = require('../../wrabbity');

async function publishSimulator() {

    let r = new wrabbity(rabbitMqServer='amqp://localhost');
    await r.ready;

    r.eventPublisher(publisherName="tester", 
    routingKey="test", 
    message="msg from publisher");
}

publishSimulator();



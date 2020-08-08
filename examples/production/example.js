const wrabbity = require('../../wrabbity');

async function publishEvents(rabbit, publisherName, routingKey, msg) {

    rabbit.eventPublisher(publisherName=publisherName, 
    routingKey=routingKey, 
    message=msg);
}

async function subscribeToEvents(rabbit, subscriberName, routingKey) {

    let callback = (msg) => {
        console.log(`received this event: ${msg.content.toString()}`);
    }

    rabbit.eventSubscriber(subscriberName=subscriberName, 
    routingKey=routingKey, 
    callback=callback);

}

async function productionExample() {

    try {
        let r = new wrabbity(rabbitMqServer='amqp://localhost');
        await r.ready;

    publishEvents(rabbit=r, publisherName='tester', routingKey='test', msg="hello from publisher");
    subscribeToEvents(rabbit=r, subscriberName='tester', routingKey='test');

    }

    catch(err) {
        console.log("error: ", err);
    }
    
}

productionExample().catch(err => {
    console.log(err);
})


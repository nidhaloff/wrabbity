const wrabbity = require('../../wrabbity');


async function receive() {

    let r = new wrabbity(rabbitMqServer='amqp://localhost');
    await r.ready;

    r.receiver(queue="test_queue1", (msg) => {

        console.log("received msg: ", msg.content.toString())
    });
}


receive();
const wrabbity = require('../../wrabbity');


async function ServerSimulator() {

    let r = new wrabbity(rabbitMqServer='amqp://localhost');
    await r.ready; // the magic happens here so that you get straight to make your thing and avoid boilerplate code
    
    //r.taskResponse('test', 'test', 'test_queue', {resp : 'nidhaloff'});
    const payload = "this is the response";

    const callback = (msg, response) => {
        console.log(`msg: ${msg.content.toString()} and response: ${response}`);
        console.log("received request successfully");
    }
    await r.taskResponse(executerName="executer", 
                    routingKey="test", 
                    consumeQueue="test_queue", 
                    response=payload, 
                    callback=callback);
}


ServerSimulator();
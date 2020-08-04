const wrabbity = require('../../wrabbity');


async function send() {

    let r = new wrabbity(rabbitMqServer='amqp://localhost');
    await r.ready; // the magic happens here so that you get straight to make your thing and avoid boilerplate code
    
    //r.taskResponse('test', 'test', 'test_queue', {resp : 'nidhaloff'});
    const payload = "this is the response";

    r.sender(queue='test_queue1', message="msg from sender");
}


send();
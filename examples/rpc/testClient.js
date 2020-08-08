
var wrabbity = require('../../wrabbity');

async function ClientSimulator() {

    let r = new wrabbity(rabbitMqServer='amqp://localhost');
    await r.ready;
    const callback = async (msg, corr) => {
        console.log(`received ${msg.content.toString()} with the coorelation id: ${corr}`);
    }
    
    //r.taskRequest('test', 'test','request from nidhal',r._requestListener);
    await r.taskRequest(executerName="executer", 
                    routingKey="test", 
                    request='request from client', 
                    callback=callback);
}

ClientSimulator();



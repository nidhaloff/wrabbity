
var wrabbity = require('./wrabbity');



/*  (async () => {
    let r = new rabbit();
    await r.ready;

   // r.taskRequest('test', 'test','request from nidhal');
   r.eventPublisher('test', 'test', 'message from publisher');
})();  */ 

async function ClientSimulator() {

    let r = new wrabbity(rabbitMqServer='amqp://localhost');
    await r.ready;
    r._requestListener = (msg, corr) => {
        console.log("request listener overriding");
    }
    r.taskRequest('test', 'test','request from nidhal',r._requestListener);
}

ClientSimulator();



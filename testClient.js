const rabbitMQServer = 'amqp://evallx033.emea.porsche.biz:5672';
const amqp = require('amqplib');
var r = require('./IRabbitMQ');



/*  (async () => {
    let r = new rabbit();
    await r.ready;

   // r.taskRequest('test', 'test','request from nidhal');
   r.eventPublisher('test', 'test', 'message from publisher');
})();  */ 

async function ClientSimulator() {

    //let r = new rabbit();
    await r.ready;
    r._requestListener = (msg, corr) => {
        console.log("request listener überschreiben");
    }
    r.taskRequest('test', 'test','request from nidhal',r._requestListener);
}

ClientSimulator();



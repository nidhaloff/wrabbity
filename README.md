![npm](https://img.shields.io/npm/v/wrabbity)
![npm](https://img.shields.io/npm/dw/wrabbity)
![NPM](https://img.shields.io/npm/l/wrabbity)
[![https://twitter.com/NidhalBaccouri](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&style=plastic)]()
  
A modern simple tool that provides a high level API to work with RabbitMQ

RabbitMQ without headache
==========================

The wrabbity is a wrapper interface for Rabbitmq communication patterns to make it abstracter and easier to use the these in a Complex Project.

The wrabbity package is a RabbitMq Interface on top of amqplib to make implementing RabbitMQ messaging patterns easier. It is very useful especially inside large projects, in which many boilerplate code must be written. 

It uses a parent wrapper class that wrap all connections and classes definitions of different messaging patterns. Furthermore, it uses async/await syntax to improve code readability and to asynchronously orchestrate between multiple subscription and RPCs.

Inspiration
------------

This project is inspired from the python  [**b_rabbit**](https://github.com/nidhaloff/b_rabbit) package, which I created at work. 

Basically, the goal of the project is to provide a high level thread safe API to interface with rabbitmq.

We needed afterwards to switch from python to nodejs and the rest is .. creation of **wrabbity**


Introduction
------------

If you are working on a big complex project, where you are using rabbitmq (or actually any broker), you know the pain of how hard it can get to maintain your code.

In fact, you must write boilerplate code to use AMQP or MQTT patterns like publish-subscribe, rpc, working queues etc.. 

Therefore the wrabbity package is ideal for you since it provide a high level API to write less code and improve readability.

I implemented the library at work and I use it inside projects based on microservices. So feel free to use it and give me any feedback. You can always get in touch with me :)

Why you should use this
------------------------

- Async/await syntax based package
- Stable
- Easy to learn and get to work with
- Extendable
- High level API
- Scalable (since it reuses connection and channels)



Installation
-------------

```javascript
    
    npm install wrabbity
    
```

Getting Started
---------------

My goal is to wrap all rabbitmq patterns in a wrapper, where all work can be organised perfectly within this wrapper. 

For instance, you need to create a wrabbity object inside this "main" function and then just pass the wrabbity object to other functions.

Here is a quick demo

```javascript

    // first require the wrabbity class
    const wrabbity = require('wrabbity.js');

    async function myMainFunction(){ 
        
        const rabbit = new wrabbit('amqp://localhost')
        await rabbit.ready; // here the magic is done in the background

        /*

            Do what you want to do

        */
    }

  
```

**Explanation**: 

I know you are probably confused now. Especially if you are a begineer (like me when I started working with rabbitmq). What I want to tell you is **don't worry**. 

So what is happening above in the code?

- The wrabbity package is required (I assume we all know what this means)
- Wrabbity is implemented async. Hence the `await rabbit.ready` is initializing a connection and channel in the background, which will be reused to save resources and ensure fast messaging.
- Afterwards, you can do everything you want with the rabbit class. You can think about this as your main class, in which all rabbitmq messaging patterns are implemented. For instance, simple send-receive, working queues, publish-subscribe and remote procedure calls (RPC)

Just give it a try. I'm using the library at work, where I develop microservices and I must say I improved the code quality, readability and accelerate the development when I switched to using wrabbity.

> **_NOTE:_**  You don't need to create more than one wrabbity object. The goal of the package is to create just one wrabbity object, which holds the connection and channel that can be reused allover your porject.


Basic Usage
------------

- Send a message:


```javascript

const wrabbity = require('wrabbity');

function send(rabbit, queue, msg) {
    rabbit.sender(queue, msg);
}

function sendAnother(rabbit, queue, msg) {
    rabbit.sender(queue, msg);
}

async function main() {

    let r = new wrabbity(rabbitMqServer='amqp://localhost');
    await r.ready;
    send(r, 'test_queue1', "msg from sender");
    send(r, 'test_queue2', "another msg from sender");
    
}

send();

```

- receive a message:

```javascript

const wrabbity = require('wrabbity');

function receive(rabbit, queue, callback) {
     rabbit.receiver(queue=queue, callback);
}

async function main() {

    let r = new wrabbity(rabbitMqServer='amqp://localhost');
    await r.ready;
    receive(r, "test_queue1", (msg) => {

        console.log("received msg: ", msg.content.toString())
        // do something with the msg ..
    });
   
}

receive();

```

Notice how the wrabbity object is initialized only once in a "main" function and then it is passed to each function where it needs to be used. Reusing the object holding the connection and channel makes the wrabbity package efficient.

> **_NOTE:_**  The sender and receiver are basic usage of rabbitmq messaging patterns, where the sender sends a message to a queue and the receiver connects to the queue and consumes the msg. I recommend you to read further the tutorial https://www.rabbitmq.com/getstarted.html

Usual Usage
------------

- Publisher:

```javascript

    const wrabbity = require('wrabbity');

    function publish(rabbit, publisherName, routingKey, msg) {
            r.eventPublisher(publisherName, 
            routingKey, 
            message);

    }
    async function publishSimulator() {

        let r = new wrabbity(rabbitMqServer='amqp://localhost');
        await r.ready; // the magic is done for you here

        // now it's time to publish a msg to a subscriber through rabbitmq
       publisher(r, "tester", "test", "msg from publisher")

       /*
       you can reuse the wrabbity object and publish as many messages as you need over the same connection and channel which is very efficient
       */
      publisher(r, "tester1", "test1", "msg from publisher1")
      publisher(r, "tester2", "test2", "msg from publisher2")
      publisher(r, "tester3", "test3", "msg from publisher3")

      /*
        Hopefully, you can see now that you need to initialize the wrabbity connection and channel only once and then reuse it all over your project, which I' doing at work too.
      */
    }

    publishSimulator();

```

- You can also use the async syntax for the function:

```javascript

    const wrabbity = require('wrabbity');

    publishSimulator = async () => {

        let r = new wrabbity(rabbitMqServer='amqp://localhost');
        await r.ready; // the magic is done for you here

        // now it's time to publish a msg to a subscriber through rabbitmq
        r.eventPublisher(publisherName="tester", 
        routingKey="test", 
        message="msg from publisher");
    }

    publishSimulator();

```

- Subscriber:

```javascript


const wrabbity = require('wrabbity');

function subscribe(subscriberName, routingKey) {
 let callback = (msg) => {
        console.log(`received this event: ${msg.content.toString()}`);
    }

    rabbit.eventSubscriber(subscriberName, 
    routingKey, 
    callback=callback);

}
async function subscribeSimulator() {

    let r = new wrabbity(rabbitMqServer='amqp://localhost');
    await r.ready;

    // The callback function will be called if the subscriber received a msg. Notice that the function takes the actual msg as an argument in order to let you do what you want with the msg when you consume it. (for example you can store in a database or whatever you want to do..)
   subscribe(r, "tester", "test");

   /*
    you can further reuse the r instance of wrabbity and subscribe to many topics as you want.
   */
}

subscribeSimulator();

```

> **_NOTE:_**  Hopefully, you noticed until now what the wrabbity package is doing. The eventPublisher and eventSubscriber function make it abstracter for you to use the messaging pattern without rewriting much code. Besides, it is faster and efficient since it reuses the connection and channels ;)

Advanced Usage
---------------

- RPC Requester (Client):

The requester or client is a the component responsible for sending a request over rabbitmq and waiting for the response to come from the server (or rpc server). This is somehow an advanced usage but I'm putting an example of it to show you the capabilities of the wrabbity package.

```javascript



const wrabbity = require('wrabbity');

async function ClientSimulator() {

    let r = new wrabbity(rabbitMqServer='amqp://localhost');
    await r.ready;

    // the callback function in the requester must receive the msg (response) and the corr (correlation ID) in order to check if the msg comes from the expected source.
    const callback = async (msg, corr) => {
        console.log(`received ${msg.content.toString()} with the coorelation id: ${corr}`);
    }
    
    // now as always just a one liner to send a request
    await r.taskRequest(executerName="executer", 
                        routingKey="test", 
                        request='request from client', 
                        callback=callback);
}

ClientSimulator();

```

- RPC Responser (Server):

The server is responsible for consuming the client msg from the queue and send back a response based on it.

```javascript

const wrabbity = require('wrabbity');


async function ServerSimulator() {

    let r = new wrabbity(rabbitMqServer='amqp://localhost');
    await r.ready; // the magic happens here so that you get straight to make your thing and avoid boilerplate code
    
    // payload to send back to the client
    const payload = "this is the response";


    const callback = (msg, response) => {
        console.log(`msg: ${msg.content.toString()} | response that will be send back: ${response}`);
        console.log("received request successfully");
    }
    r.taskResponse(executerName="executer", 
                    routingKey="test", 
                    consumeQueue="test_queue", 
                    response=payload, 
                    callback=callback);
}


ServerSimulator();

```
> **_NOTE:_**  As you have seen until now. All rabbitmq messaging patterns are wrapped in a one liner function using the wrabbity package. Pretty easy right?

Design principles
-----------------

Wrabbity is designed to give you the possibility of organizing your code and avoid writing much boilerplate. Furthermore, using the async/await syntax keeps your code readable and clear. You can know what your code is doing from the first sight ;) 

**Example mixing publishing and subscribing**

This example demonstrates how you can publish and subscribe in the same program. You can also use an rpc client and rpc server in the same program or function. This code aims to prove to you how easy and extendable the library is.

```javascript

const wrabbity = require('wrabbity');

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


```

You can see clearly that the wrabbity object is reused by giving it as an argument to other function you want to use. I use this design at work too and I'm happy with the results. 

The encapsulation of the project functionality in one wrapper function gives me a great overview of what my code is doing.

If you have any further question, you can always contact me on twitter or send me an email ;)

Examples
---------

in the examples Folder, testClient and testServer are files for testing the functionality of the wrabbity Interface. testClient represents the Client side
that is responsible to send simple Messages, publish as well subscribe to Events or send Requests and wait for Responses. on the other Side, the Server is responsible 
to receive messages, publish as well subscribe to Events and receive Requests and based of this it will send back Responses.

You can play around with the examples and test the functionality. The examples are divided in three folders, where one folder contains examples for a messaging pattern.

- send and receive
- publish and subscribe
- RPC

Links
-----

Rabbitmq Tutorials

https://www.rabbitmq.com/getstarted.html

Contributions
--------------

Contributions are always welcome. Feel free to make a pull request. I would appreciate it if you star the github repo so that others notice it.

Please let me now if you find the package useful or if you are having any problem understanding what is happening :)

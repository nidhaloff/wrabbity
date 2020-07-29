![npm](https://img.shields.io/npm/v/wrabbity)
![GitHub package.json dynamic](https://img.shields.io/github/package-json/keywords/nidhaloff/wrabbity)
![npm](https://img.shields.io/npm/dm/wrabbity)
![NPM](https://img.shields.io/npm/l/wrabbity)
[![Donate](https://img.shields.io/badge/$-support-ff69b4.svg?style=flat)](https://www.buymeacoffee.com/nidhaloff?new=1)  
[![https://twitter.com/NidhalBaccouri](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&style=plastic)]()
  
**-RabbitMQ without headache:**

The wrabbity is a wrapper interface for Rabbitmq communication patterns to make it abstracter and easier to use the these in a Complex Project.

**-Why you should use this:**
If you are working on a big complex project, where you are using rabbitmq (or actually any broker), you know the pain of how hard it can get to maintain your code.

In fact, you must write boilerplate code to use AMQP or MQTT patterns like publish-subscribe, rpc, working queues etc.. 

Therefore the wrabbity package is ideal for you since it provide a high level API to write less code and improve readability.

I implemented the library at work and I use it inside projects based on microservices. So feel free to use it and give me any feedback. You can always get in touch with me :)

**- Installation:**
    
    `npm install wrabbity`



**- Getting Started:**

    // first require the wrabbity class
     `var rabbit = require(./wrabbity.js);
  

*****the amqp Library is asynchronous implemented, that means
we can use the wrabbity API only inside an async function (examples are in the test files).

Hence, an async function should be created where you want to use the Instance of the Wrabbity class and inside that function*****

    `async function myMainFunction(){ 
        // here call first the ready function that will initialize the connection and channel with rabbitmq:
        var rabbit = wrabbity('your_rabbitmq_host)
        await rabbit.ready; // the magic happens here. All boilerplate code will be managed by wrabbity
        /* 
        all done. now just do what you gotta do, you can access all the goody functions with the rabbit instance ;)
        */
    }`

other examples can be found in testClient.js and testServer.js files



**- Test of Functionality:**

in this Folder, testClient and testServer are files for testing the functionality of the wrabbity Interface. testClient represents the Client side
that is responsible to send simple Messages, publish as well subscribe to Events or send Requests and wait for Responses. on the other Side, the Server is responsible 
to receive messages, publish as well subscribe to Events and receive Requests and based of this it will send back Responses.

**- More Usage Examples**

check the for examples folder to know how to implement messaging patterns.
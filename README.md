**-RabbitMQ Interface for Node JS:**

the Class Wrabbity is a Wrapper class to make it abstracter and easier to use the RabbitMQ Patterns in a Complex Project
please feel free to use it if it match your needs.t

**- Installation:**
    
    `npm install wrabbity`

**- How to use:**

check the testServer and testClients for examples on messaging patterns.

**- Getting Started:**

        // first require the wrabbity class
     `var rabbit = require(./wrabbity.js);
  

*****the amqp Library is asynchronous implemented, that means
we can use the wrabbity API only inside an async function (examples are in the test files).

Hence, an async function should be created where you want to use the Instance of the Wrabbity class and inside that function*****

    `async function myMainFunction(){ 
        // here call first the ready function that will initialize the connection and channel with rabbitmq:
        var rabbit = wrabbity('your_rabbitmq_host)
        await rabbit.ready; // from the rabbit instance call the ready function that will initialize connection and channel
        /* 
        all done. now just do what you gotta do, you can access all the goody functions with the rabbit instance ;)
        */
    }`

other examples can be found in testClient.js and testServer.js files



**- Test of Functionality:**

in this Folder, testClient and testServer are files for testing the functionality of the wrabbity Interface. testClient represents the Client side
that is responsible to send simple Messages, publish as well subscribe to Events or send Requests and wait for Responses. on the other Side, the Server is responsible 
to receive messages, publish as well subscribe to Events and receive Requests and based of this it will send back Responses.

**-RabbitMQ Interface for Node JS:**

the Class IRabbitMQ is a Wrapper class to make it abstracter and easier to use the RabbitMQ Patterns in a Complex Project
please feel free to use it if it match your needs. if someone want to contribute and have an idea to improve it and extend the functionality I ll be happy to work with someone or Team on it

**- How to use:**

just download the file in your Project and run npm install, 
it will automatically install all of the dependecies that are in the package.json file.
after that you need to require the IRabbitMQ.js file where you ll need to use it
( in the files testClient.js and testServer.js there is an example for this)

**- Getting Started:**

First the IRabbitMQ must be required in the same file where you want to use it,
when this is done an Instance of the class will already be created and ready to use

     `var rabbit = require(./IRabbitMQ.js); // this will create an instance of the class IRabbitMQ `
  

*****the amqp Library was asynchronous implemented that means,
we can use the IRabbitMQ Interface only inside an async function (examples are in the test files)
that means an async function should be created where you want to use the Instance of the IRabbitMQ class and inside that function*****

    `async function myMainFunction(){ 
        // here call first the ready function that will initialize the connection and channel with rabbitmq:
        await rabbit.ready; // from the rabbit instance call the ready function that will initialize connection and channel
        /* 
        all done. now just do what you gotta do, you can access all the goody functions with the rabbit instance ;)
        */
    }`

other examples can be found in testClient.js and testServer.js files



**- Test of Functionality:**

in this Folder, testClient and testServer are files for testing the functionality of the IRabbitMQ Interface. testClient represents the Client side
that is responsible to send simple Messages, publish as well subscribe to Events or send Requests and wait for Responses. on the other Side, the Server is responsible 
to receive messages, publish as well subscribe to Events and receive Requests and based of this it will send back Responses.

// Que-3

const { read } = require("fs");
const fs = require("fs");
const data = "Node.js is a platform that utilizes JavaScript and is primarily employed for developing web applications that are highly focused on input/output operations, including but not limited to chat applications and multimedia streaming websites. The platform is constructed using Google Chrome's V8 JavaScript engine. A web application is a type of software that executes on a server and is displayed by a client's browser that obtains all the application's resources over the internet.";
console.log("----READ START----");

fs.writeFileSync("nodejs_architecture.txt", data);
const readData = fs.readFileSync("nodejs_architecture.txt");
console.log(readData.toString());
console.log("----READ END----");

// Que-4

const add_data = "Compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier.";
fs.appendFileSync("nodejs_architecture.txt", add_data);
console.log("----READ START----");
const data2 = fs.readFileSync("nodejs_architecture.txt");
console.log(data2.toString());
console.log("----READ END----");

// Que-5

fs.unlinkSync("nodejs_architecture.txt", function(err){
    if (err) {
        console.log("ERROR IN DELETING FILE");
    } else {
        console.log("File Deleted Successfully");
    }
});

// Que-6

const os = require("os");
console.log("Operating System Name:" + os.type());
console.log("OS Release:" + os.release());

// Que-7

const http = require("http");
const server = http.createServer((req, res) =>{
    if (req.url == "/") {
        res.write("<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>")
    }
    res.end();
});
server.listen(5001);
console.log("This HTTP server is running on port 5001");

// Que-8

const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

const subsMessage = (channelName) => {
  console.log(`Thanks For Subscribing to ${channelName}`);
};
eventEmitter.addListener("subscribe", subsMessage);
eventEmitter.emit("subscribe", "College Wallah");

// Que -9
eventEmitter.removeListener("subscribe", subsMessage);

// Que-10

console.log(`The default maximum number of events listners are:${eventEmitter.getMaxListeners()}`);

eventEmitter.setMaxListeners(5);
console.log(`The updated maximum number of events listners are:${eventEmitter.getMaxListeners()}`);

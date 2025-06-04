//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
//Learn to always put next() when you build your custom middleware and any middle ware 

import express from "express"; //all packages
import { dirname } from "path"; // to get the absolute url when it been hosted on live server, so hat it would display correctly
import { fileURLToPath } from "url"; // same as above, they are together
import bodyParser from "body-parser"; // this give us access to the full details of a client request coming in

const __dirname = dirname(fileURLToPath(import.meta.url)); // to return the absolute url as a rsponse to the request
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true})); // this give us access to the full details of a client request coming in

app.get("/", (req, res) => { // this handles the GET request
    res.sendFile(__dirname + "/public/index.html"); //to get the absolute url when it been hosted on live server, so hat it would display correctly
});

app.post("/check", (req, res) => { // this handles the POST request
    const verification = "ILoveProgramming";
    const password = req.body.password; // accessing the password from the requestbody that came in
    console.log(password); // to see the password on my terminal
    
    if(password === verification){ // verifying the password display the correct output(file)
        res.sendFile(__dirname + "/public/secret.html"); // note: you can only send one response(only one res.send)
    }else{
        res.sendFile(__dirname + "/public/index.html");
    }
});

app.listen(port, () => { //this kickstart the server
    console.log(`Server is running on ${port}`);
});













app.use(logger);

function logger(req, res, next){ // building my own custom logger function
  console.log("request method: " + req.method);
  next();
}
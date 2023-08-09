const http=require("http");   //node js library 
//file call

    const date = require("./MyModule");

const myfunction = (req, res) =>{   //function
    // console.log("hello world");
    // res.send("hello world");
    const dateTime = date();
    res.end(`hello world ${dateTime}`);

};




http.createServer(myfunction).listen(3000); 
console.log("app is running on port3000");




//events - tohandle event 
//fs -tohandle the file system 
//http- to make node js act as an http server
//net - to create server and clints
//path - to handle file paths




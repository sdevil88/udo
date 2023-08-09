// const uc = require("upper-case");



// const string = uc.upperCase("string");


// console.log(string)





const fs = require("fs");
const file = fs.createReadStream("./data.txt");

file.on("open", ()=>{
    console.log("data.txt file is open")
});

//write to file 
const data = "hello  hello hello hello ";
fs.writeFileSync("./data.txt", data);


//add data to file 
fs.appendFileSync("./data.txt",data);



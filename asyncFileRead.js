const {readFile, writeFile} = require("fs");

readFile("content/first.txt","utf-8",(err, result)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(result);
})


writeFile("content/newFileWritten.txt", "Hello", (err, result)=>{
    console.log("The file has been wirtten")
})
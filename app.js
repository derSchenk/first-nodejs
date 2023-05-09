const http = require("http");

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
      res.end("Welcome to our home page");
    }
    if(req.url === "/about"){
        res.end("Here is your requested about page")
    } 
    res.end(
        `
        <h1>Oops the requested site does not exist!</h1>
        <p>Stop</p>
        <a href="/">back home<a>
        `
    )
    
})

server.listen(5000) // listen at Port5000
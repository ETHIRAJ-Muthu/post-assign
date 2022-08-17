import http from 'http'
import url from 'url'
//post 
let database=[]
let user;
http.createServer(function(req,res){
    if (req.method == "post" && req.url == "/create-user"){
        req.setEncoding("utf-8")
        req.on("data", (data)=>{
            user=data;

        });
        req.on("end",()=>{
            database.push(user);
            console.log(user);

        });
        res.end("your datanis stored");

    }
    //get 
    if (req.method == "get" && req.url == "/find-user"){
        res.write(JSON.stringify(database));
        res.end()

    }
}).listen(8080);
console.log("server on");
const http = require('http')
let users = []

http.createServer(function(req,res){
    if(req.method==='GET' && req.url==='/users'){
        res.write("user get")
        res.end();
        if(req.method==='POST' && req.url==='/users/post'){
            let body = ' '

            req.on(body,()=>{
                JSON.stringify(body)
                const newUser = JSON.parse(body)
                

            })
            if(req.method==='PUT' && req.url==='/users/put'){

                if(req.method==='DELETE' && req.url==='/users/delete'){
                   
                }else{
                    
                    console.log("invalid")
                }
            }
        }
    }
}).listen(4000)
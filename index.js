const http = require('http');

const server = http.createServer((req,res)=>{
   res.write('Hello world')
   res.write('<h1>Hello world</h1>')

   res.write(JSON.stringify({Name:"supriya", Course:"MERN"}))
   res.end();
})

server.listen(8000,() =>{
   console.log('App is running')
})
const jsonServer = require('json-server');
const server = jsonServer.create(); //json-server
const route = jsonServer.router("data.json"); //watch
const middlewares = jsonServer.defaults();


server.use(middlewares)
server.use(route)
const port = process.env.PORT || 4000
server.listen(port, ()=>{
    console.log("stoy en linea");
})
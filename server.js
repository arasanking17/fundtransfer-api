var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('fund.json')
var middlewares = jsonServer.defaults()
var port = 8000

server.use(middlewares)
server.use(router)
server.listen(port, () => {
    console.log('JSON Server is running at ', port)
})
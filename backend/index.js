const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const { Socket } = require('socket.io')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server,  {
    cors: { origin: '*' }
})

io.on('conneection', (Socket) => {
    console.log('one client coneected');

    Socket.on('message', (data) => {
        io.emit('messages', data)
        console.log(data);
    })
})


app.get('/', (req,res) => {
    res.send('Hola mundo, esto es un chat')
})
server.listen(4000,() => {
    console.log('server run in the port localhost:4000');
})
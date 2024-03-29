const connectToMongo = require('./db');
const express = require('express');
var { userstate, arrayRemove } = require('./routes/custom');
var cors = require('cors');
var cookieParser = require('cookie-parser');
connectToMongo();
require('dotenv').config();
const app = express();
app.use(express.static(__dirname));
app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(cors({ origin: '*', credentials: true, optionSuccessStatus: 200, }));
app.use(cookieParser());
app.use(express.json())
app.get('/', function (req, res) { res.render('index.html'); });
app.get('/edit/table/', function (req, res) { res.render('table-index.html'); });
app.get('/todo', function (req, res) { res.render('todo/index.html'); });
app.use('/api/auth', require('./routes/auth'))
app.use('/api', require('./routes/api'))
app.use('/poll/api', require('./routes/poll'))
app.use('/task/api', require('./routes/task'))
app.use('/unitconverter/api', require('./routes/unitconverter'))
app.use('/payment/api', require('./routes/payment'))
app.use('/api/exact', require('./routes/exact'))
const http = require("http");
// var http=require('http');
// var url=require('url');
const { Server } = require("socket.io");
const server = http.createServer(app);
// var server=http.createServer(function(req,res){
//     var pathname=url.parse(req.url).pathname;
//     switch(pathname){
//         case '/subpage':
//             res.end('subpage');
//         break;
//         default:
//             res.end('default');
//         break;
//     }

// });
server.listen(process.env.PORT || 7000, () => { console.log(`listening at http://localhost:${process.env.PORT || 7000}`) });
// const host = "http://localhost:3000";
const host = "http://chat.thekoushikdurgas.in";
const io = new Server(server, { cors: { origin: host, methods: ["GET", "POST"], }, });
const userdata = {};
const userdatasockets = {};
var userdataemails = [];
io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);
    socket.on("joinsingleroom", (data) => {
        socket.broadcast.emit("serverusersinglestatus", { status: 'online', user: data });
        userstate(data, 'online');
        userdata[data] = socket.id;
        userdatasockets[socket.id] = data;
        if (!userdataemails.includes(data)) {
            userdataemails.push(data);
        }
    });
    socket.on("sendsinglemessage", (data) => {
        socket.to(userdata[data.user]).emit("receivesinglemessage", data);
        socket.to(userdata[data.contact]).emit("receivesinglemessage", data);
    });
    socket.on('clientusersinglestatus', (data) => {
        userstate(data.user, data.status);
        socket.broadcast.emit("serverusersinglestatus", { status: data.status, user: data.user });
    });
    socket.on('disconnect', (data) => {
        socket.broadcast.emit("serverusersinglestatus", { status: 'offline', user: userdatasockets[socket.id] });
        userstate(userdatasockets[socket.id], 'offline');
        userdataemails = arrayRemove(userdataemails, userdatasockets[socket.id]);
        delete userdata[userdatasockets[socket.id]];
        delete userdatasockets[socket.id];
    });
    socket.on("join_room", (data) => {
        socket.join(data);
    });
    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
    });
});
// app.listen(process.env.PORT || 7000, () => { console.log(`listening at http://localhost:${process.env.PORT || 7000}`) })
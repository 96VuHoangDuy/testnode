const express = require('express');
const { ExpressPeerServer } = require('peer');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home');
});
// const server = require('http').Server(app);
// const io = require('socket.io')(server);

// const http = require('http');

const server = app.listen(4000);
const peerServer = ExpressPeerServer(server, {
  debug: true,
});

peerServer.on('connection', (client) => { 
    console.log('client', client)
 });


app.use('/peerjs', peerServer);


// app.listen(4000 || process.env.PORT, () => console.log('start server'));

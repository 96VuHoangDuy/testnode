const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './Views');
app.use('/static', express.static('public'));

app.get('/', (req, res) => {
  res.render('home');
});
// const server = require('http').Server(app);
// const io = require('socket.io')(server);

app.listen(4000 || process.env.PORT, () => console.log('start server'));

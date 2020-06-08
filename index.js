const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home');
});
// const server = require('http').Server(app);
// const io = require('socket.io')(server);

app.listen(3000 || process.env.PORT, () => console.log('start server'));

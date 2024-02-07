const express = require('express');
const cors = require('cors');
const socketio = require('socket.io');

const app = express();
const port = 5432;

app.use(cors());
app.get('/', (req, res) => {
  res.send('hello world');
});
const server = app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
const io = socketio(server);

io.on('connection', (socket) => {
  console.log('a user connected');
});





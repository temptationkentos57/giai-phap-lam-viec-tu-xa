const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.get('/', (req, res) => {
  res.send('<h1>Ứng dụng Giải Pháp Làm Việc Từ Xa</h1>');
});

io.on('connection', (socket) => {
  console.log('Người dùng đã kết nối: ' + socket.id);

  socket.on('disconnect', () => {
    console.log('Người dùng đã ngắt kết nối: ' + socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Máy chủ đang chạy trên http://localhost:${PORT}`);
});
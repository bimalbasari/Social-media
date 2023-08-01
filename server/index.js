const http = require("http")
const socketIo = require("socket.io")
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const user = require('./routes/user.route');
const event = require('./routes/event.route');
const flat = require('./routes/flat.route');


const PORT = process.env.PORT || 3001;

const users = {};

const app = express();

const server = http.createServer(app);

const io = socketIo(server);

io.on("connection", (socket) => {

  socket.on("register", (data) => {

    users[data?.username] = socket?.id;

    io.emit("userlist", { users: Object.keys(users) });

  });

  socket.on("chat text", (data) => {

    const toUserId = users[data?.toUser];

    io.to(toUserId).emit("chat text", data);

  })

});


app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173',
}));

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/uploads', express.static(__dirname + '/uploads'));

app.use('/api/user', user);

app.use('/api/event', event);

app.use('/api/flat', flat);

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/SocailMedia").then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log('MongoDB connection error:', error.message
  );
});

server.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});

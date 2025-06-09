import { Server } from "socket.io";

const io = new Server(9000, {
    cors: {
        origin: "http://localhost:5173" // match this with your frontend URL
    }
});

let users = [];

const addUser = (userData, socketId) => {
    if (!users.some(user => user.sub === userData.sub)) {
        users.push({ ...userData, socketId });
    }
};

const getUser = (userId) => {
    return users.find(user => user.sub === userId);
};

io.on('connection', (socket) => {
    console.log('user connected:', socket.id);

    socket.on("addUsers", userData => {
        addUser(userData, socket.id); // ✅ FIXED
        io.emit("getUsers", users);
    });

    socket.on('sendMessage', data => {
        const user = getUser(data.receiverId);
        if (user?.socketId) {
            io.to(user.socketId).emit('getMessage', data);
        }
    });

    // Optional: Handle disconnection
    socket.on("disconnect", () => {
        users = users.filter(user => user.socketId !== socket.id);
        io.emit("getUsers", users);
    });
});

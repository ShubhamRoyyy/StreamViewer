export default function registerSocket(io) {

    io.on("connection", (socket) => {

        console.log(`✅ Client Connected (${socket.id})`);

        socket.emit("connected");

        socket.on("disconnect", () => {

            console.log(`❌ Client Disconnected (${socket.id})`);

        });

    });

}
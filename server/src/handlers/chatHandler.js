export function broadcastChat(io, message) {
    io.emit("chatMessage", message);
}
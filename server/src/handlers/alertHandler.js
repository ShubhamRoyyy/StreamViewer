export function broadcastAlert(io, alert) {
    io.emit("alert", alert);
}
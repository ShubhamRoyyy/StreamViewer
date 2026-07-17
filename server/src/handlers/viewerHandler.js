export function broadcastViewers(io, viewers) {
    io.emit("viewerUpdate", viewers);
}
export function broadcastViewers(io, viewers) {
  io.emit("viewers", viewers);
}
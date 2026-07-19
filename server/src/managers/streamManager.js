import { broadcastViewers } from "../handlers/viewerHandler.js";
import { broadcastChat } from "../handlers/chatHandler.js";
import { broadcastAlert } from "../handlers/alertHandler.js";

export default class StreamManager {
  constructor(io) {
    this.io = io;
  }

  sendViewers(viewers) {
    broadcastViewers(this.io, viewers);
  }

  sendChat(message) {
    broadcastChat(this.io, message);
  }

  sendAlert(alert) {
    broadcastAlert(this.io, alert);
  }
}
import { io } from "socket.io-client";

import useStreamStore from "../store/streamStore";

const socket = io("http://192.168.0.163:3001");

socket.on("connect", () => {
  console.log("🟢 Connected to backend");
  useStreamStore.getState().setConnected(true);
});

socket.on("disconnect", () => {
  console.log("⚪ Disconnected from backend");
  useStreamStore.getState().setConnected(false);
});

socket.on("viewers", (viewers) => {
  console.log("📊 Viewer update:", viewers);
  useStreamStore.getState().setViewers(viewers);
});

socket.on("chatMessage", (message) => {
  useStreamStore.getState().addChatMessage(message);
});

socket.on("alert", (alert) => {
  useStreamStore.getState().addAlert(alert);
});

export default socket;
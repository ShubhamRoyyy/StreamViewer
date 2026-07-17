import { io } from "socket.io-client";

import useStreamStore from "../store/streamStore";

const socket = io("http://192.168.0.163:3001", {
    autoConnect: true,
    reconnection: true
});

socket.on("connect", () => {

    console.log("🟢 Connected to backend");

    useStreamStore.getState().setServerConnected(true);

});

socket.on("disconnect", () => {

    console.log("⚪ Disconnected from backend");

    useStreamStore.getState().setServerConnected(false);

});

socket.on("viewerUpdate", (viewers) => {

    useStreamStore.getState().setViewers(viewers);

});

export default socket;
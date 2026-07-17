import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";

import registerSocket from "./socket/socket.js";
import startFakeEvents from "./events/fakeEvents.js";

const app = express();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:5173",
      "http://192.168.0.163:5173",
    ],
    methods: ["GET", "POST"],
  },
});

app.get("/", (req, res) => {
    res.json({
        status: "Stream Companion Backend Running"
    });
});

registerSocket(io);

// Start one global event producer
startFakeEvents(io);

const PORT = 3001;

server.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
import "dotenv/config";

import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";

import appConfig from "./config/app.js";
import registerSocket from "./socket/socket.js";
import { startProviders } from "./managers/providerManager.js";

const app = express();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: [appConfig.frontendUrl],
    methods: ["GET", "POST"],
  },
});

app.get("/", (req, res) => {
  res.json({
    status: "StreamViewer Backend Running",
    environment: appConfig.nodeEnv,
  });
});

registerSocket(io);

startProviders(io);

server.listen(appConfig.port, () => {
  console.log(`🚀 Server running on http://localhost:${appConfig.port}`);
});
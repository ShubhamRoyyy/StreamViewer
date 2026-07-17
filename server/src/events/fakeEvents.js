import { broadcastViewers } from "../handlers/viewerHandler.js";
import { broadcastChat } from "../handlers/chatHandler.js";
import { broadcastAlert } from "../handlers/alertHandler.js";

const users = [
  {
    username: "alex",
    displayName: "Alex",
    profileImage: null,
    badges: {
      broadcaster: false,
      moderator: true,
      vip: false,
      subscriber: true,
      member: false,
      verified: false,
    },
  },
  {
    username: "emma",
    displayName: "Emma",
    profileImage: null,
    badges: {
      broadcaster: false,
      moderator: false,
      vip: false,
      subscriber: true,
      member: true,
      verified: false,
    },
  },
  {
    username: "rahul",
    displayName: "Rahul",
    profileImage: null,
    badges: {
      broadcaster: false,
      moderator: false,
      vip: false,
      subscriber: false,
      member: false,
      verified: false,
    },
  },
  {
    username: "noah",
    displayName: "Noah",
    profileImage: null,
    badges: {
      broadcaster: false,
      moderator: false,
      vip: true,
      subscriber: true,
      member: false,
      verified: false,
    },
  },
  {
    username: "detonictv",
    displayName: "DeTonicTV",
    profileImage: null,
    badges: {
      broadcaster: true,
      moderator: false,
      vip: false,
      subscriber: false,
      member: false,
      verified: true,
    },
  },
  {
    username: "luna",
    displayName: "Luna",
    profileImage: null,
    badges: {
      broadcaster: false,
      moderator: true,
      vip: false,
      subscriber: true,
      member: true,
      verified: false,
    },
  },
];

const twitchMessages = [
  "Pog!",
  "Nice shot!",
  "Huge clutch!",
  "Let's go!",
  "W play!",
  "GG!",
  "Insane aim!",
  "😂",
];

const youtubeMessages = [
  "Amazing stream!",
  "Keep it up!",
  "Hello from YouTube!",
  "Nice gameplay!",
  "🔥🔥🔥",
  "GG!",
  "That was clean!",
  "Subscribed!",
];

const shortsMessages = [
  "First!",
  "❤️❤️❤️",
  "LOL 😂",
  "🔥",
  "W",
  "Bro 💀",
  "No way!",
  "Clipped!",
];

/* ==========================
   Fake Alert Templates
========================== */

const alertUsers = [
  "Alex",
  "Emma",
  "Rahul",
  "Noah",
  "Luna",
  "Kai",
  "DeTonicTV",
];

const twitchAlerts = [
  { type: "follow" },
  { type: "subscribe", tier: 1 },
  { type: "gift_sub", amount: 5 },
  { type: "raid", amount: 32 },
  { type: "cheer", amount: 500 },
];

const youtubeAlerts = [
  { type: "subscribe" },
  { type: "member" },
  { type: "superchat", amount: 10, currency: "USD" },
  { type: "supersticker" },
];

const shortsAlerts = [
  { type: "subscribe" },
];

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/* ==========================
   Chat Simulator
========================== */

function startPlatformChat(io, platform, messages, minDelay, maxDelay) {
  const sendMessage = () => {
    const user = randomItem(users);

    broadcastChat(io, {
      id: crypto.randomUUID(),
      platform,
      username: user.username,
      displayName: user.displayName,
      profileImage: user.profileImage,
      badges: user.badges,
      message: randomItem(messages),
      timestamp: Date.now(),
    });

    const nextDelay =
      Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

    setTimeout(sendMessage, nextDelay);
  };

  sendMessage();
}

/* ==========================
   Alert Simulator
========================== */

function startPlatformAlerts(io, platform, alerts, minDelay, maxDelay) {
  const sendAlert = () => {
    const template = randomItem(alerts);

    broadcastAlert(io, {
      id: crypto.randomUUID(),

      platform,

      username: randomItem(alertUsers),

      timestamp: Date.now(),

      ...template,
    });

    const nextDelay =
      Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

    setTimeout(sendAlert, nextDelay);
  };

  sendAlert();
}

export default function startFakeEvents(io) {
  let viewers = {
    twitch: 18,
    youtube: 42,
    shorts: 91,
  };

  /* Viewer Simulator */

  setInterval(() => {
    viewers = {
      twitch: viewers.twitch + Math.floor(Math.random() * 3),
      youtube: viewers.youtube + Math.floor(Math.random() * 2),
      shorts: viewers.shorts + Math.floor(Math.random() * 5),
    };

    broadcastViewers(io, viewers);
  }, 5000);

  /* Chat Simulators */

  startPlatformChat(io, "twitch", twitchMessages, 1200, 3500);

  startPlatformChat(io, "youtube", youtubeMessages, 1800, 4500);

  startPlatformChat(io, "shorts", shortsMessages, 700, 2500);

  /* Alert Simulators */

  startPlatformAlerts(
    io,
    "twitch",
    twitchAlerts,
    12000,
    25000
  );

  startPlatformAlerts(
    io,
    "youtube",
    youtubeAlerts,
    18000,
    30000
  );

  startPlatformAlerts(
    io,
    "shorts",
    shortsAlerts,
    20000,
    35000
  );
}
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

const shortsAlerts = [{ type: "subscribe" }];

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function startPlatformChat(
  streamManager,
  platform,
  messages,
  minDelay,
  maxDelay
) {
  const sendMessage = () => {
    const user = randomItem(users);

    streamManager.sendChat({
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

function startPlatformAlerts(
  streamManager,
  platform,
  alerts,
  minDelay,
  maxDelay
) {
  const sendAlert = () => {
    const template = randomItem(alerts);

    streamManager.sendAlert({
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

export default function startFakeProvider(streamManager) {
  let viewers = {
    twitch: 18,
    youtube: 42,
    shorts: 91,
  };

  setInterval(() => {
    viewers = {
      twitch: viewers.twitch + Math.floor(Math.random() * 3),
      youtube: viewers.youtube + Math.floor(Math.random() * 2),
      shorts: viewers.shorts + Math.floor(Math.random() * 5),
    };

    streamManager.sendViewers(viewers);
  }, 5000);

  startPlatformChat(
    streamManager,
    "twitch",
    twitchMessages,
    1200,
    3500
  );

  startPlatformChat(
    streamManager,
    "youtube",
    youtubeMessages,
    1800,
    4500
  );

  startPlatformChat(
    streamManager,
    "shorts",
    shortsMessages,
    700,
    2500
  );

  startPlatformAlerts(
    streamManager,
    "twitch",
    twitchAlerts,
    12000,
    25000
  );

  startPlatformAlerts(
    streamManager,
    "youtube",
    youtubeAlerts,
    18000,
    30000
  );

  startPlatformAlerts(
    streamManager,
    "shorts",
    shortsAlerts,
    20000,
    35000
  );
}
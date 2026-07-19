const oauthConfig = {
  twitch: {
    clientId: process.env.TWITCH_CLIENT_ID || "",
    clientSecret: process.env.TWITCH_CLIENT_SECRET || "",
  },

  youtube: {
    clientId: process.env.YOUTUBE_CLIENT_ID || "",
    clientSecret: process.env.YOUTUBE_CLIENT_SECRET || "",
  },

  sessionSecret:
    process.env.SESSION_SECRET || "change_this_before_release",
};

export default oauthConfig;
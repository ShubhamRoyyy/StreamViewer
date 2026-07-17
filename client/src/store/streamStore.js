import { create } from "zustand";

const useStreamStore = create((set) => ({
  serverConnected: false,

  twitchLive: true,
  youtubeLive: true,

  viewers: {
    twitch: 18,
    youtube: 42,
    shorts: 91,
  },

  chat: [
    {
      id: 1,
      platform: "twitch",
      username: "Alex",
      message: "Nice shot!",
    },
    {
      id: 2,
      platform: "youtube",
      username: "Rahul",
      message: "GG!",
    },
    {
      id: 3,
      platform: "shorts",
      username: "Emma",
      message: "LOL 😂",
    },
  ],

  alerts: [],

  setServerConnected: (connected) =>
    set({ serverConnected: connected }),

  setTwitchLive: (live) =>
    set({ twitchLive: live }),

  setYouTubeLive: (live) =>
    set({ youtubeLive: live }),

  setViewers: (viewers) =>
    set({ viewers }),

  addChatMessage: (message) =>
    set((state) => ({
      chat: [...state.chat, message],
    })),
}));

export default useStreamStore;
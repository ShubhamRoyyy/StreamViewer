import { create } from "zustand";

const MAX_CHAT_MESSAGES = 100;
const MAX_ALERTS = 50;

const useStreamStore = create((set) => ({
  connected: false,

  viewers: {
    twitch: 0,
    youtube: 0,
    shorts: 0,
  },

  chatMessages: [],

  alerts: [],

  setConnected: (connected) =>
    set({ connected }),

  setViewers: (viewers) =>
    set({ viewers }),

  addChatMessage: (message) =>
    set((state) => ({
      chatMessages: [
        ...state.chatMessages,
        message,
      ].slice(-MAX_CHAT_MESSAGES),
    })),

  addAlert: (alert) =>
    set((state) => ({
      alerts: [
        ...state.alerts,
        alert,
      ].slice(-MAX_ALERTS),
    })),
}));

export default useStreamStore;
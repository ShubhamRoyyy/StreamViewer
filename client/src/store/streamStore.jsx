import { createContext, useContext, useState } from "react";

const StreamContext = createContext();

export function StreamProvider({ children }) {
  const [streamData, setStreamData] = useState({
    serverConnected: true,

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
  });

  return (
    <StreamContext.Provider
      value={{
        streamData,
        setStreamData,
      }}
    >
      {children}
    </StreamContext.Provider>
  );
}

export function useStream() {
  return useContext(StreamContext);
}
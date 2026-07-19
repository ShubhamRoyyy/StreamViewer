import StreamManager from "./streamManager.js";
import startFakeProvider from "../providers/fake/fakeProvider.js";
import providers from "../config/providers.js";

export function startProviders(io) {
  const streamManager = new StreamManager(io);

  if (providers.fake.enabled) {
    console.log("🟢 Fake Provider Started");
    startFakeProvider(streamManager);
  }

  if (providers.twitch.enabled) {
    console.log("🟣 Twitch Provider Enabled");
  }

  if (providers.youtube.enabled) {
    console.log("🔴 YouTube Provider Enabled");
  }

  if (providers.shorts.enabled) {
    console.log("🟠 YouTube Shorts Provider Enabled");
  }
}
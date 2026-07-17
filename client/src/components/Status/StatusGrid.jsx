import "./StatusGrid.css";

import twitchIcon from "../../assets/icons/twitch.png";
import youtubeIcon from "../../assets/icons/youtube.png";

import useStreamStore from "../../store/streamStore";

function StatusGrid() {
  const twitchLive = useStreamStore(
    (state) => state.twitchLive
  );

  const youtubeLive = useStreamStore(
    (state) => state.youtubeLive
  );

  return (
    <section className="status-grid">
      <div className={`status-card twitch ${twitchLive ? "live" : ""}`}>
        <div className="status-left">
          <img
            src={twitchIcon}
            alt="Twitch"
            className="status-icon"
          />

          <h3>Twitch</h3>
        </div>

        <div className={`live-pill ${twitchLive ? "purple" : "offline"}`}>
          <span className="live-dot"></span>
          {twitchLive ? "LIVE" : "OFFLINE"}
        </div>
      </div>

      <div className={`status-card youtube ${youtubeLive ? "live" : ""}`}>
        <div className="status-left">
          <img
            src={youtubeIcon}
            alt="YouTube"
            className="status-icon"
          />

          <h3>YouTube</h3>
        </div>

        <div className={`live-pill ${youtubeLive ? "red" : "offline"}`}>
          <span className="live-dot"></span>
          {youtubeLive ? "LIVE" : "OFFLINE"}
        </div>
      </div>
    </section>
  );
}

export default StatusGrid;
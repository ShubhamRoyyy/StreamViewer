import "./ViewerGrid.css";

import twitchIcon from "../../assets/icons/twitch.png";
import youtubeIcon from "../../assets/icons/youtube.png";
import shortsIcon from "../../assets/icons/youtube-shorts.png";

import { useStream } from "../../store/streamStore.jsx";

function ViewerGrid() {
  const { streamData } = useStream();

  const twitchViewers = streamData.viewers.twitch;
  const youtubeViewers = streamData.viewers.youtube;
  const shortsViewers = streamData.viewers.shorts;

  return (
    <section className="viewer-grid">
      <div className="viewer-card">
        <img
          src={twitchIcon}
          alt="Twitch"
          className="viewer-icon"
        />

        <span className="viewer-platform">TW</span>

        <h2>{twitchViewers}</h2>

        <p>Viewers</p>
      </div>

      <div className="viewer-card">
        <img
          src={youtubeIcon}
          alt="YouTube"
          className="viewer-icon"
        />

        <span className="viewer-platform">YT</span>

        <h2>{youtubeViewers}</h2>

        <p>Viewers</p>
      </div>

      <div className="viewer-card">
        <img
          src={shortsIcon}
          alt="Shorts"
          className="viewer-icon"
        />

        <span className="viewer-platform">YS</span>

        <h2>{shortsViewers}</h2>

        <p>Viewers</p>
      </div>
    </section>
  );
}

export default ViewerGrid;
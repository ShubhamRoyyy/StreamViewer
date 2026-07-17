import "./ViewerGrid.css";

import twitchIcon from "../../assets/icons/twitch.png";
import youtubeIcon from "../../assets/icons/youtube.png";
import shortsIcon from "../../assets/icons/youtube-shorts.png";

import useStreamStore from "../../store/streamStore";

function ViewerGrid() {
  const viewers = useStreamStore((state) => state.viewers);

  return (
    <section className="viewer-grid">
      <div className="viewer-card">
        <div className="viewer-left">
          <img src={twitchIcon} alt="Twitch" className="viewer-icon" />
          <span className="viewer-platform">TW</span>
        </div>

        <span className="viewer-count">{viewers.twitch}</span>
      </div>

      <div className="viewer-card">
        <div className="viewer-left">
          <img src={youtubeIcon} alt="YouTube" className="viewer-icon" />
          <span className="viewer-platform">YT</span>
        </div>

        <span className="viewer-count">{viewers.youtube}</span>
      </div>

      <div className="viewer-card">
        <div className="viewer-left">
          <img
            src={shortsIcon}
            alt="YouTube Shorts"
            className="viewer-icon"
          />

          <span className="viewer-platform">YS</span>
        </div>

        <span className="viewer-count">{viewers.shorts}</span>
      </div>
    </section>
  );
}

export default ViewerGrid;
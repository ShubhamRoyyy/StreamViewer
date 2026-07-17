import "./StatusGrid.css";

import twitchIcon from "../../assets/icons/twitch.png";
import youtubeIcon from "../../assets/icons/youtube.png";

function StatusGrid() {

    // Later these will come from backend
    const twitchLive = true;
    const youtubeLive = true;

    return (

        <section className="status-grid">

            <div className={`status-card twitch ${twitchLive ? "live" : ""}`}>

                <img
                    src={twitchIcon}
                    alt="Twitch"
                    className="status-icon"
                />

                <div className="status-content">

                    <h3>Twitch</h3>

                    <div className={`live-pill ${twitchLive ? "purple" : "offline"}`}>

                        <span className="live-dot"></span>

                        LIVE

                    </div>

                </div>

            </div>

            <div className={`status-card youtube ${youtubeLive ? "live" : ""}`}>

                <img
                    src={youtubeIcon}
                    alt="YouTube"
                    className="status-icon"
                />

                <div className="status-content">

                    <h3>YouTube</h3>

                    <div className={`live-pill ${youtubeLive ? "red" : "offline"}`}>

                        <span className="live-dot"></span>

                        LIVE

                    </div>

                </div>

            </div>

        </section>

    );

}

export default StatusGrid;
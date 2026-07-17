import "./AlertCard.css";

import twitchLogo from "../../assets/icons/twitch.png";
import youtubeLogo from "../../assets/icons/youtube.png";
import shortsLogo from "../../assets/icons/youtube-shorts.png";

function AlertCard({ alert, currentTime }) {
  function getLogo() {
    switch (alert.platform) {
      case "twitch":
        return twitchLogo;

      case "youtube":
        return youtubeLogo;

      case "shorts":
        return shortsLogo;

      default:
        return twitchLogo;
    }
  }

  function getPlatformName() {
    switch (alert.platform) {
      case "twitch":
        return "Twitch";

      case "youtube":
        return "YouTube";

      case "shorts":
        return "Shorts";

      default:
        return "";
    }
  }

  function getRelativeTime() {
    const seconds = Math.floor(
      (currentTime - alert.timestamp) / 1000
    );

    if (seconds < 5) return "Just now";
    if (seconds < 60) return `${seconds}s ago`;

    const minutes = Math.floor(seconds / 60);

    if (minutes < 60) return `${minutes}m ago`;

    const hours = Math.floor(minutes / 60);

    return `${hours}h ago`;
  }

  function getMessage() {
    switch (alert.type) {
      case "follow":
        return `❤️ ${alert.username} followed`;

      case "subscribe":
        return `⭐ ${alert.username} subscribed`;

      case "member":
        return `⭐ ${alert.username} became a member`;

      case "gift_sub":
        return `🎁 ${alert.username} gifted ${alert.amount} subs`;

      case "raid":
        return `🚀 ${alert.username} raided with ${alert.amount} viewers`;

      case "superchat":
        return `💰 ${alert.username} sent $${alert.amount} ${alert.currency}`;

      case "supersticker":
        return `🎉 ${alert.username} sent a Super Sticker`;

      case "cheer":
        return `💎 ${alert.username} cheered ${alert.amount} bits`;

      default:
        return `${alert.username} ${alert.type}`;
    }
  }

  return (
    <div className={`alert-item ${alert.platform}`}>
      <div className="alert-header">
        <div className="alert-platform">
          <img
            src={getLogo()}
            alt={alert.platform}
            className="alert-logo"
          />

          <span>{getPlatformName()}</span>
        </div>

        <span className="alert-time">
          {getRelativeTime()}
        </span>
      </div>

      <div className="alert-message">
        {getMessage()}
      </div>
    </div>
  );
}

export default AlertCard;
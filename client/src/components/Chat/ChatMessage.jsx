import "./ChatMessage.css";

import twitchIcon from "../../assets/icons/twitch.png";
import youtubeIcon from "../../assets/icons/youtube.png";
import shortsIcon from "../../assets/icons/youtube-shorts.png";

const platformIcons = {
  twitch: twitchIcon,
  youtube: youtubeIcon,
  shorts: shortsIcon,
};

function ChatMessage({ message }) {
  return (
    <div className="chat-message">

      <img
        src={platformIcons[message.platform]}
        alt={message.platform}
        className="chat-platform-icon"
      />

      <span className={`chat-username ${message.platform}`}>
        {message.username}:
      </span>

      <span className="chat-text">
        {message.message}
      </span>

    </div>
  );
}

export default ChatMessage;
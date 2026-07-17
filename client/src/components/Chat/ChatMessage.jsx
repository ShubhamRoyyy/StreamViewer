import "./ChatMessage.css";

import PlatformIcon from "./PlatformIcon";
import BadgeGroup from "./BadgeGroup";

function ChatMessage({ message }) {
  return (
    <div className={`chat-message ${message.platform}`}>
      <div className="chat-header">
        <PlatformIcon platform={message.platform} />

        <span className="chat-username">
          <BadgeGroup badges={message.badges} />
          {message.displayName}
        </span>

        <span className="chat-colon">:</span>

        <span className="chat-text">
          {message.message}
        </span>
      </div>
    </div>
  );
}

export default ChatMessage;
import "./ChatPanel.css";

import { useStream } from "../../store/streamStore.jsx";
import ChatMessage from "./ChatMessage";

function ChatPanel() {
  const { streamData } = useStream();

  return (
    <section className="chat-panel">
      <div className="chat-header">
        <div className="chat-title">
          💬 Live Chat
        </div>

        <div className="merged-feed">
          👥 Merged Feed
          <span>{streamData.chat.length}</span>
        </div>
      </div>

      <div className="chat-body">
        {streamData.chat.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
          />
        ))}
      </div>

      <button className="new-message-btn">
        ↓
        <span>12 New Messages</span>
      </button>
    </section>
  );
}

export default ChatPanel;
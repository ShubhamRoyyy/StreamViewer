import "./ChatPanel.css";

import ChatMessage from "./ChatMessage";

import useStreamStore from "../../store/streamStore";

function ChatPanel() {
  const chat = useStreamStore((state) => state.chat);

  return (
    <section className="chat-panel">
      <div className="chat-header">
        <div className="chat-title">
          💬 Live Chat
        </div>

        <div className="merged-feed">
          👥 Merged Feed
          <span>{chat.length}</span>
        </div>
      </div>

      <div className="chat-body">
        {chat.map((message) => (
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
import { useEffect, useRef } from "react";

import "./ChatPanel.css";

import ChatMessage from "./ChatMessage";

import useStreamStore from "../../store/streamStore";

function ChatPanel() {
  const chat = useStreamStore((state) => state.chatMessages);

  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop =
        chatBodyRef.current.scrollHeight;
    }
  }, [chat]);

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

      <div
        className="chat-body"
        ref={chatBodyRef}
      >
        {chat.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
          />
        ))}
      </div>

      <button className="new-message-btn">
        ↓
        <span>Live Feed</span>
      </button>
    </section>
  );
}

export default ChatPanel;
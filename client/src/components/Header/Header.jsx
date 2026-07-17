import "./Header.css";
import { Gamepad2, Settings } from "lucide-react";

import useStreamStore from "../../store/streamStore";

function Header() {
  const connected = useStreamStore(
    (state) => state.connected
  );

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-box">
          <Gamepad2 size={24} strokeWidth={2.2} />
        </div>

        <h1 className="header-title">
          Stream Companion
        </h1>
      </div>

      <div className="header-right">
        <div
          className={`header-status ${
            connected ? "online" : "offline"
          }`}
        >
          <span className="status-dot"></span>

          {connected ? "Connected" : "Offline"}
        </div>

        <button className="icon-button">
          <Settings size={18} />
        </button>
      </div>
    </header>
  );
}

export default Header;
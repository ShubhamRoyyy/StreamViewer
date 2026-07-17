import "./Header.css";
import { Gamepad2, Settings } from "lucide-react";

import useStreamStore from "../../store/streamStore";

function Header() {
  const serverConnected = useStreamStore(
    (state) => state.serverConnected
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
            serverConnected ? "online" : "offline"
          }`}
        >
          <span className="status-dot"></span>

          {serverConnected ? "Connected" : "Offline"}
        </div>

        <button className="icon-button">
          <Settings size={18} />
        </button>
      </div>
    </header>
  );
}

export default Header;
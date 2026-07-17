import "./Header.css";
import { Gamepad2, Settings } from "lucide-react";

function Header() {
  // Change this later from backend
  const serverConnected = true;

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-box">
          <Gamepad2 size={26} strokeWidth={2.2} />
        </div>

        <div className="title-group">
          <h2>Stream Companion</h2>
        </div>
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
import "./Header.css";
import { Gamepad2, Settings } from "lucide-react";

function Header() {
  return (
    <header className="header">

      <div className="header-left">

        <div className="logo-box">
          <Gamepad2 size={26} strokeWidth={2.2} />
        </div>

        <div className="title-group">
          <h1>Stream Companion</h1>
        </div>

      </div>

      <div className="header-right">

        <div className="status-pill">
          <span className="status-dot"></span>
          <span>Connected</span>
        </div>

        <button className="icon-button">
          <Settings size={18} />
        </button>

        <div className="avatar">
          SC
        </div>

      </div>

    </header>
  );
}

export default Header;
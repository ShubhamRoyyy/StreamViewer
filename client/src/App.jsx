import "./styles/Layout.css";

import Header from "./components/Header/Header";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="app">

      <div className="container">

        <Header />

        <section className="status-grid">

          <Card
            title="Twitch"
            subtitle="LIVE"
            variant="status"
            color="purple"
          />

          <Card
            title="YouTube"
            subtitle="LIVE"
            variant="status"
            color="red"
          />

          <Card
            title="Connected"
            subtitle="LIVE"
            variant="status"
            color="green"
          />

        </section>

        <section className="viewer-grid">

          <Card
            title="TW"
            value="18"
            subtitle="Viewers"
            variant="viewer"
            color="purple"
          />

          <Card
            title="YT"
            value="42"
            subtitle="Viewers"
            variant="viewer"
            color="red"
          />

          <Card
            title="YS"
            value="91"
            subtitle="Viewers"
            variant="viewer"
            color="yellow"
          />

        </section>

        <div className="placeholder chat">
          Live Chat
        </div>

        <div className="placeholder alerts">
          Twitch Alerts
        </div>

        <div className="placeholder alerts">
          YouTube Alerts
        </div>

      </div>

    </div>
  );
}

export default App;
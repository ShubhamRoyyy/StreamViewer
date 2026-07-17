import "./styles/layout.css";

import Header from "./components/Header/Header";
import StatusGrid from "./components/Status/StatusGrid";
import ViewerGrid from "./components/Viewer/ViewerGrid";
import ChatPanel from "./components/Chat/ChatPanel";
import AlertsPanel from "./components/Alerts/AlertsPanel";

function App() {
  return (
    <div className="app">
      <div className="container">

        <Header />

        <StatusGrid />

        <ViewerGrid />

        <ChatPanel />

        <AlertsPanel />

      </div>
    </div>
  );
}

export default App;
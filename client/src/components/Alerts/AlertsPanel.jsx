import { useEffect, useState } from "react";

import "./AlertsPanel.css";

import useStreamStore from "../../store/streamStore";

import AlertCard from "./AlertCard";

function AlertsPanel() {
  const alerts = useStreamStore((state) => state.alerts);

  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="alerts-panel">

      {alerts.length === 0 && (
        <div className="empty-alerts">
          Waiting for alerts...
        </div>
      )}

      {[...alerts]
        .reverse()
        .map((alert) => (
          <AlertCard
            key={alert.id}
            alert={alert}
            currentTime={currentTime}
          />
        ))}

    </div>
  );
}

export default AlertsPanel;
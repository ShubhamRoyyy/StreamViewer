function BadgeGroup({ badges }) {
  if (!badges) return null;

  return (
    <span style={{ marginRight: "4px" }}>
      {badges.broadcaster && "👑 "}
      {badges.moderator && "🛡️ "}
      {badges.vip && "💎 "}
      {badges.subscriber && "⭐ "}
      {badges.member && "❤️ "}
    </span>
  );
}

export default BadgeGroup;
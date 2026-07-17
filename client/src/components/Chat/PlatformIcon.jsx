import twitchLogo from "../../assets/icons/twitch.png";
import youtubeLogo from "../../assets/icons/youtube.png";
import shortsLogo from "../../assets/icons/youtube-shorts.png";

function PlatformIcon({ platform }) {
  let logo;
  let alt;

  switch (platform) {
    case "twitch":
      logo = twitchLogo;
      alt = "Twitch";
      break;

    case "youtube":
      logo = youtubeLogo;
      alt = "YouTube";
      break;

    case "shorts":
      logo = shortsLogo;
      alt = "YouTube Shorts";
      break;

    default:
      return null;
  }

  return (
    <img
      className="platform-icon"
      src={logo}
      alt={alt}
      draggable={false}
    />
  );
}

export default PlatformIcon;
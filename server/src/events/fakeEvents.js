import { broadcastViewers } from "../handlers/viewerHandler.js";

export default function startFakeEvents(io) {

    let viewers = {
        twitch: 18,
        youtube: 42,
        shorts: 91
    };

    setInterval(() => {

        viewers = {
            twitch: viewers.twitch + Math.floor(Math.random() * 3),
            youtube: viewers.youtube + Math.floor(Math.random() * 2),
            shorts: viewers.shorts + Math.floor(Math.random() * 5)
        };

        broadcastViewers(io, viewers);

    }, 5000);

}
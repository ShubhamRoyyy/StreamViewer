import "./styles/layout.css";

import Header from "./components/Header/Header";

import Card from "./components/Common/Card/Card";

import {

Twitch,

Youtube,

Link,

BadgeIndianRupee

} from "lucide-react";

function App(){

return(

<div className="app">

<div className="container">

<Header/>

<div className="grid">

<Card

type="status"

icon={<Twitch size={34}/>}

title="Twitch"

borderColor="#9146FF"

background="linear-gradient(135deg,#121426,#161B2D)"

/>

<Card

type="status"

icon={<Youtube size={34}/>}

title="YouTube"

borderColor="#FF2A2A"

background="linear-gradient(135deg,#231113,#281518)"

/>

<Card

type="status"

icon={<Link size={34}/>}

title="Connected"

borderColor="#2FE45A"

background="linear-gradient(135deg,#142316,#1B2A1F)"

/>

<Card

type="viewer"

icon={<Twitch size={30}/>}

title="TW"

value="18"

subtitle="Viewers"

borderColor="#9146FF"

background="#10131D"

/>

<Card

type="viewer"

icon={<Youtube size={30}/>}

title="YT"

value="42"

subtitle="Viewers"

borderColor="#FF2A2A"

background="#10131D"

/>

<Card

type="viewer"

icon={<BadgeIndianRupee size={30}/>}

title="YS"

value="91"

subtitle="Viewers"

borderColor="#F5A300"

background="#10131D"

/>

</div>

</div>

</div>

);

}

export default App;
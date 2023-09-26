// import "./App.css";
import BgVideo from "../components/BgVideo";
// import ChatBox from "../components/Chat";
import Count from "../components/Count";
import Features from "../components/Features";
import Foooter from "../components/Foooter";
import MapViewVideo from "../components/MapViewVideo";
import Planning from "../components/Planning";
import Slider from "../components/Slider";
import StickyNavbar from "../components/StickyNavbar";
import Swipper from "../components/Swipper";

function App() {
  return (
    <div className="App">
      <StickyNavbar />
      <BgVideo />
      {/* <ChatBox /> */}
      <MapViewVideo />
      <Slider />
      <Features />
      <Swipper />
      <Count />
      <Planning />
      <Foooter />
    </div>
  );
}

export default App;

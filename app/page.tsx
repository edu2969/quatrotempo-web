import { TrackList } from "./components/TrackList";
import { LiveExperience } from "./components/LiveExperience";
import { Connect } from "./components/Connect";
import Escence from "./components/Escence";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="overflow-hidden">      
      <Hero />

      <Escence />

      <TrackList />

      <LiveExperience />

      <Connect />
    </div>
  );
}

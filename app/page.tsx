import { TrackList } from "./components/TrackList";
import { LiveExperience } from "./components/LiveExperience";
import { Connect } from "./components/Connect";
import Escence from "./components/Escence";
import Hero from "./components/Hero";
import UpcomingShows from "./components/UpcomingShows";

export default function Home() {
  return (
    <div className="overflow-hidden">      
      <Hero />

      <Escence />

      <TrackList />

      <UpcomingShows />

      <LiveExperience />

      <Connect />
    </div>
  );
}

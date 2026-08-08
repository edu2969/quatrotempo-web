import Image from "next/image";
import Link from "next/link";
import Reveal from "./components/Reveal";
import BandMembers from "./components/BandMembers";
import { TrackList } from "./components/TrackList";
import { LiveExperience } from "./components/LiveExperience";
import { Connect } from "./components/Connect";
import Escence from "./components/Escence";
import Hero from "./components/Hero";

const experiencias = [
  { 
    titulo: "Rescate Centroamericano",
    descripcion: "En una vuelta caribeña, nos hechamos al hombro el fusíl oxidado y suenan, con sabor a lenguaje Universal",
    tracks: [
      { titulo: "La maza", duracion: "4:12" },
      { titulo: "Medianoche", duracion: "3:48" },
      { titulo: "Cactus", duracion: "5:03" },
      { titulo: "Pequeña serenata diurna", duracion: "4:27" },
    ]
  }, {
    titulo: "Muchileo a la postre",
    descripcion: "Después de años, se desempolva el cuero. Un peine al cabello, nuestros adornos y a volver a soñar.",
    tracks: [
      { titulo: "Muchileo", duracion: "3:56" },
      { titulo: "A la postre", duracion: "4:21" },
      { titulo: "Caminos de tierra", duracion: "5:15" },
      { titulo: "Raíces", duracion: "4:45" },
    ]
  }];
export default function Home() {
  return (
    <div className="overflow-hidden">      
      <Hero />
      
      <Escence />

      <TrackList experiencias={experiencias} />

      <LiveExperience />

      <Connect />
    </div>
  );
}

'use client';

import Link from "next/link";
import Reveal from "./Reveal";
import Image from "next/image";
import { useRef, useState } from "react";

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
      { titulo: "Power momentos", duracion: "3:56" },
      { titulo: "Serpientes", duracion: "4:21" },
      { titulo: "La maza", duracion: "5:15" },
      { titulo: "En claro de la luna", duracion: "4:45" },
    ]
  }
];

// Asumo que los archivos viven en /public/audio/track_i_j.mp3.
// Ajusta esta ruta si tus mp3 están en otra carpeta.
const trackSrc = (i: number, j: number) => `/resources/tracks/track_${i}_${j}.mp3`;

const PlayIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
  </svg>
);

export const TrackList = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  // "i-j" del track actualmente sonando, o null si no hay nada reproduciéndose.
  const [playingId, setPlayingId] = useState<string | null>(null);

  const playTrack = (i: number, j: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    const id = `${i}-${j}`;

    if (playingId === id) {
      audio.pause();
      setPlayingId(null);
      return;
    }

    audio.src = trackSrc(i, j);
    audio.play().catch(() => setPlayingId(null));
    setPlayingId(id);
  };

  if (!experiencias?.length) return null;

  return (
    <>
      {/* Un solo <audio> compartido: solo puede sonar un track a la vez. */}
      <audio ref={audioRef} onEnded={() => setPlayingId(null)} />

      {experiencias.map((exp, i) => (
        <section key={exp.titulo} id={`musica-${i}`} className="relative bg-stone-900 py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
            {/* Cover + play (reproduce el primer track de la experiencia) */}
            <Reveal>
              <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl shadow-2xl shadow-black/50 sm:rounded-3xl lg:max-w-none">
                <Image
                  src={`/resources/experiencia_${String(experiencias.length - i).padStart(3, "0")}.png`}
                  alt={`Álbum Quatrotempo ${i + 1}`}
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-stone-950 via-stone-950/30 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => playTrack(i + 1, 1)}
                    aria-label={playingId === `${i}-1` ? 'Pausar' : 'Reproducir'}
                    aria-pressed={playingId === `${i}-1`}
                    className="pulse-ring relative flex h-16 w-16 items-center justify-center rounded-full bg-amber-400 text-stone-950 shadow-xl transition-transform hover:scale-110 sm:h-20 sm:w-20"
                  >
                    {playingId === `${i}-0` ? (
                      <PauseIcon className="h-7 w-7 sm:h-9 sm:w-9" />
                    ) : (
                      <PlayIcon className="ml-1 h-7 w-7 sm:h-9 sm:w-9" />
                    )}
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                  <p className="font-display text-xl font-bold text-white sm:text-2xl">Raíces · EP 2025</p>
                  <p className="text-xs text-amber-400 sm:text-sm">Nuevo material disponible</p>
                </div>
              </div>
            </Reveal>

            {/* Tracklist */}
            <Reveal delay={150}>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber-400 sm:text-sm sm:tracking-[0.35em]">
                Nuestra Música
              </p>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl lg:text-5xl">
                {exp.titulo}
              </h2>
              <p className="mt-4 text-sm text-stone-400 sm:mt-5 sm:text-base">
                {exp.descripcion}
              </p>

              <ul className="mt-6 divide-y divide-white/10 border-y border-white/10 sm:mt-8">
                {exp.tracks.map((t, j) => {
                  const id = `${i}-${j}`;
                  const isPlaying = playingId === id;
                  return (
                    <li
                      key={t.titulo}
                      className="group flex items-center gap-3 py-3 transition-colors hover:bg-white/5 sm:gap-4 sm:py-4"
                    >
                      <span className="w-5 shrink-0 font-display text-base text-amber-400/80 sm:w-6 sm:text-lg">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <button
                        type="button"
                        onClick={() => playTrack(i + 1, j + 1)}
                        aria-label={isPlaying ? `Pausar ${t.titulo}` : `Reproducir ${t.titulo}`}
                        aria-pressed={isPlaying}
                        className="shrink-0 text-stone-500 transition-colors hover:text-amber-400 focus:outline-none"
                      >
                        {isPlaying ? (
                          <PauseIcon className="h-5 w-5 text-amber-400" />
                        ) : (
                          <PlayIcon className="h-5 w-5 group-hover:text-amber-400" />
                        )}
                      </button>
                      <span className={`flex-1 truncate font-medium ${isPlaying ? 'text-amber-400' : 'text-white'}`}>
                        {t.titulo}
                      </span>
                      <span className="shrink-0 text-xs text-stone-500 sm:text-sm">{t.duracion}</span>
                    </li>
                  );
                })}
              </ul>

              <Link
                href="/media"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-2.5 text-sm font-semibold text-stone-950 transition-all hover:scale-105 hover:bg-amber-300 sm:mt-8 sm:px-7 sm:py-3 sm:text-base"
              >
                Ver todo en Media
              </Link>
            </Reveal>
          </div>
        </section>
      ))}
    </>
  );
};

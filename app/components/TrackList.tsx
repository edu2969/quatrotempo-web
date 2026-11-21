'use client';

import Reveal from "./Reveal";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const experiencias = [
  {
    titulo: "Rescate Centroamericano",
    descripcion: "En una vuelta caribeña, nos hechamos al hombro el fusíl oxidado y suenan, con sabor a lenguaje Universal",
    tracks: [
      { titulo: "La maza", duracion: "4:12", src: undefined },
      { titulo: "Medianoche", duracion: "3:48", src: undefined },
      { titulo: "Cactus", duracion: "5:03", src: undefined },
      { titulo: "Pequeña serenata diurna", duracion: "4:27", src: undefined },
    ]
  }, {
    titulo: "Muchileo a la postre",
    descripcion: "Después de años, se desempolva el cuero. Un peine al cabello, nuestros adornos y a volver a soñar.",
    tracks: [
      { titulo: "Power momentos", duracion: "3:56", src: "/resources/tracks/track_2_1.mp3" },
      { titulo: "Serpientes", duracion: "4:21", src: "/resources/tracks/track_2_2.mp3" },
      { titulo: "La maza", duracion: "5:15", src: "/resources/tracks/track_2_3.mp3" },
      { titulo: "En claro de la luna", duracion: "4:45", src: "/resources/tracks/track_2_4.mp3" },
    ]
  }
];

const availableTracks = experiencias.flatMap((exp, experienceIndex) =>
  exp.tracks.flatMap((track, trackIndex) =>
    track.src ? [{ experienceIndex, trackIndex, src: track.src }] : []
  )
);

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

  const playTrack = (experienceIndex: number, trackIndex: number) => {
    const audio = audioRef.current;
    const track = experiencias[experienceIndex]?.tracks[trackIndex];
    if (!audio || !track?.src) return;

    const id = `${experienceIndex}-${trackIndex}`;

    if (playingId === id) {
      audio.pause();
      setPlayingId(null);
      return;
    }

    audio.src = track.src;
    audio.play().catch(() => setPlayingId(null));
    setPlayingId(id);
  };

  useEffect(() => {
    const playRandomAvailable = () => {
      const randomTrack = availableTracks[Math.floor(Math.random() * availableTracks.length)];
      const audio = audioRef.current;
      if (!randomTrack || !audio) return;

      audio.src = randomTrack.src;
      audio.play().catch(() => setPlayingId(null));
      setPlayingId(`${randomTrack.experienceIndex}-${randomTrack.trackIndex}`);
    };

    window.addEventListener("quatrotempo:play-random", playRandomAvailable);
    return () => window.removeEventListener("quatrotempo:play-random", playRandomAvailable);
  }, []);

  const playNextAvailableTrack = () => {
    if (!playingId) return;

    const [experienceIndex, trackIndex] = playingId.split("-").map(Number);
    const currentAvailableIndex = availableTracks.findIndex(
      (track) => track.experienceIndex === experienceIndex && track.trackIndex === trackIndex
    );

    if (currentAvailableIndex >= 0) {
      const nextTrack = availableTracks[currentAvailableIndex + 1];
      if (nextTrack) {
        playTrack(nextTrack.experienceIndex, nextTrack.trackIndex);
        return;
      }
    }

    setPlayingId(null);
  };

  if (!experiencias?.length) return null;

  return (
    <>
      {/* Un solo <audio> compartido: solo puede sonar un track a la vez. */}
      <audio ref={audioRef} onEnded={playNextAvailableTrack} />

      {experiencias.map((exp, i) => (
        <section
          key={exp.titulo}
          id={`musica-${i}`}
          className="relative isolate bg-cover bg-center bg-fixed px-4 py-12 sm:px-6 sm:py-16"
          style={{ backgroundImage: "url('/resources/background_page.png')" }}
        >
          <div className="absolute inset-0 bg-stone-950/65" />
          <Reveal className="relative z-10 mx-auto aspect-square w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50 sm:rounded-3xl">
            <Image
              src={`/resources/experiencia_${String(experiencias.length - i).padStart(3, "0")}.png`}
              alt={`Álbum Quatrotempo: ${exp.titulo}`}
              fill
              sizes="(min-width: 1024px) 640px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-b from-stone-950/80 via-stone-950/35 to-stone-950/95" />

            <div className="absolute inset-0 flex flex-col p-4 sm:p-8">
              <div className="max-w-[85%]">
                <p className="text-[0.6rem] uppercase tracking-[0.28em] text-amber-400 sm:text-xs sm:tracking-[0.35em]">
                  Nuestra música · Raíces EP 2025
                </p>
                <h2 className="mt-2 font-display text-xl font-bold leading-tight text-white sm:text-3xl">
                  {exp.titulo}
                </h2>
                <p className="mt-2 line-clamp-2 max-w-lg text-xs leading-relaxed text-stone-200 sm:text-sm">
                  {exp.descripcion}
                </p>
              </div>

              <button
                type="button"
                onClick={() => playTrack(i, 0)}
                aria-label={playingId === `${i}-0` ? `Pausar ${exp.titulo}` : `Reproducir ${exp.titulo}`}
                aria-pressed={playingId === `${i}-0`}
                disabled={!exp.tracks[0]?.src}
                className="pulse-ring absolute left-1/2 top-[43%] flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-amber-400 text-stone-950 shadow-xl transition-transform hover:scale-110 disabled:cursor-not-allowed disabled:opacity-50 sm:h-16 sm:w-16"
              >
                {playingId === `${i}-0` ? (
                  <PauseIcon className="h-5 w-5 sm:h-7 sm:w-7" />
                ) : (
                  <PlayIcon className="ml-0.5 h-5 w-5 sm:h-7 sm:w-7" />
                )}
              </button>

              <ul className="mt-auto divide-y divide-white/10 rounded-xl border border-white/10 bg-stone-950/75 px-3 backdrop-blur-md sm:rounded-2xl sm:px-5">
                {exp.tracks.map((t, j) => {
                  const id = `${i}-${j}`;
                  const isPlaying = playingId === id;
                  return (
                    <li key={t.titulo} className="flex items-center gap-2 py-1.5 sm:gap-4 sm:py-2">
                      <span className="w-5 shrink-0 font-display text-xs text-amber-400/80 sm:text-sm">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <button
                        type="button"
                        onClick={() => playTrack(i, j)}
                        aria-label={isPlaying ? `Pausar ${t.titulo}` : `Reproducir ${t.titulo}`}
                        aria-pressed={isPlaying}
                        disabled={!t.src}
                        className="shrink-0 text-stone-400 transition-colors hover:text-amber-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        {isPlaying ? (
                          <PauseIcon className="h-4 w-4 text-amber-400 sm:h-5 sm:w-5" />
                        ) : (
                          <PlayIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                        )}
                      </button>
                      <span className={`flex-1 truncate text-xs font-medium sm:text-sm ${isPlaying ? "text-amber-400" : "text-white"}`}>
                        {t.titulo}
                      </span>
                      <span className="shrink-0 text-[0.65rem] text-stone-400 sm:text-xs">{t.duracion}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </section>
      ))}
    </>
  );
};

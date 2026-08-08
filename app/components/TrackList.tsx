import Link from "next/link";
import Reveal from "./Reveal";
import Image from "next/image";

export const TrackList = ({
    experiencias
}: {
    experiencias: {
        titulo: string;
        descripcion: string;
        tracks: {
            titulo: string;
            duracion: string;
        }[];
    }[]
}) => {
    return experiencias ? experiencias.map((exp, index) => (
        <section id={`musica-${index}`} className="relative bg-stone-900 py-24">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
            {/* Cover + play */}
            <Reveal>
                <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl shadow-black/50">
                    <Image
                        src={`/resources/experiencia_${String(experiencias.length - index).padStart(3, "0")}.png`}
                        alt={`Álbum Quatrotempo ${index + 1}`}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-stone-950 via-stone-950/30 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button
                            aria-label="Reproducir"
                            className="pulse-ring relative flex h-20 w-20 items-center justify-center rounded-full bg-amber-400 text-stone-950 shadow-xl transition-transform hover:scale-110"
                        >
                            <svg className="ml-1 h-9 w-9" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                        </button>
                    </div>
                    <div className="absolute bottom-6 left-6">
                        <p className="font-display text-2xl font-bold text-white">Raíces · EP 2025</p>
                        <p className="text-sm text-amber-400">Nuevo material disponible</p>
                    </div>
                </div>
            </Reveal>

            {/* Tracklist */}
            <Reveal delay={150}>
                <p className="mb-3 text-sm uppercase tracking-[0.35em] text-amber-400">
                    Nuestra Música
                </p>
                <h2 className="font-display text-3xl font-bold text-white sm:text-5xl">
                    {exp.titulo}
                </h2>
                <p className="mt-5 text-stone-400">
                    {exp.descripcion}
                </p>

                <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
                    {exp.tracks.map((t, i) => (
                        <li
                            key={t.titulo}
                            className="group flex items-center gap-4 py-4 transition-colors hover:bg-white/5"
                        >
                            <span className="font-display text-lg text-amber-400/80 w-6">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <svg className="h-5 w-5 text-stone-500 transition-colors group-hover:text-amber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                            <span className="flex-1 font-medium text-white">{t.titulo}</span>
                            <span className="text-sm text-stone-500">{t.duracion}</span>
                        </li>
                    ))}
                </ul>

                <Link
                    href="/media"
                    className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-7 py-3 font-semibold text-stone-950 transition-all hover:scale-105 hover:bg-amber-300"
                >
                    Ver todo en Media
                </Link>
            </Reveal>
        </div>
    </section>)) : <></>;
}
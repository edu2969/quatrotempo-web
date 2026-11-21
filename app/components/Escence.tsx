import Link from "next/link";
import BandMembers from "./BandMembers";
import Reveal from "./Reveal";

const symbols = ["quarter", "eighth", "rest", "treble", "bass"] as const;
const symbolColors = ["#686868", "#747474", "#5f5f5f", "#7b7b7b"];

function MusicRain() {
    return (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            {Array.from({ length: 24 }, (_, i) => {
                const symbol = symbols[i % symbols.length];
                const size = 22 + (i * 13) % 25;

                return (
                    <svg
                        key={i}
                        viewBox="0 0 48 64"
                        className="music-rain-symbol absolute"
                        style={{
                            left: `${(i * 41) % 100}%`,
                            top: `${(i * 53) % 92}%`,
                            width: `${size}px`,
                            height: `${size * 1.3}px`,
                            color: symbolColors[i % symbolColors.length],
                            animationDelay: `${-((i * 2.7) % 24)}s`,
                            animationDuration: `${18 + (i * 7) % 16}s`,
                        }}
                    >
                        {symbol === "quarter" && (
                            <>
                                <path d="M27 50V8" stroke="currentColor" strokeWidth="4" />
                                <ellipse cx="17" cy="53" rx="11" ry="7" transform="rotate(-22 17 53)" fill="currentColor" />
                            </>
                        )}
                        {symbol === "eighth" && (
                            <>
                                <path d="M27 50V8" stroke="currentColor" strokeWidth="4" />
                                <ellipse cx="17" cy="53" rx="11" ry="7" transform="rotate(-22 17 53)" fill="currentColor" />
                                <path d="M29 9c15 3 19 12 12 22-1-8-5-11-12-13" fill="currentColor" />
                            </>
                        )}
                        {symbol === "rest" && (
                            <path
                                d="m27 7-11 17 13 8-12 17 12 8M31 13h.1M16 53h.1"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="5"
                            />
                        )}
                        {symbol === "treble" && (
                            <path
                                d="M28 9c-10-7-17 5-9 12 5 4 14 2 17 8 4 9-5 17-17 15-12-2-10-16-3-22m12-13c-5 13-16 30-15 39 1 8 15 10 20 3 6-9-5-18-15-25"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3.5"
                            />
                        )}
                        {symbol === "bass" && (
                            <>
                                <path
                                    d="M34 10c-13-7-26 4-25 17 1 12 16 17 26 9 9-7 6-17-2-19-6-2-12 2-12 8 0 5 4 8 9 7"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeWidth="4"
                                />
                                <circle cx="38" cy="25" r="2.5" fill="currentColor" />
                                <circle cx="38" cy="34" r="2.5" fill="currentColor" />
                            </>
                        )}
                    </svg>
                );
            })}
        </div>
    );
}

const integrantes = [
    {
        nombre: "Eli",
        bio: "Director, voz principal y guitarras. De sus ideas nacen las temáticas, los arreglos, la banda. El retoño alimentado con la savia del amor por la música.",
        rol: "Voz & Guitarras",
        img: "/resources/eli_002.png",
        instrumentos: ["guitarra.png", "microfono"]
    },
    {
        nombre: "Gerko", rol: "Percusion y ambientales", img: "/resources/gerko_002.png",
        bio: "La experiencia se complementa con sonidos ambientales, percusiones, ritmo y sabor. El recuadro está ahora completo.",
        instrumentos: ["cascada.png", "cricket.png", "bongos.png", "congas.png", "cajon.png"]
    },
    {
        nombre: "Javier", rol: "Guitarras", img: "/resources/javier_002.png",
        bio: "Con precisión y agilidad, las guitarras cantan las melodías principales y son la guinda de la experiencia musical de la banda.",
        instrumentos: ["guitarra_2.png", "tiple.png"]
    },
    {
        nombre: "Eduardo", rol: "Voz & Bajos", img: "/resources/edu_002.png",
        bio: "Para complementar, los bajos y los juegos de voces dan un brillo extra, con danzas y energía, el espectáculo cierra.",
        instrumentos: ["ubass.png", "bajo.png", "microfono"]
    },
];

export default function Escence() {
    return (<section id="esencia" className="relative isolate overflow-hidden bg-[#111111] py-24">
        <MusicRain />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-3xl text-center">
                <p className="mb-3 text-sm uppercase tracking-[0.35em] text-amber-400">
                    Nuestra Esencia
                </p>
                <h2 className="font-display text-3xl font-bold text-white sm:text-5xl">
                    Cuatro tiempos, una misma raíz
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-stone-400">
                    QuatroTempo son cuatro integrantes espacidos en las décadas, que combinan en sus emociones musicales,
                    la eterna búsqueda entre las armonías y compaces.
                </p>
            </Reveal>

            {/* Integrantes (interactivo) */}
            <Reveal className="mt-16">
                <BandMembers integrantes={integrantes} />
            </Reveal>

            <Reveal className="mt-14 text-center" delay={200}>
                <Link
                    href="/somos"
                    className="inline-flex items-center gap-2 text-amber-400 transition-colors hover:text-amber-300"
                >
                    Conoce a la banda completa
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
            </Reveal>
        </div>
    </section>)
}
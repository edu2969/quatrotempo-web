import Link from "next/link";
import BandMembers from "./BandMembers";
import Reveal from "./Reveal";



const integrantes = [
    {
        nombre: "Eli",
        bio: "Director, voz principal y guitarras. De sus ideas nacen las temáticas, los arreglos, la banda. El retoño alimentado con la savia del amor por la música.",
        rol: "Voz & Guitarras",
        img: "/resources/eli_002.png",
        instrumentos: ["guitarra.png"]
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
        instrumentos: ["ubass.png", "bajo.png"]
    },
];

export default function Escence() {
    return (<section id="esencia" className="relative bg-stone-950 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
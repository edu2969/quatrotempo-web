import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-screen min-h-160 w-full">
            <Image
                src="/resources/header_02.jpeg"
                alt="Quatrotempo en vivo"
                fill
                priority
                className="object-cover hero-zoom"
            />
            {/* Overlays */}
            <div className="absolute inset-0 bg-linear-to-b from-stone-950/70 via-stone-950/50 to-stone-950" />
            <div className="absolute inset-0 bg-linear-to-r from-stone-950/80 via-transparent to-transparent" />

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
                <p className="animate-fade-in mb-4 text-xs uppercase tracking-[0.45em] text-amber-400 sm:text-sm">
                    Un viaje acústico, latino, para el mundo.
                </p>

                <h1 className="animate-fade-in font-display text-4xl font-bold leading-[0.95] text-white drop-shadow-2xl sm:text-6xl md:text-7xl lg:text-8xl">
                    EL RITMO QUE
                    <br />
                    UNE <span className="text-shimmer">PASAJEROS</span>
                </h1>

                <p className="animate-fade-in mt-6 max-w-2xl text-base text-stone-300 sm:text-lg md:text-xl">
                    Cuatro músicos, por una travesía de rincones y paisajes.
                </p>

                {/* Equalizer */}
                <div className="mt-8 flex h-10 items-end gap-1.5">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <span
                            key={i}
                            className="eq-bar"
                            style={{ animationDelay: `${i * 0.12}s`, animationDuration: `${0.8 + (i % 4) * 0.2}s` }}
                        />
                    ))}
                </div>

                <div className="animate-fade-in mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link
                        href="/media"
                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-8 py-3.5 font-semibold text-stone-950 shadow-lg shadow-amber-500/30 transition-all hover:scale-105 hover:bg-amber-300"
                    >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                        Escuchar Ahora
                    </Link>
                    <Link
                        href="/contacto"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-400/60 px-8 py-3.5 font-semibold text-white backdrop-blur-sm transition-all hover:border-amber-400 hover:bg-amber-400/10 hover:text-amber-300"
                    >
                        Próximos Shows
                    </Link>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
                <div className="flex h-10 w-6 justify-center rounded-full border-2 border-stone-400/60 p-1.5">
                    <span className="scroll-dot h-1.5 w-1.5 rounded-full bg-amber-400" />
                </div>
            </div>
        </section>
    );
}
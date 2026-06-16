import Image from "next/image";
import Link from "next/link";
import Reveal from "./components/Reveal";

const integrantes = [
  { nombre: "Eliecer Celedrón", rol: "Voz & Guitarras", img: "/resources/integrante_1.png" },
  { nombre: "Gerk", rol: "Percusion y ambientales", img: "/resources/integrante_2.png" },
  { nombre: "Javier", rol: "Guitarras", img: "/resources/integrante_3.png" },
  { nombre: "Eduardo", rol: "Voz & Bajos", img: "/resources/integrante_4.png" },
];

const tracks = [
  { titulo: "Raíz y Trueno", duracion: "4:12" },
  { titulo: "Camino al Sur", duracion: "3:48" },
  { titulo: "Cordillera", duracion: "5:03" },
  { titulo: "El Ritmo que Une", duracion: "4:27" },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* ============ HERO ============ */}
      <section className="relative h-screen min-h-160 w-full">
        <Image
          src="/resources/header_01.png"
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
            El alma del Folk Rock
          </p>

          <h1 className="animate-fade-in font-display text-4xl font-bold leading-[0.95] text-white drop-shadow-2xl sm:text-6xl md:text-7xl lg:text-8xl">
            EL RITMO QUE
            <br />
            UNE <span className="text-shimmer">TIEMPOS</span>
          </h1>

          <p className="animate-fade-in mt-6 max-w-2xl text-base text-stone-300 sm:text-lg md:text-xl">
            Donde la raíz vibra con energía en el ahora. Cuatro músicos, un viaje
            sonoro por la América que late en cada acorde.
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

      {/* ============ NUESTRA ESENCIA ============ */}
      <section id="esencia" className="relative bg-stone-950 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-amber-400">
              Nuestra Esencia
            </p>
            <h2 className="font-display text-3xl font-bold text-white sm:text-5xl">
              Cuatro tiempos, una misma raíz
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-stone-400">
              Quatrotempo nace del cruce entre la tradición folclórica latinoamericana
              y la fuerza del rock. Rescatamos historias, paisajes y memorias para
              transformarlas en canciones que viajan por el tiempo.
            </p>
          </Reveal>

          {/* Integrantes */}
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {integrantes.map((m, i) => (
              <Reveal key={m.nombre} delay={i * 120} className="group flex flex-col items-center text-center">
                <div className="pulse-ring relative h-32 w-32 sm:h-40 sm:w-40">
                  <div className="relative h-full w-full overflow-hidden rounded-full ring-2 ring-amber-500/30 transition-all duration-500 group-hover:ring-amber-400">
                    <Image
                      src={m.img}
                      alt={m.nombre}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {m.nombre}
                </h3>
                <p className="text-sm text-amber-400">{m.rol}</p>
              </Reveal>
            ))}
          </div>

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
      </section>

      {/* ============ NUESTRA MÚSICA ============ */}
      <section id="musica" className="relative bg-stone-900 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          {/* Cover + play */}
          <Reveal>
            <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl shadow-black/50">
              <Image
                src="/resources/header_01.png"
                alt="Álbum Quatrotempo"
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
              Escucha el latido de la cordillera
            </h2>
            <p className="mt-5 text-stone-400">
              Composiciones que mezclan charango, guitarras eléctricas y percusión
              ancestral. Te invitamos a sentir cada tiempo.
            </p>

            <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
              {tracks.map((t, i) => (
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
      </section>

      {/* ============ EXPERIENCIA EN VIVO ============ */}
      <section
        id="vivo"
        className="relative flex min-h-[70vh] items-center justify-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/resources/background_page.png')" }}
      >
        <div className="absolute inset-0 bg-stone-950/75" />
        <Reveal className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-amber-400">
            En Vivo
          </p>
          <h2 className="font-display text-4xl font-bold text-white sm:text-6xl">
            Vive la experiencia en vivo
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-300">
            No hay nada como sentir la música en persona. Conoce nuestras próximas
            fechas y súbete a este viaje sonoro.
          </p>
          <Link
            href="/contacto"
            className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-amber-400 px-8 py-3.5 font-semibold text-amber-400 transition-all hover:bg-amber-400 hover:text-stone-950"
          >
            Reserva tu lugar
          </Link>
        </Reveal>
      </section>

      {/* ============ CONECTA + SÚMATE ============ */}
      <section id="conecta" className="relative bg-stone-950 py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-amber-400">
              Conecta con Nosotros
            </p>
            <h2 className="font-display text-3xl font-bold text-white sm:text-5xl">
              Súmate a la familia Quatrotempo
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-400">
              Síguenos, comparte y mantente al día con cada novedad, ensayo y concierto.
              Tu energía también hace sonar esta banda.
            </p>
          </Reveal>

          <Reveal delay={150} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/media"
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-6 text-left transition-all hover:-translate-y-1 hover:border-amber-400/40 sm:w-64"
            >
              <span className="font-display text-xl font-semibold text-white">Media</span>
              <p className="mt-1 text-sm text-stone-400">Fotos, videos y momentos del backstage.</p>
            </Link>
            <Link
              href="/somos"
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-6 text-left transition-all hover:-translate-y-1 hover:border-amber-400/40 sm:w-64"
            >
              <span className="font-display text-xl font-semibold text-white">Somos</span>
              <p className="mt-1 text-sm text-stone-400">Conoce la historia de cada integrante.</p>
            </Link>
            <Link
              href="/contacto"
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-6 text-left transition-all hover:-translate-y-1 hover:border-amber-400/40 sm:w-64"
            >
              <span className="font-display text-xl font-semibold text-white">Contacto</span>
              <p className="mt-1 text-sm text-stone-400">Escríbenos para shows y colaboraciones.</p>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

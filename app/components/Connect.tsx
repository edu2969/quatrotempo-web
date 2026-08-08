import Link from "next/link";
import Reveal from "./Reveal";

export function Connect() {
    return (      <section id="conecta" className="relative bg-stone-950 py-24">
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
      </section>)
}
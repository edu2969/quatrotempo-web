import { Link } from "lucide-react";
import Reveal from "./Reveal";

export function LiveExperience() {
    return (      <section
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
      </section>)
};
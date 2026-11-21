import Reveal from "./Reveal";
import TalcahuanoParallax from "./TalcahuanoParallax";

const shows = [
  {
    dateTime: "2026-12-12T16:00:00-03:00",
    date: "12 de diciembre de 2026",
    time: "16:00",
    venue: "Pasaje 256, Santa Marta",
    location: "Talcahuano",
    description:
      "Ven y comparte con nosotros una muestra abierta para amenizar la tarde con acústica, junto a los vecinos.",
  },
  {
    dateTime: "2026-12-16T17:00:00-03:00",
    date: "16 de diciembre de 2026",
    time: "17:00",
    venue: "Junta de Vecinos N.° 60",
    location: "Villa Santa Marta, Las Dalias, Villa Talcahuano · Santa Marta 3773",
    description:
      "Celebran su aniversario con un espacio de música único. Ven a cantar y bailar con nosotros.",
  },
];

const TreasureMap = () => (
  <svg
    viewBox="0 0 360 500"
    className="h-full w-full"
    aria-hidden="true"
    preserveAspectRatio="xMidYMid slice"
  >
    <rect width="360" height="500" fill="#d8c394" />
    <rect x="12" y="12" width="336" height="476" rx="8" fill="none" stroke="#8c7048" strokeOpacity=".55" />
    <path
      d="M18 120c35-30 70 12 103-8s65-25 95 5 61 19 89-4 40-8 43 2M17 449c38-19 71-14 103 4s67 21 100-1 69-24 103-5 24 11 28 3"
      fill="none"
      stroke="#a78b5d"
      strokeOpacity=".48"
      strokeWidth="2"
    />
    <path
      d="M35 236c16-65 61-99 111-86s62 44 108 34 71-47 93-23 18 58-4 84c-19 23-45 26-55 59s-42 57-79 44-58-44-99-31-69-27-75-81Z"
      fill="#c6ad7a"
      stroke="#92764a"
      strokeOpacity=".7"
      strokeWidth="2"
    />
    <path
      d="M63 420c17-44 66-55 74-91s-19-53 4-84 64-24 82-55 10-56 49-91"
      fill="none"
      stroke="#745c3a"
      strokeDasharray="3 10"
      strokeLinecap="round"
      strokeWidth="4"
    />
    <circle cx="63" cy="420" r="7" fill="#745c3a" />
    <g transform="translate(272 99)" fill="none" stroke="#745c3a" strokeLinecap="round" strokeLinejoin="round">
      <circle r="28" strokeOpacity=".65" />
      <path d="m0-22 5 22-5 22-5-22 5-22Zm-22 22 22-5 22 5-22 5-22-5Z" fill="#a78b5d" fillOpacity=".55" />
      <circle r="3" fill="#745c3a" />
    </g>
    <text x="272" y="57" textAnchor="middle" fill="#745c3a" fontSize="12" fontFamily="serif" letterSpacing="3">N</text>
    <g transform="translate(252 190)">
      <circle r="24" fill="#d8c394" fillOpacity=".8" stroke="#745c3a" strokeOpacity=".7" />
      <path d="M-15-15 15 15M15-15-15 15" stroke="#8f372f" strokeLinecap="round" strokeWidth="5" />
      <path d="M-7 9h14v9H-7zM-9 5h18l-2 5H-7z" fill="#8f372f" stroke="#6d3028" strokeWidth="1.5" />
    </g>
    <text x="28" y="55" fill="#745c3a" fontSize="11" fontFamily="serif" letterSpacing="2">RUTA DEL TESORO</text>
    <path d="M28 64h128" stroke="#8c7048" strokeOpacity=".65" />
    <circle cx="178" cy="295" r="3" fill="#8f372f" fillOpacity=".7" />
    <circle cx="124" cy="347" r="3" fill="#8f372f" fillOpacity=".7" />
  </svg>
);

export default function UpcomingShows() {
  return (
    <section id="shows" className="relative isolate scroll-mt-20 overflow-hidden bg-stone-950 py-16 sm:py-24">
      <TalcahuanoParallax />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-linear-to-b from-stone-950/80 via-stone-950/55 to-stone-950/85" />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_top,rgba(180,83,9,0.12),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-amber-400 sm:text-sm">
            Música en vivo
          </p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-5xl">
            Próximos shows
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-stone-400 sm:text-base">
            Dos encuentros para compartir música, barrio y una tarde distinta.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {shows.map((show, index) => (
            <Reveal key={show.dateTime} delay={index * 120}>
              <article className="grid h-full overflow-hidden rounded-2xl border border-amber-500/15 bg-stone-900 shadow-xl shadow-black/20 sm:rounded-3xl md:grid-cols-[1.05fr_.95fr]">
                <div className="flex flex-col p-6 sm:p-8">
                  <p className="text-xs uppercase tracking-[0.25em] text-amber-400">
                    Encuentro {String(index + 1).padStart(2, "0")}
                  </p>
                  <time
                    dateTime={show.dateTime}
                    className="mt-3 font-display text-2xl font-bold leading-tight text-white sm:text-3xl"
                  >
                    {show.date}
                  </time>
                  <p className="mt-2 text-sm font-semibold text-amber-300">
                    A las {show.time} hrs
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-stone-300">
                    {show.description}
                  </p>
                  <address className="mt-auto pt-6 not-italic">
                    <p className="font-semibold text-white">{show.venue}</p>
                    <p className="mt-1 text-sm leading-relaxed text-stone-400">{show.location}</p>
                  </address>
                </div>
                <div className="relative min-h-48 overflow-hidden border-t border-amber-500/15 md:min-h-full md:border-l md:border-t-0">
                  <TreasureMap />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-stone-950/10 via-transparent to-white/10" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

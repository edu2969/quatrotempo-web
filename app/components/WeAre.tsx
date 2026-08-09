import Image from "next/image";

const integrantes = [
  {
    id: 1,
    nombre: "Javier",
    instrumento: "Guitarra",
    imagen: "/resources/javier_001.jpeg",
    descripcion: "Todo es melodías entonces, que se alínean como hilos de sonidos tejiendo el ambiente acogedor, relajante, reflexivo. Los muebles cantan."
  },
  {
    id: 2,
    nombre: "Gerko",
    instrumento: "Percusiones",
    imagen: "/resources/gerko_001.jpeg",
    descripcion: "Se marca el ritmo de la marcha, coreada el alba junto al campo e intrumentos en madera y hierros de la tierra."
  },
  {
    id: 3,
    nombre: "Eli",
    instrumento: "Voz y Guitarras",
    imagen: "/resources/eli_001.jpeg",
    descripcion: "Desde ya hace sus años, los jinetes se encontraron, esos que calbangan la vida al ritmo de andar despacio, llenos de anhelos, recuerdos y ansias."
  },
  {
    id: 4,
    nombre: "Eduardo",
    instrumento: "Voz y bajos",
    imagen: "/resources/eduardo_001.jpeg",
    descripcion: "Para eso estamos, para jugar a la música. Vibramos, bailamos, creamos, porque nos mueve. Somos Quatro Tempo."
  }
];

function IntegranteImagen({ integrante }: { integrante: (typeof integrantes)[number] }) {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full min-h-[280px] overflow-hidden rounded-2xl shadow-2xl sm:min-h-[320px] lg:min-h-[360px]">
      <Image
        src={integrante.imagen}
        alt={integrante.nombre}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="mb-1 text-2xl font-bold text-white">{integrante.nombre}</h3>
        <p className="font-medium text-yellow-400">{integrante.instrumento}</p>
      </div>
    </div>
  );
}

function IntegranteContenido({ integrante }: { integrante: (typeof integrantes)[number] }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
      <h3 className="mb-2 text-2xl font-bold text-yellow-400 sm:text-3xl">{integrante.nombre}</h3>
      <p className="mb-4 text-base font-medium text-yellow-300 sm:mb-6 sm:text-lg">{integrante.instrumento}</p>
      <p className="text-base leading-relaxed text-gray-300 sm:text-lg">{integrante.descripcion}</p>
    </div>
  );
}

export default function WeAre() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-scroll bg-no-repeat py-16 lg:bg-fixed"
      style={{ backgroundImage: "url('/resources/bg-2.jpg')" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-5xl font-bold text-yellow-400 md:text-6xl">
            SOMOS QUATROTEMPO
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            Les presento a los artistas que dan forma a ésta experiencia.
          </p>
        </div>

        {/* Integrantes:
            - Mobile (<lg): cada integrante 100% vertical -> imagen arriba, tarjeta de texto abajo.
              Sin zigzag, sin reversa, un solo orden de arriba hacia abajo.
            - Desktop (lg+): zigzag alternado lado a lado, igual que antes. */}
        <div className="space-y-12 lg:space-y-16">
          {integrantes.map((integrante, index) => {
            const reverseOnDesktop = index % 2 === 1;
            return (
              <div key={integrante.id} className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12">
                <div className={`lg:w-1/2 ${reverseOnDesktop ? 'lg:order-2' : 'lg:order-1'}`}>
                  <IntegranteImagen integrante={integrante} />
                </div>
                <div className={`lg:w-1/2 ${reverseOnDesktop ? 'lg:order-1' : 'lg:order-2'}`}>
                  <IntegranteContenido integrante={integrante} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="rounded-2xl border border-yellow-400/30 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 p-8">
            <h2 className="mb-4 text-3xl font-bold text-yellow-400">
              ¿Quieres saber más sobre nosotros?
            </h2>
            <p className="mb-6 text-lg text-gray-300">
              Síguenos en nuestras redes sociales y mantente al día con nuestras últimas novedades.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/media"
                className="rounded-lg bg-yellow-400 px-8 py-3 font-semibold text-black transition-colors hover:bg-yellow-300"
              >
                Ver nuestro contenido
              </a>
              <a
                href="/contacto"
                className="rounded-lg border border-yellow-400 px-8 py-3 font-semibold text-yellow-400 transition-colors hover:bg-yellow-400 hover:text-black"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

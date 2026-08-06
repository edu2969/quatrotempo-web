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

export default function Somos() {
  return (
    <div
      className="min-h-screen py-16 bg-cover bg-center bg-fixed bg-no-repeat"
      style={{ backgroundImage: "url('/resources/bg-2.jpg')" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-6">
            SOMOS QUATROTEMPO
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Les presento a los artistas que dan forma a ésta experiencia.
          </p>
        </div>

        {/* Integrantes Grid */}
        <div className="space-y-16">
          {integrantes.map((integrante, index) => (
            <div
              key={integrante.id}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
            >
              {/* Imagen */}
              <div className="lg:w-1/2">
                <div className="relative w-full mx-auto aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={integrante.imagen}
                    alt={integrante.nombre}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {integrante.nombre}
                    </h3>
                    <p className="text-yellow-400 font-medium">
                      {integrante.instrumento}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contenido */}
              <div className="lg:w-1/2 space-y-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <h3 className="text-3xl font-bold text-yellow-400 mb-2">
                    {integrante.nombre}
                  </h3>
                  <p className="text-yellow-300 text-lg font-medium mb-6">
                    {integrante.instrumento}
                  </p>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {integrante.descripcion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-2xl p-8 border border-yellow-400/30">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              ¿Quieres saber más sobre nosotros?
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Síguenos en nuestras redes sociales y mantente al día con nuestras últimas novedades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/media"
                className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Ver nuestro contenido
              </a>
              <a
                href="/contacto"
                className="border border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-colors"
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
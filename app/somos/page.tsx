import Image from "next/image";

const integrantes = [
  {
    id: 1,
    nombre: "Alex Rodríguez",
    instrumento: "Guitarra Principal",
    imagen: "/resources/integrante1.png",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: 2,
    nombre: "María González",
    instrumento: "Batería",
    imagen: "/resources/integrante2.png",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
  },
  {
    id: 3,
    nombre: "Carlos Mendoza",
    instrumento: "Bajo",
    imagen: "/resources/integrante3.png",
    descripcion: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
  },
  {
    id: 4,
    nombre: "Ana Silva",
    instrumento: "Voz Principal",
    imagen: "/resources/integrante4.png",
    descripcion: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis."
  }
];

export default function Somos() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-6">
            SOMOS QUATROTEMPO
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conoce a los artistas que dan vida a nuestra música y hacen posible 
            cada una de nuestras presentaciones.
          </p>
        </div>

        {/* Integrantes Grid */}
        <div className="space-y-16">
          {integrantes.map((integrante, index) => (
            <div
              key={integrante.id}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Imagen */}
              <div className="lg:w-1/2">
                <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={integrante.imagen}
                    alt={integrante.nombre}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
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
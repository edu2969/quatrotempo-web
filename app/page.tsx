import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header Image Full Width */}
      <div className="relative w-full h-screen">
        <Image
          src="/resources/header_01.png"
          alt="Quatrotempo - Header"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-yellow-400">
              QUATRO TEMPO
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Banda Musical - Folklore Latinoamericano
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative bg-black/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8 text-yellow-400">
              Bienvenidos a Quatro Tempo
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Una experiencia de selección musical latinoamericana hecha con un propósito,
              viajar por el tiempo, por distintas regiones de nuestra América, y rescatar de
              allí, una historia musical.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Nuestra Música</h3>
              <p className="text-gray-300">
                Explora nuestros últimos trabajos. Te invitamos a sentir la energía de nuestras composiciones.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Los Integrantes</h3>
              <p className="text-gray-300">
                Conoce a los músicos. Ellos dan vida a este proyecto, cada cual con su aderezo musical distintivo.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Conecta</h3>
              <p className="text-gray-300">
                Síguenos en nuestras redes sociales y mantente al día con nuestras novedades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

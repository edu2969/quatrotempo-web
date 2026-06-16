'use client';

import Image from 'next/image';
import { useState } from 'react';

export interface Integrante {
  nombre: string;
  rol: string;
  img: string;
  bio: string;
  instrumentos: string[];
}

const instrumentoLabels: Record<string, string> = {
  'guitarra.png': 'Guitarra',
  'guitarra_2.png': 'Guitarra',
  'tiple.png': 'Tiple',
  'ubass.png': 'U-Bass',
  'bajo.png': 'Bajo',
  'cascada.png': 'Cascada',
  'cajon.png': 'Cajón',
  'congas.png': 'Congas',
  'cricket.png': 'Cricket',
  'bongos.png': 'Bongos',
};

export default function BandMembers({ integrantes }: { integrantes: Integrante[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = integrantes[activeIndex] ?? integrantes[0];

  return (
    <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-stretch lg:gap-16">
      {/* ---------- Detalle del integrante activo ---------- */}
      <div className="flex-1">
        <div
          key={active.nombre}
          className="flex animate-[fade-up_0.45s_ease] flex-col items-center gap-8 sm:flex-row sm:items-start sm:text-left"
        >
          {/* Círculo destacado */}
          <div className="pulse-ring relative h-44 w-44 shrink-0 sm:h-52 sm:w-52">
            <div className="relative h-full w-full overflow-hidden rounded-full ring-4 ring-amber-400 shadow-2xl shadow-amber-500/20">
              <Image
                src={active.img}
                alt={active.nombre}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Bio + instrumentos */}
          <div className="min-w-0 flex-1 text-center sm:text-left">
            <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
              {active.nombre}
            </h3>
            <p className="mt-1 text-amber-400">{active.rol}</p>
            <p className="mt-4 leading-relaxed text-stone-300">{active.bio}</p>

            <div className="mt-6">
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-stone-500">
                Instrumentos
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:justify-start">
                {active.instrumentos.map((inst) => (
                  <div key={inst} className="flex w-20 flex-col items-center gap-2">
                    <div className="relative h-16 w-16 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                      <Image
                        src={`/resources/instrumentos/${inst}`}
                        alt={instrumentoLabels[inst] ?? inst}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <span className="text-center text-xs leading-tight text-stone-400">
                      {instrumentoLabels[inst] ?? inst}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Selector de círculos ---------- */}
      <div className="flex flex-row items-center justify-center gap-5 lg:flex-col lg:justify-center lg:border-l lg:border-white/10 lg:pl-12">
        {integrantes.map((m, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={m.nombre}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-pressed={isActive}
              aria-label={`Ver a ${m.nombre}`}
              className="group flex flex-col items-center gap-2 focus:outline-none"
            >
              <div
                className={`relative overflow-hidden rounded-full transition-all duration-500 ease-out ${
                  isActive
                    ? 'h-20 w-20 ring-4 ring-amber-400 shadow-lg shadow-amber-500/30'
                    : 'h-14 w-14 opacity-60 ring-2 ring-white/20 group-hover:opacity-100 group-hover:ring-amber-400/60'
                }`}
              >
                <Image src={m.img} alt={m.nombre} fill className="object-cover" />
              </div>
              <span
                className={`max-w-20 truncate text-xs font-medium transition-colors duration-300 ${
                  isActive ? 'text-amber-400' : 'text-stone-500 group-hover:text-stone-300'
                }`}
              >
                {m.nombre}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

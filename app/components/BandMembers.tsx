'use client';

import Image from 'next/image';
import { Fragment, useState } from 'react';

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
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (i: number) =>
    setActiveIndex((current) => (current === i ? null : i));

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-10 sm:gap-x-8">
      {integrantes.map((m, i) => {
        const isActive = i === activeIndex;
        return (
          <Fragment key={m.nombre}>
            {/* ---------- Círculo ---------- */}
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-pressed={isActive}
              aria-label={`${isActive ? 'Ocultar' : 'Ver'} la bio de ${m.nombre}`}
              className="group flex shrink-0 flex-col items-center gap-3 focus:outline-none"
            >
              <div
                className={`pulse-ring relative overflow-hidden rounded-full transition-all duration-500 ease-out ${
                  isActive
                    ? 'h-40 w-40 ring-4 ring-amber-400 shadow-2xl shadow-amber-500/20 sm:h-44 sm:w-44'
                    : 'h-24 w-24 opacity-60 ring-2 ring-white/15 group-hover:opacity-100 group-hover:ring-amber-400/60 sm:h-28 sm:w-28'
                }`}
              >
                <Image
                  src={m.img}
                  alt={m.nombre}
                  fill
                  sizes={isActive ? '11rem' : '7rem'}
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3
                  className={`font-display font-semibold text-white transition-all duration-300 ${
                    isActive ? 'text-lg' : 'text-sm text-stone-300'
                  }`}
                >
                  {m.nombre}
                </h3>
                <p
                  className={`transition-all duration-300 ${
                    isActive ? 'text-sm text-amber-400' : 'text-xs text-amber-400/70'
                  }`}
                >
                  {m.rol}
                </p>
              </div>
            </button>

            {/* ---------- Panel: bio + instrumentos (a la derecha del activo) ---------- */}
            {isActive && (
              <div
                key={`panel-${m.nombre}`}
                className="flex animate-[fade-up_0.45s_ease] basis-full flex-col items-center gap-6 sm:basis-auto sm:flex-row sm:items-center sm:text-left"
              >
                {/* Bio (ancho acotado) */}
                <p className="max-w-xs text-center text-sm leading-relaxed text-stone-300 sm:text-left">
                  {m.bio}
                </p>

                {/* Instrumentos (sin bordes, fondo transparente) */}
                <div className="flex flex-wrap items-end justify-center gap-4">
                  {m.instrumentos.map((inst) => (
                    <div key={inst} className="flex w-16 flex-col items-center gap-1.5">
                      <div className="relative h-16 w-16">
                        <Image
                          src={`/resources/instrumentos/${inst}`}
                          alt={instrumentoLabels[inst] ?? inst}
                          fill
                          sizes="4rem"
                          className="object-contain"
                        />
                      </div>
                      <span className="text-center text-xs leading-tight text-stone-400">
                        {instrumentoLabels[inst] ?? inst}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}

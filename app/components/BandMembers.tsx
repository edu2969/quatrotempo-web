'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
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
  microfono: 'Voces Principal & Coros',
};

function MemberCircle({
  m,
  isActive,
  onClick,
}: {
  m: Integrante;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      aria-label={`Ver la bio de ${m.nombre}`}
      animate={{ opacity: isActive ? 1 : 0.72 }}
      whileHover={{ opacity: 1, scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group flex min-w-0 flex-col items-center gap-2 rounded-xl px-1 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
    >
      <motion.div
        animate={{
          filter: isActive ? 'grayscale(0%)' : 'grayscale(100%)',
          scale: isActive ? 1 : 0.94,
        }}
        transition={{ duration: 0.45, ease: 'easeInOut' }}
        className={`relative h-14 w-14 overflow-hidden rounded-full ring-2 transition-shadow sm:h-20 sm:w-20 xl:h-24 xl:w-24 ${
          isActive
            ? 'ring-amber-400 shadow-lg shadow-amber-500/20'
            : 'ring-white/20 group-hover:ring-amber-400/60'
        }`}
      >
        <Image
          src={m.img}
          alt={m.nombre}
          fill
          sizes="(min-width: 1024px) 6rem, (min-width: 640px) 5rem, 3.5rem"
          className="object-cover"
        />
      </motion.div>

      <div className="w-full text-center">
        <h3 className={`truncate font-display text-xs font-semibold transition-colors sm:text-sm ${isActive ? 'text-white' : 'text-stone-400'}`}>
          {m.nombre}
        </h3>
        <p className={`line-clamp-2 min-h-7 text-[0.55rem] leading-tight transition-colors sm:min-h-9 sm:text-xs ${isActive ? 'text-amber-400' : 'text-amber-400/60'}`}>
          {m.rol}
        </p>
      </div>
    </motion.button>
  );
}

export default function BandMembers({ integrantes }: { integrantes: Integrante[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMember = integrantes[activeIndex] ?? integrantes[0] ?? null;

  return (
    <div className="grid w-full grid-cols-1 items-center gap-8 py-4 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.4fr)] lg:gap-12">
      <div className="grid w-full grid-cols-4 gap-1 sm:gap-2">
        {integrantes.map((m, i) => (
          <MemberCircle
            key={m.nombre}
            m={m}
            isActive={activeIndex === i}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {activeMember && (
          <motion.div
            key={`panel-${activeMember.nombre}`}
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="grid w-full grid-cols-1 items-center gap-5 rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-5 sm:grid-cols-[2fr_3fr] sm:gap-6 sm:px-6 sm:py-6 lg:px-8"
          >
            <div className="flex items-center justify-center px-3 py-2 text-center sm:px-5 lg:px-7">
              <p className="text-base leading-relaxed text-stone-300 sm:text-lg">
                {activeMember.bio}
              </p>
            </div>

            <div className="grid max-h-52 grid-cols-3 place-items-center gap-x-3 gap-y-3 overflow-y-auto sm:max-h-64 sm:gap-x-4">
              {activeMember.instrumentos.map((inst) => (
                <div key={inst} className={`flex ${inst === 'microfono' ? 'w-20' : 'w-16'} flex-col items-center gap-1.5`}>
                  <div className="relative h-14 w-14">
                    {inst === 'microfono' ? (
                      <svg
                        viewBox="0 0 48 48"
                        className="h-full w-full p-2 text-stone-300"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        aria-hidden="true"
                      >
                        <rect x="18" y="5" width="12" height="23" rx="6" />
                        <path d="M12 22v2a12 12 0 0 0 24 0v-2M24 36v7M18 43h12" />
                        <path d="M21 12h6M21 17h6M21 22h6" stroke="#fbbf24" />
                      </svg>
                    ) : (
                      <Image
                        src={`/resources/instrumentos/${inst}`}
                        alt={instrumentoLabels[inst] ?? inst}
                        fill
                        sizes="3.5rem"
                        className="object-contain"
                      />
                    )}
                  </div>
                  <span className="text-center text-xs leading-tight text-stone-400">
                    {instrumentoLabels[inst] ?? inst}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

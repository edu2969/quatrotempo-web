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
};

// Curva bezier personalizada para el desplazamiento de los íconos
// (ease-in-out marcado, se siente "intencional" en vez de lineal).
const moveEase: [number, number, number, number] = [0.65, 0, 0.35, 1];

type Variant = 'row' | 'compact' | 'active';

function MemberCircle({
  m,
  variant,
  burstKey,
  onClick,
}: {
  m: Integrante;
  variant: Variant;
  burstKey: number;
  onClick: () => void;
}) {
  const isActive = variant === 'active';
  const isCompact = variant === 'compact';

  const circleSize = isActive
    ? 'h-40 w-40 sm:h-44 sm:w-44'
    : isCompact
      ? 'h-14 w-14'
      : 'h-24 w-24 sm:h-28 sm:w-28';

  return (
    <motion.button
      layout
      transition={{ duration: 0.6, ease: moveEase }}
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      aria-label={`${isActive ? 'Ocultar' : 'Ver'} la bio de ${m.nombre}`}
      className="group flex shrink-0 flex-col items-center gap-2 focus:outline-none"
    >
      <motion.div layout transition={{ duration: 0.6, ease: moveEase }} className="relative">
        {/* Aro que se expande desde el borde y se desvanece al seleccionar */}
        <AnimatePresence>
          {isActive && (
            <motion.span
              key={`ring-${burstKey}`}
              className="pointer-events-none absolute inset-0 rounded-full border-2 border-amber-400"
              initial={{ scale: 1, opacity: 0.9 }}
              animate={{ scale: 1.5, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            />
          )}
        </AnimatePresence>

        <motion.div
          layout
          transition={{ duration: 0.5, ease: moveEase }}
          className={`relative overflow-hidden rounded-full transition-opacity duration-500 ease-out ${circleSize} ${
            isActive
              ? 'ring-4 ring-amber-400 shadow-2xl shadow-amber-500/20'
              : isCompact
                ? 'opacity-70 ring-2 ring-white/15 group-hover:opacity-100 group-hover:ring-amber-400/60'
                : 'opacity-60 ring-2 ring-white/15 group-hover:opacity-100 group-hover:ring-amber-400/60'
          }`}
        >
          <Image
            src={m.img}
            alt={m.nombre}
            fill
            sizes={isActive ? '11rem' : isCompact ? '3.5rem' : '7rem'}
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      {!isCompact && (
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
      )}
    </motion.button>
  );
}

export default function BandMembers({ integrantes }: { integrantes: Integrante[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  // Se incrementa en cada click para forzar que el aro de selección
  // vuelva a montarse (y por lo tanto a re-animarse) aunque el índice
  // activo no cambie de valor entre dos clicks distintos.
  const [burstKey, setBurstKey] = useState(0);

  const toggle = (i: number) => {
    setActiveIndex((current) => (current === i ? null : i));
    setBurstKey((k) => k + 1);
  };

  const hasActive = activeIndex !== null;
  const activeMember = hasActive ? integrantes[activeIndex as number] : null;

  return (
    // En mobile: columna (íconos arriba, panel abajo). Desde sm: fila, todo en línea.
    // La altura fija (h-72/h-80) solo aplica desde sm — en mobile el contenido se
    // apila y necesita alto variable, así que se deja auto con padding en su lugar.
    <div className="flex flex-col items-center gap-8 py-4 sm:h-80 sm:flex-row sm:justify-center sm:gap-0 sm:py-0">
      <motion.div
        layout
        transition={{ duration: 0.6, ease: moveEase }}
        className={`flex items-center justify-center ${hasActive ? 'gap-6 sm:justify-start sm:gap-8' : 'gap-x-6 sm:gap-x-8'}`}
      >
        {/* ---------- Columna de inactivos, apilados en vertical y pequeños ---------- */}
        {hasActive && (
          <motion.div layout transition={{ duration: 0.6, ease: moveEase }} className="flex flex-col items-center gap-3">
            {integrantes.map(
              (m, i) =>
                i !== activeIndex && (
                  <MemberCircle key={m.nombre} m={m} variant="compact" burstKey={burstKey} onClick={() => toggle(i)} />
                ),
            )}
          </motion.div>
        )}

        {/* ---------- Fila centrada: se muestra solo cuando nada está activo ---------- */}
        {!hasActive &&
          integrantes.map((m, i) => (
            <MemberCircle key={m.nombre} m={m} variant="row" burstKey={burstKey} onClick={() => toggle(i)} />
          ))}

        {/* ---------- Activo: grande, junto a la columna ---------- */}
        {hasActive && activeMember && (
          <MemberCircle
            key={activeMember.nombre}
            m={activeMember}
            variant="active"
            burstKey={burstKey}
            onClick={() => toggle(activeIndex as number)}
          />
        )}
      </motion.div>

      {/* ---------- Panel: bio + instrumentos, fade in/out ----------
          Mobile: ancho completo, apilado (bio arriba, instrumentos abajo).
          Desde sm: al costado del grupo de íconos, bio e instrumentos lado a lado. */}
      <AnimatePresence mode="wait">
        {hasActive && activeMember && (
          <motion.div
            key={`panel-${activeMember.nombre}`}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: moveEase }}
            className="grid w-full grid-cols-1 gap-6 sm:h-56 sm:w-auto sm:flex-1 sm:grid-cols-[2fr_3fr]"
          >
            {/* Bio: en mobile ocupa todo el ancho arriba; desde sm, 2/5 del panel */}
            <div className="no-scrollbar flex max-h-40 items-center justify-center overflow-y-auto px-2 text-center sm:h-full sm:max-h-none">
              <p className="text-sm leading-relaxed text-stone-300">{activeMember.bio}</p>
            </div>

            {/* Instrumentos: en mobile ocupa todo el ancho abajo; desde sm, 3/5 del panel */}
            <div className="no-scrollbar grid max-h-52 grid-cols-3 place-items-center gap-x-4 gap-y-3 overflow-y-auto sm:h-full sm:max-h-none">
              {activeMember.instrumentos.map((inst) => (
                <div key={inst} className="flex w-16 flex-col items-center gap-1.5">
                  <div className="relative h-14 w-14">
                    <Image
                      src={`/resources/instrumentos/${inst}`}
                      alt={instrumentoLabels[inst] ?? inst}
                      fill
                      sizes="3.5rem"
                      className="object-contain"
                    />
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

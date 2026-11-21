'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

export default function TalcahuanoParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const reduceMotion = useReducedMotion();
  const distantY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-18, 18]);
  const harborY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-42, 42]);
  const waterY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-78, 78]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[linear-gradient(180deg,#17232e_0%,#263842_50%,#101b21_100%)]"
    >
      <motion.div style={{ y: distantY }} className="absolute -inset-y-6 inset-x-0 opacity-45">
        <svg viewBox="0 0 1440 620" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
          <path
            d="M0 335 85 290l75 22 107-91 84 54 116-93 99 92 96-48 103 83 92-58 91 71 121-92 111 75 82-33 98 62v286H0Z"
            fill="#52616a"
            fillOpacity=".42"
          />
          <path
            d="M0 389c132-39 212-18 336-54s198-2 302-30 215 26 321-9 183-16 291-35 132 5 190 24v335H0Z"
            fill="#293941"
            fillOpacity=".8"
          />
          <path d="M0 437c207-31 305 16 462-10s278-3 424-22 339-30 554 5v210H0Z" fill="#1d2b32" />
          <g fill="#e2bb83" fillOpacity=".32">
            <circle cx="158" cy="382" r="2" />
            <circle cx="173" cy="379" r="2" />
            <circle cx="527" cy="372" r="2" />
            <circle cx="541" cy="367" r="2" />
            <circle cx="1193" cy="368" r="2" />
            <circle cx="1210" cy="365" r="2" />
          </g>
        </svg>
      </motion.div>

      <motion.div style={{ y: harborY }} className="absolute -inset-y-14 inset-x-0 opacity-55">
        <svg viewBox="0 0 1440 620" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
          <path d="M0 444h1440v176H0Z" fill="#17262d" />
          <g fill="#1a282d" stroke="#718087" strokeOpacity=".35" strokeWidth="3">
            <path d="M112 443V286h16v-62h8v62h16v157Zm26-157h54v157h-54Zm-41 157v-43h150v43Zm301 0V319h22v-79h9v79h26v124Zm56-124h73v124h-73Zm-30 124v-35h189v35Zm572 0V335h26v-91h10v91h24v108Zm60-108h70v108h-70Zm-33 108v-32h165v32Z" />
            <path d="M167 314h22v11h-22Zm0 24h22v11h-22Zm303 7h30v12h-30Zm0 27h30v12h-30Zm616-3h30v12h-30Zm0 27h30v12h-30Z" fill="#d2a56d" fillOpacity=".35" stroke="none" />
          </g>
          <g fill="none" stroke="#9ba5a4" strokeOpacity=".55" strokeWidth="5">
            <path d="M238 441V266h190m-162 0v-72m156 72v-95m-186 95 192-104m-164 104 161-79" />
            <path d="M1198 441V247h194m-154 0v-82m133 82v-106m-173 106 174-102m-136 102 135-76" />
          </g>
          <g>
            <path d="M690 448c35-109 132-167 232-167s196 58 234 167l30 28H657Z" fill="#26353a" stroke="#9b8870" strokeOpacity=".55" strokeWidth="4" />
            <path d="M730 435c37-77 108-118 192-118s156 41 194 118" fill="none" stroke="#d2b58a" strokeOpacity=".34" strokeWidth="5" />
            <path d="M704 448h450v28H675Z" fill="#1b292e" />
            <path d="M833 414h180v34H833Z" fill="#142126" />
            <text x="923" y="440" textAnchor="middle" fill="#d4b68a" fillOpacity=".66" fontSize="17" fontFamily="serif" letterSpacing="5">LA TORTUGA</text>
          </g>
        </svg>
      </motion.div>

      <motion.div style={{ y: waterY }} className="absolute -inset-y-24 inset-x-0 opacity-65">
        <svg viewBox="0 0 1440 620" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
          <path d="M0 447c129-22 225 28 358 6s206-30 339-8 221 28 348 4 260-14 395 7v164H0Z" fill="#10232b" fillOpacity=".9" />
          <path d="M0 486c139-18 243 24 375 6s229-17 356 4 237 20 357 1 232-10 352 12" fill="none" stroke="#9bb0b0" strokeOpacity=".19" strokeWidth="3" />
          <path d="M0 541c151-19 272 19 414 4s224-8 356 8 247 11 367-3 207-7 303 5" fill="none" stroke="#b8c5c1" strokeOpacity=".13" strokeWidth="2" />
          <g fill="#101b20" stroke="#bd9a68" strokeOpacity=".58" strokeWidth="3">
            <g transform="translate(168 435)">
              <path d="M0 42h180l-25 34H30Z" />
              <path d="M54 10h75v32H54Z" />
              <path d="M70 10V-13h34v23" />
              <path d="M89-13v-34" fill="none" />
              <path d="M78 20h12v10H78Zm22 0h12v10h-12Z" fill="#d5aa70" fillOpacity=".45" stroke="none" />
            </g>
            <g transform="translate(617 458) scale(.72)">
              <path d="M0 42h180l-25 34H30Z" />
              <path d="M54 10h75v32H54Z" />
              <path d="M70 10V-13h34v23M89-13v-34" fill="none" />
              <path d="M78 20h12v10H78Zm22 0h12v10h-12Z" fill="#d5aa70" fillOpacity=".45" stroke="none" />
            </g>
            <g transform="translate(1060 432) scale(.9)">
              <path d="M0 42h180l-25 34H30Z" />
              <path d="M54 10h75v32H54Z" />
              <path d="M70 10V-13h34v23M89-13v-34" fill="none" />
              <path d="M78 20h12v10H78Zm22 0h12v10h-12Z" fill="#d5aa70" fillOpacity=".45" stroke="none" />
            </g>
          </g>
        </svg>
      </motion.div>
    </div>
  );
}

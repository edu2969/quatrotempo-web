'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  /** Retraso de la animación en ms */
  delay?: number;
  className?: string;
  /** Etiqueta HTML a renderizar (por defecto div) */
  as?: 'div' | 'section' | 'li' | 'article';
}

/**
 * Envuelve contenido y lo revela con una animación suave cuando entra
 * en el viewport, usando IntersectionObserver.
 */
export default function Reveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // @ts-expect-error ref type varies por tag pero es válido en runtime
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

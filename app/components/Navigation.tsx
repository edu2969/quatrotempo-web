'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'INICIO', href: '/' },
  { name: 'SOMOS', href: '/somos' },
  { name: 'MEDIA', href: '/media' },
  { name: 'CONTACTO', href: '/contacto' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-stone-950/85 backdrop-blur-md border-b border-amber-500/15 shadow-lg shadow-black/30'
          : 'bg-linear-to-b from-black/60 to-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/logo.png"
              alt="Quatrotempo"
              width={40}
              height={40}
              className="rounded-full ring-1 ring-amber-500/40 transition-transform group-hover:scale-110"
              priority
            />
            <span className="font-display text-xl font-bold tracking-wide text-white">
              QUATRO<span className="text-amber-400">TEMPO</span>
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-1 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
                    pathname === item.href
                      ? 'text-amber-400'
                      : 'text-stone-200 hover:text-amber-300'
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 bg-amber-400 transition-all duration-300 ${
                      pathname === item.href ? 'w-full' : 'w-0'
                    }`}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-amber-300 p-2"
              aria-label="Abrir menú"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-stone-950/95 rounded-b-lg border-t border-amber-500/10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    pathname === item.href
                      ? 'text-amber-400 bg-amber-400/10'
                      : 'text-white hover:text-amber-300 hover:bg-white/10'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

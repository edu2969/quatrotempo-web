'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { HeartIcon, ChatBubbleLeftIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

// Datos simulados de Instagram - En producción esto vendría de la API de Instagram
const instagramPosts = [
  {
    id: 1,
    image: '/resources/integrante1.png',
    caption: '🎸 Ensayando nuestro nuevo single! ¿Qué les parece? #quatrotempo #musica #rock',
    likes: 234,
    comments: 15,
    timestamp: '2h'
  },
  {
    id: 2,
    image: '/resources/integrante2.png',
    caption: '🥁 La energía en los ensayos es increíble! #bateria #musica #energia',
    likes: 189,
    comments: 8,
    timestamp: '5h'
  },
  {
    id: 3,
    image: '/resources/integrante3.png',
    caption: '🎵 Trabajando en nuevas melodías para ustedes #bajo #composicion #studio',
    likes: 156,
    comments: 12,
    timestamp: '1d'
  },
  {
    id: 4,
    image: '/resources/integrante4.png',
    caption: '🎤 Grabando vocals para nuestro próximo álbum! #voz #recording #album',
    likes: 278,
    comments: 22,
    timestamp: '2d'
  },
  {
    id: 5,
    image: '/resources/header_01.png',
    caption: '🔥 ¡Qué noche increíble en el concierto! Gracias a todos los que vinieron #concierto #live',
    likes: 445,
    comments: 38,
    timestamp: '3d'
  },
  {
    id: 6,
    image: '/resources/integrante1.png',
    caption: '🎸 Nueva guitarra, nuevos sonidos! #gear #guitarra #music',
    likes: 167,
    comments: 9,
    timestamp: '4d'
  },
  {
    id: 7,
    image: '/resources/integrante2.png',
    caption: '💫 Momentos antes de subir al escenario #backstage #concert #nervios',
    likes: 198,
    comments: 14,
    timestamp: '5d'
  },
  {
    id: 8,
    image: '/resources/integrante3.png',
    caption: '🎼 Componiendo nuevas líneas de bajo #composicion #bass #creative',
    likes: 134,
    comments: 7,
    timestamp: '6d'
  },
  {
    id: 9,
    image: '/resources/integrante4.png',
    caption: '✨ Letras que llegan al alma #lyrics #writing #inspiration',
    likes: 223,
    comments: 16,
    timestamp: '1w'
  }
];

interface InstagramPostProps {
  post: typeof instagramPosts[0];
}

function InstagramPost({ post }: InstagramPostProps) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-yellow-400/30 transition-all duration-300 group">
      {/* Imagen */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={post.image}
          alt={`Post ${post.id}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Contenido */}
      <div className="p-4">
        {/* Acciones */}
        <div className="flex items-center gap-4 mb-3">
          <button
            onClick={handleLike}
            className="transition-colors duration-200"
          >
            {liked ? (
              <HeartIconSolid className="w-6 h-6 text-red-500" />
            ) : (
              <HeartIcon className="w-6 h-6 text-white hover:text-red-500" />
            )}
          </button>
          <ChatBubbleLeftIcon className="w-6 h-6 text-white hover:text-yellow-400 cursor-pointer transition-colors duration-200" />
          <PaperAirplaneIcon className="w-6 h-6 text-white hover:text-yellow-400 cursor-pointer transition-colors duration-200" />
        </div>

        {/* Likes */}
        <p className="text-white font-semibold text-sm mb-2">
          {likes.toLocaleString()} likes
        </p>

        {/* Caption */}
        <p className="text-gray-300 text-sm leading-relaxed mb-2">
          <span className="font-semibold text-white">quatro tempo</span> {post.caption}
        </p>

        {/* Comments and time */}
        <div className="flex justify-between items-center text-xs text-gray-400">
          <button className="hover:text-white transition-colors">
            Ver los {post.comments} comentarios
          </button>
          <span>{post.timestamp}</span>
        </div>
      </div>
    </div>
  );
}

export default function InstagramGrid() {
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [loading, setLoading] = useState(false);

  const loadMorePosts = () => {
    setLoading(true);
    setTimeout(() => {
      setVisiblePosts(prev => Math.min(prev + 3, instagramPosts.length));
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 1000
      ) {
        if (visiblePosts < instagramPosts.length && !loading) {
          loadMorePosts();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visiblePosts, loading]);

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-6">
            NUESTRO MEDIA
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Síguenos en nuestras aventuras musicales a través de Instagram. 
            Descubre momentos únicos, ensayos y conciertos.
          </p>
          <a
            href="https://instagram.com/quatro.tempo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Seguir en Instagram
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {instagramPosts.slice(0, visiblePosts).map((post) => (
            <InstagramPost key={post.id} post={post} />
          ))}
        </div>

        {/* Loading or Load More */}
        {loading && (
          <div className="text-center mt-12">
            <div className="inline-flex items-center px-6 py-3 text-yellow-400">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Cargando más posts...
            </div>
          </div>
        )}

        {visiblePosts >= instagramPosts.length && (
          <div className="text-center mt-12">
            <p className="text-gray-400">¡Has visto todos nuestros posts!</p>
            <a
              href="https://instagram.com/quatro.tempo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              Ver más en Instagram →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
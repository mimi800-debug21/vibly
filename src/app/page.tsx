'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-400 to-purple-400 gradient-orb opacity-30" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-br from-pink-400 to-rose-400 gradient-orb opacity-20" style={{ animationDelay: '-4s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-cyan-400 to-blue-400 gradient-orb opacity-20" style={{ animationDelay: '-2s' }} />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-50" />

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-20">
        
        {/* Header */}
        <header className={`flex justify-between items-center mb-24 md:mb-32 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="gradient-text">Vibly</span>
          </h1>
          <nav>
            <Link 
              href="/hub" 
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-all duration-200 hover:scale-105 inline-block"
            >
              Hub
            </Link>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col items-center text-center mb-24 md:mb-32">
          <h2 
            className={`text-5xl md:text-7xl lg:text-8xl font-black mb-8 md:mb-10 tracking-tight max-w-4xl ${
              isVisible ? 'animate-slide-up' : 'opacity-0'
            }`}
            style={{ animationFillMode: 'forwards' }}
          >
            <span className="gradient-text">Play the moment</span>
          </h2>
          <p 
            className={`text-gray-500 text-lg md:text-xl lg:text-2xl mb-12 md:mb-16 max-w-lg font-light ${
              isVisible ? 'animate-slide-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
          >
            Kurze Spiele. Trends. <span className="font-medium text-gray-700">Sofort spielbar.</span>
          </p>
          <Link href="/hub">
            <button 
              className={`button-primary ${
                isVisible ? 'opacity-100 animate-pulse-slow' : 'opacity-0'
              } transition-opacity duration-700`}
              style={{ animationDelay: '0.2s' }}
            >
              Jetzt spielen
            </button>
          </Link>
        </section>

        {/* Floating decorative element */}
        <div 
          className={`flex justify-center mb-24 md:mb-32 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-700`}
          style={{ animationDelay: '0.3s' }}
        >
          <div className="relative">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-30 blur-xl animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 opacity-60 animate-float" />
            </div>
          </div>
        </div>

        {/* Explanation Cards */}
        <section 
          className={`mb-24 md:mb-32 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-700`}
          style={{ animationDelay: '0.4s' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div 
              className={`card text-center ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
              <div className="text-6xl md:text-7xl mb-5 transform hover:scale-110 transition-transform duration-300 inline-block">🎯</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Auswählen</h3>
              <p className="text-gray-500 text-base leading-relaxed">Wähle dein Spiel aus dem Hub</p>
            </div>

            <div 
              className={`card text-center ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
            >
              <div className="text-6xl md:text-7xl mb-5 transform hover:scale-110 transition-transform duration-300 inline-block">🎮</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Spielen</h3>
              <p className="text-gray-500 text-base leading-relaxed">Sofort loslegen ohne Wartezeit</p>
            </div>

            <div 
              className={`card text-center ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
            >
              <div className="text-6xl md:text-7xl mb-5 transform hover:scale-110 transition-transform duration-300 inline-block">🔥</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Teilen</h3>
              <p className="text-gray-500 text-base leading-relaxed">Teile deine Erfolge mit Freunden</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer 
          className={`text-center ${
            isVisible ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-700`}
          style={{ animationDelay: '0.8s' }}
        >
          <div className="flex justify-center gap-8 text-sm font-medium text-gray-400">
            <a href="/impressum" className="hover:text-gray-600 transition-all duration-200 hover:scale-105 inline-block">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:text-gray-600 transition-all duration-200 hover:scale-105 inline-block">
              Datenschutz
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}

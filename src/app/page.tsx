'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-subtle">
      {/* Content Container */}
      <div className="max-w-5xl mx-auto px-8 md:px-12 lg:px-16">
        
        {/* Header */}
        <header className={`flex justify-between items-center pt-16 md:pt-24 pb-12 md:pb-16 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-700`}>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
            <span className="gradient-text">Vibly</span>
          </h1>
          <nav>
            <Link 
              href="/hub" 
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              Hub
            </Link>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col items-center text-center py-12 md:py-20">
          <h2 
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight text-gray-900 ${
              isVisible ? 'animate-slide-up' : 'opacity-0'
            }`}
            style={{ animationFillMode: 'forwards' }}
          >
            Play the moment
          </h2>
          <p 
            className={`text-gray-500 text-base md:text-lg lg:text-xl mb-10 md:mb-12 max-w-md leading-relaxed ${
              isVisible ? 'animate-slide-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
          >
            Kurze Spiele. Trends. Sofort spielbar.
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

        {/* Decorative Element */}
        <div 
          className={`flex justify-center py-12 md:py-16 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-700`}
          style={{ animationDelay: '0.3s' }}
        >
          <div className="relative">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 opacity-20 rotate-12 animate-float" />
            <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-400 opacity-30 -rotate-6" />
          </div>
        </div>

        {/* Explanation Cards */}
        <section 
          className={`py-12 md:py-16 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-700`}
          style={{ animationDelay: '0.4s' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <div 
              className={`card text-center ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
              <div className="text-5xl md:text-6xl mb-4">🎯</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">Auswählen</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Wähle dein Spiel aus dem Hub</p>
            </div>

            <div 
              className={`card text-center ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
            >
              <div className="text-5xl md:text-6xl mb-4">🎮</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">Spielen</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Sofort loslegen ohne Wartezeit</p>
            </div>

            <div 
              className={`card text-center ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
            >
              <div className="text-5xl md:text-6xl mb-4">🔥</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">Teilen</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Teile deine Erfolge mit Freunden</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer 
          className={`py-12 md:py-16 text-center ${
            isVisible ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-700`}
          style={{ animationDelay: '0.8s' }}
        >
          <div className="flex justify-center gap-8 text-sm font-medium text-gray-400">
            <a href="/impressum" className="hover:text-gray-600 transition-colors">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:text-gray-600 transition-colors">
              Datenschutz
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}

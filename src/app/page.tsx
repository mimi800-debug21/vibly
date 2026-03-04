'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-[#fafafa] relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#bef264] opacity-20 blob" />
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-[#3b82f6] opacity-15 blob" style={{ animationDelay: '-4s' }} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-[#ec4899] opacity-10 blob" style={{ animationDelay: '-2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <header className={`flex justify-between items-center pt-12 pb-16 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-500`}>
          <h1 className="text-3xl md:text-4xl font-black tracking-tighter">
            <span className="gradient-text">Vibly</span>
          </h1>
          <nav>
            <Link 
              href="/hub" 
              className="text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors"
            >
              Hub
            </Link>
          </nav>
        </header>

        {/* Hero */}
        <section className="py-16 md:py-24 text-center">
          <h2 
            className={`text-5xl sm:text-7xl md:text-8xl font-black mb-6 md:mb-8 tracking-tighter leading-none ${
              isVisible ? 'animate-slide-up' : 'opacity-0'
            }`}
            style={{ animationFillMode: 'forwards' }}
          >
            Play what's
            <br />
            <span className="gradient-text">trending.</span>
          </h2>
          <p 
            className={`text-gray-500 text-lg md:text-xl lg:text-2xl mb-10 md:mb-12 max-w-lg mx-auto font-medium ${
              isVisible ? 'animate-slide-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
          >
            Short games, viral challenges & daily chaos.
          </p>
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${
              isVisible ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-500`}
            style={{ animationDelay: '0.2s' }}
          >
            <Link href="/hub">
              <button className="button-primary">
                Enter Vibly →
              </button>
            </Link>
            <Link href="/67-rush">
              <button className="button-secondary">
                See today's games
              </button>
            </Link>
          </div>
        </section>

        {/* How it works */}
        <section 
          className={`py-16 md:py-24 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500`}
          style={{ animationDelay: '0.3s' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div 
              className={`card text-center ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              <div className="text-6xl md:text-7xl mb-4 animate-float">🎯</div>
              <h3 className="text-2xl font-bold mb-2">Pick a game</h3>
              <p className="text-gray-500 text-base">Choose from daily trending games</p>
            </div>

            <div 
              className={`card text-center ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
              <div className="text-6xl md:text-7xl mb-4 animate-float" style={{ animationDelay: '-1s' }}>⚡</div>
              <h3 className="text-2xl font-bold mb-2">Play 10–30s</h3>
              <p className="text-gray-500 text-base">Quick rounds, instant fun</p>
            </div>

            <div 
              className={`card text-center ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
            >
              <div className="text-6xl md:text-7xl mb-4 animate-float" style={{ animationDelay: '-2s' }}>🔥</div>
              <h3 className="text-2xl font-bold mb-2">Share & compare</h3>
              <p className="text-gray-500 text-base">Beat your friends' scores</p>
            </div>
          </div>
        </section>

        {/* Featured Game Preview */}
        <section 
          className={`py-16 md:py-24 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500`}
          style={{ animationDelay: '0.7s' }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-2">Featured Today</h3>
            <p className="text-gray-500">One game. Infinite attempts.</p>
          </div>
          <Link href="/67-rush">
            <div className="game-card max-w-lg mx-auto text-center">
              <span className="badge badge-trending mb-4">🔥 Trending</span>
              <div className="text-7xl mb-4 animate-float">🔢</div>
              <h4 className="text-3xl font-black mb-2">67 Rush</h4>
              <p className="text-gray-500 text-lg mb-4">Hit exactly 67. Or don't.</p>
              <div className="flex gap-2 justify-center text-sm text-gray-400">
                <span className="badge badge-daily">Daily</span>
                <span className="badge badge-viral">Viral</span>
              </div>
            </div>
          </Link>
        </section>

        {/* Footer */}
        <footer 
          className={`py-12 text-center ${
            isVisible ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500`}
          style={{ animationDelay: '0.8s' }}
        >
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm font-medium text-gray-400">
            <a href="/about" className="hover:text-gray-600 transition-colors">About</a>
            <a href="/terms" className="hover:text-gray-600 transition-colors">Terms</a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">TikTok</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">Instagram</a>
          </div>
        </footer>
      </div>
    </main>
  );
}

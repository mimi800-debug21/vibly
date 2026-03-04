'use client';

import Link from 'next/link';
import { useState } from 'react';

const games = [
  { 
    id: 1, 
    name: '67 Rush', 
    description: 'Hit exactly 67',
    icon: '🔢', 
    status: 'Trending',
    accent: '#bef264',
    slug: '67-rush'
  },
];

const badgeClasses: Record<string, string> = {
  Trending: 'badge-trending',
  Daily: 'badge-daily',
  New: 'badge-new',
  Viral: 'badge-viral',
};

export default function Hub() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#fafafa] relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-40 right-20 w-64 h-64 bg-[#3b82f6] opacity-15 blob" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#ec4899] opacity-10 blob" style={{ animationDelay: '-3s' }} />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#fafafa]/90 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-3xl font-black tracking-tighter hover:opacity-70 transition-opacity">
              <span className="gradient-text">Vibly</span>
            </Link>
            <span className="badge badge-trending">🔥 Trending now</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="relative z-10 px-6 md:px-12 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game, index) => (
              <Link
                key={game.id}
                href={`/${game.slug}`}
                className="block group"
                onMouseEnter={() => setHoveredCard(game.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`game-card ${
                    hoveredCard === game.id ? '' : ''
                  }`}
                  style={{
                    animation: `slideUp 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) ${index * 0.1}s forwards`,
                    opacity: 0,
                  }}
                >
                  {/* Status Badge */}
                  <span className={`badge ${badgeClasses[game.status]} mb-4`}>
                    {game.status}
                  </span>

                  {/* Icon */}
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-4 animate-float"
                    style={{ 
                      background: `linear-gradient(135deg, ${game.accent} 0%, ${game.accent}aa 100%)`,
                    }}
                  >
                    {game.icon}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-black text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
                    {game.name}
                  </h3>
                  <p className="text-gray-500 text-base font-medium">
                    {game.description}
                  </p>

                  {/* Additional Badges */}
                  <div className="flex gap-2 mt-4">
                    <span className="badge badge-daily">Daily</span>
                    <span className="badge badge-viral">Viral</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Loading indicator */}
          <div className="flex justify-center mt-16">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#bef264] animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse" style={{ animationDelay: '0.15s' }} />
              <div className="w-2 h-2 rounded-full bg-[#ec4899] animate-pulse" style={{ animationDelay: '0.3s' }} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

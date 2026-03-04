'use client';

import Link from 'next/link';
import { useState } from 'react';

const games = [
  { id: 1, name: 'Snake', icon: '🐍', status: 'Trending', accent: '#ef4444' },
  { id: 2, name: 'Tetris', icon: '🧱', status: 'Daily', accent: '#3b82f6' },
  { id: 3, name: 'Pong', icon: '🏓', status: 'New', accent: '#22c55e' },
  { id: 4, name: 'Breakout', icon: '💥', status: 'Trending', accent: '#f97316' },
  { id: 5, name: 'Pac-Man', icon: '👻', status: 'Daily', accent: '#eab308' },
  { id: 6, name: 'Memory', icon: '🃏', status: 'New', accent: '#a855f7' },
  { id: 7, name: '2048', icon: '🔢', status: 'Trending', accent: '#6366f1' },
  { id: 8, name: 'Minesweeper', icon: '💣', status: 'Daily', accent: '#64748b' },
];

const badgeClasses: Record<string, string> = {
  Trending: 'badge-trending',
  Daily: 'badge-daily',
  New: 'badge-new',
};

export default function Hub() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-subtle">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-8 md:px-12 lg:px-16 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 hover:opacity-70 transition-opacity">
              <span className="gradient-text">Vibly</span>
            </Link>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <p className="text-sm font-medium text-gray-500">Trending right now</p>
          </div>
        </div>
      </header>

      {/* Content Grid */}
      <section className="px-8 md:px-12 lg:px-16 py-8 md:py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {games.map((game, index) => (
              <Link
                key={game.id}
                href={`/${game.name.toLowerCase()}`}
                className="block group"
                onMouseEnter={() => setHoveredCard(game.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`card relative ${
                    hoveredCard === game.id ? 'shadow-lg' : ''
                  } transition-all duration-300`}
                  style={{
                    animation: `slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.04}s forwards`,
                    opacity: 0,
                  }}
                >
                  {/* Status Badge */}
                  <span className={`badge ${badgeClasses[game.status]} mb-4`}>
                    {game.status}
                  </span>

                  {/* Icon Container */}
                  <div className="flex items-center gap-4 mb-3">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-105"
                      style={{ 
                        background: `linear-gradient(135deg, ${game.accent}15 0%, ${game.accent}25 100%)`,
                        border: `1px solid ${game.accent}30`
                      }}
                    >
                      {game.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {game.name}
                    </h3>
                  </div>

                  {/* Subtle accent line */}
                  <div 
                    className="h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, ${game.accent} 0%, transparent 100%)` }}
                  />
                </div>
              </Link>
            ))}
          </div>

          {/* Loading indicator */}
          <div className="flex justify-center mt-12 md:mt-16">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300 animate-pulse" />
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300 animate-pulse" style={{ animationDelay: '0.15s' }} />
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300 animate-pulse" style={{ animationDelay: '0.3s' }} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

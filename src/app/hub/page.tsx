'use client';

import Link from 'next/link';
import { useState } from 'react';

const games = [
  { id: 1, name: 'Snake', icon: '🐍', status: 'Trending', gradient: 'from-red-500 to-orange-500' },
  { id: 2, name: 'Tetris', icon: '🧱', status: 'Daily', gradient: 'from-blue-500 to-cyan-500' },
  { id: 3, name: 'Pong', icon: '🏓', status: 'New', gradient: 'from-green-500 to-emerald-500' },
  { id: 4, name: 'Breakout', icon: '💥', status: 'Trending', gradient: 'from-orange-500 to-amber-500' },
  { id: 5, name: 'Pac-Man', icon: '👻', status: 'Daily', gradient: 'from-yellow-500 to-amber-500' },
  { id: 6, name: 'Memory', icon: '🃏', status: 'New', gradient: 'from-purple-500 to-pink-500' },
  { id: 7, name: '2048', icon: '🔢', status: 'Trending', gradient: 'from-indigo-500 to-blue-500' },
  { id: 8, name: 'Minesweeper', icon: '💣', status: 'Daily', gradient: 'from-slate-600 to-gray-600' },
];

const badgeClasses: Record<string, string> = {
  Trending: 'badge-trending',
  Daily: 'badge-daily',
  New: 'badge-new',
};

export default function Hub() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-400 to-purple-400 gradient-orb opacity-20" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-pink-400 to-rose-400 gradient-orb opacity-15" style={{ animationDelay: '-4s' }} />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-50" />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-3xl font-bold tracking-tight hover:opacity-70 transition-all duration-200 hover:scale-105 inline-block">
              <span className="gradient-text">Vibly</span>
            </Link>
          </div>
          <p className="text-sm font-medium text-gray-500 mt-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Trending right now
          </p>
        </div>
      </header>

      {/* Content Grid */}
      <section className="relative z-10 px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {games.map((game, index) => (
              <Link
                key={game.id}
                href={`/${game.name.toLowerCase()}`}
                className="block group"
                onMouseEnter={() => setHoveredCard(game.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`card relative overflow-hidden ${
                    hoveredCard === game.id ? 'scale-[1.03]' : ''
                  } transition-all duration-300`}
                  style={{
                    animation: `slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s forwards`,
                    opacity: 0,
                  }}
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${game.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Status Badge */}
                  <span className={`badge ${badgeClasses[game.status]} mb-4`}>
                    {game.status}
                  </span>

                  {/* Game Icon Container */}
                  <div className="relative mb-4">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${game.gradient} flex items-center justify-center text-4xl shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <span className="filter drop-shadow-lg">{game.icon}</span>
                    </div>
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${game.gradient} blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />
                  </div>

                  {/* Game Name */}
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                    {game.name}
                  </h3>

                  {/* Arrow Indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Infinite scroll indicator */}
          <div className="flex justify-center mt-16">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gray-50 border border-gray-100">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

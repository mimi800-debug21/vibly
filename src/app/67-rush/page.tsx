'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';

const TARGET = 67;
const ROUND_TIME = 15;
const NUM_COUNT = 6;

function generateNumbers(): number[] {
  const numbers: number[] = [];
  for (let i = 0; i < NUM_COUNT; i++) {
    numbers.push(Math.floor(Math.random() * 20) + 1);
  }
  return numbers;
}

export default function Game67Rush() {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [sum, setSum] = useState(0);
  const [timeLeft, setTimeLeft] = useState(ROUND_TIME);
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'result'>('idle');
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [streak, setStreak] = useState(0);

  const startGame = useCallback(() => {
    setNumbers(generateNumbers());
    setSelected([]);
    setSum(0);
    setTimeLeft(ROUND_TIME);
    setGameState('playing');
    setScore(0);
  }, []);

  const toggleNumber = (num: number, index: number) => {
    if (gameState !== 'playing') return;
    
    setSelected(prev => {
      const isSelected = prev.includes(index);
      if (isSelected) {
        const newSelected = prev.filter(i => i !== index);
        setSum(newSelected.reduce((a, b) => a + numbers[b], 0));
        return newSelected;
      } else {
        const newSelected = [...prev, index];
        setSum(newSelected.reduce((a, b) => a + numbers[b], 0));
        return newSelected;
      }
    });
  };

  const endGame = useCallback(() => {
    setGameState('result');
    const gap = Math.abs(TARGET - sum);
    const newScore = sum === TARGET ? 1000 : Math.max(0, 1000 - gap * 10);
    setScore(newScore);
    
    if (sum === TARGET) {
      setStreak(prev => prev + 1);
    } else {
      setStreak(0);
    }
    
    if (newScore > bestScore) {
      setBestScore(newScore);
    }
  }, [sum, bestScore]);

  useEffect(() => {
    if (gameState !== 'playing') return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          endGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, endGame]);

  useEffect(() => {
    startGame();
  }, [startGame]);

  const shareResult = async () => {
    const text = `I scored ${score} in 67 Rush! ${sum === TARGET ? '🎯 Perfect 67!' : `So close: ${sum}`}\n\nPlay now:`;
    if (navigator.share) {
      await navigator.share({
        title: '67 Rush',
        text: text,
        url: window.location.href,
      });
    } else {
      await navigator.clipboard.writeText(text);
      alert('Copied to clipboard!');
    }
  };

  return (
    <main className="min-h-screen bg-[#fafafa] relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#bef264] opacity-20 blob" />
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-[#ec4899] opacity-15 blob" style={{ animationDelay: '-4s' }} />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#fafafa]/90 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-black tracking-tighter hover:opacity-70 transition-opacity">
              <span className="gradient-text">Vibly</span>
            </Link>
            <Link href="/hub" className="text-sm font-bold text-gray-500 hover:text-gray-900">
              Hub
            </Link>
          </div>
        </div>
      </header>

      {/* Game Area */}
      <section className="relative z-10 max-w-3xl mx-auto px-6 py-8">
        
        {/* Game Info */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-black mb-2">67 Rush</h1>
          <p className="text-gray-500 text-lg">Hit exactly 67. Or don&apos;t.</p>
        </div>

        {/* Timer & Score */}
        <div className="flex justify-between items-center mb-8 p-4 bg-white rounded-2xl border-2 border-gray-200">
          <div className="text-center">
            <p className="text-sm text-gray-400 font-bold uppercase">Time</p>
            <div className={`timer ${timeLeft <= 5 ? 'text-[#ec4899]' : 'text-gray-900'}`}>
              {timeLeft}s
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-400 font-bold uppercase">Target</p>
            <div className="text-3xl font-black text-gray-900">{TARGET}</div>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-400 font-bold uppercase">Sum</p>
            <div className={`text-3xl font-black ${sum === TARGET ? 'text-[#bef264]' : sum > TARGET ? 'text-[#ec4899]' : 'text-gray-900'}`}>
              {sum}
            </div>
          </div>
        </div>

        {/* Game Board */}
        {gameState === 'playing' && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {numbers.map((num, index) => (
              <button
                key={index}
                className={`number-btn ${selected.includes(index) ? 'selected' : ''}`}
                onClick={() => toggleNumber(num, index)}
              >
                {num}
              </button>
            ))}
          </div>
        )}

        {/* Result Screen */}
        {gameState === 'result' && (
          <div className="text-center p-8 bg-white rounded-3xl border-2 border-gray-200 mb-8 animate-bounce-in">
            <div className="text-6xl mb-4">
              {sum === TARGET ? '🎯' : sum > TARGET ? '😅' : '🤏'}
            </div>
            <div className="score-display mb-2 text-gray-900">
              {score}
            </div>
            <p className="text-xl font-bold text-gray-500 mb-4">
              {sum === TARGET ? (
                <span className="text-[#bef264]">Perfect 67! +1000</span>
              ) : (
                <>
                  You got <span className="text-gray-900 font-black">{sum}</span>{' '}
                  ({sum > TARGET ? '+' : ''}{TARGET - sum})
                </>
              )}
            </p>
            {streak >= 3 && (
              <div className="badge badge-viral mb-4">🔥 {streak} Day Streak!</div>
            )}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={shareResult} className="button-primary">
                Share Result
              </button>
              <button onClick={startGame} className="button-secondary">
                Play Again
              </button>
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-white rounded-2xl border-2 border-gray-200">
            <p className="text-sm text-gray-400 font-bold uppercase">Best</p>
            <p className="text-2xl font-black text-gray-900">{bestScore}</p>
          </div>
          <div className="text-center p-4 bg-white rounded-2xl border-2 border-gray-200">
            <p className="text-sm text-gray-400 font-bold uppercase">Streak</p>
            <p className="text-2xl font-black text-[#bef264]">{streak}</p>
          </div>
          <div className="text-center p-4 bg-white rounded-2xl border-2 border-gray-200">
            <p className="text-sm text-gray-400 font-bold uppercase">Rounds</p>
            <p className="text-2xl font-black text-gray-900">1</p>
          </div>
        </div>
      </section>
    </main>
  );
}

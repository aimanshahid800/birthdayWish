import React, { useEffect, useState } from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';

interface WelcomeScreenProps {
  onNext: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onNext }) => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, delay: number}>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center relative overflow-hidden">
      {/* 3D Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute animate-float-3d opacity-70"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              transform: `translateZ(${Math.random() * 100}px)`,
            }}
          >
            {particle.id % 3 === 0 ? (
              <Heart
                className="text-pink-400 drop-shadow-lg animate-pulse"
                size={particle.size}
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(236, 72, 153, 0.5))',
                }}
              />
            ) : particle.id % 3 === 1 ? (
              <Sparkles
                className="text-purple-400 drop-shadow-lg animate-spin"
                size={particle.size}
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(147, 51, 234, 0.5))',
                }}
              />
            ) : (
              <Star
                className="text-blue-400 drop-shadow-lg animate-bounce"
                size={particle.size}
                style={{
                  filter: 'drop-shadow(0 0 6px rgba(59, 130, 246, 0.5))',
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {Array.from({ length: 144 }, (_, i) => (
            <div
              key={i}
              className="border border-purple-500 animate-pulse"
              style={{
                animationDelay: `${(i * 0.1) % 3}s`,
                animationDuration: '3s',
              }}
            />
          ))}
        </div>
      </div>

      <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl max-w-2xl mx-4 text-center relative z-10 border border-purple-500/30 transform-gpu perspective-1000">
        <div className="transform-gpu rotate-x-5 hover:rotate-x-0 transition-transform duration-700">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6 animate-glow">
            Happy Birthday My Love!
          </h1>
          
          <div className="flex justify-center items-center gap-4 mb-8">
            <Heart 
              className="text-pink-400 animate-pulse-glow" 
              size={32}
              style={{ filter: 'drop-shadow(0 0 15px rgba(236, 72, 153, 0.7))' }}
            />
            <Sparkles 
              className="text-purple-400 animate-spin-slow" 
              size={32}
              style={{ filter: 'drop-shadow(0 0 12px rgba(147, 51, 234, 0.7))' }}
            />
          </div>
          
          <h2 className="text-xl md:text-2xl text-gray-300 mb-6 font-medium animate-fade-in-up">
            To the most amazing woman in my life
          </h2>
          
          <p className="text-gray-400 text-lg mb-8 italic leading-relaxed animate-fade-in-up-delay">
            "Every moment with you is a gift, and today we celebrate the greatest gift of all - YOU! 🌹"
          </p>
          
          <button
            onClick={onNext}
            className="group bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl transform hover:scale-110 transition-all duration-500 animate-pulse-glow hover:animate-none relative overflow-hidden"
            style={{
              boxShadow: '0 0 30px rgba(236, 72, 153, 0.5), 0 0 60px rgba(147, 51, 234, 0.3)',
            }}
          >
            <span className="relative z-10">Begin Your Surprise! 💕</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
        </div>
      </div>
    </div>
  );
};